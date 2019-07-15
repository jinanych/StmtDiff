package statementdiff;

/*
 * StmtDiff
 * %%
 * Copyright (C) 2019 - Chunhua Yang <jnych@126.com>
 * %%
 * Licensed under the MIT License
 * 
 */

import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.eclipse.jdt.internal.compiler.ast.ASTNode;
import org.eclipse.jdt.internal.compiler.ast.Argument;
import org.eclipse.jdt.internal.compiler.ast.Literal;
import org.eclipse.jdt.internal.compiler.ast.LocalDeclaration;
import org.eclipse.jdt.internal.compiler.ast.MessageSend;
import org.eclipse.jdt.internal.compiler.ast.Reference;
import org.eclipse.jdt.internal.compiler.ast.SingleNameReference;
import org.eclipse.jdt.internal.compiler.ast.ThisReference;
import org.eclipse.jdt.internal.compiler.ast.TypeReference;
import org.eclipse.jdt.internal.compiler.lookup.BlockScope;
import org.eclipse.jdt.internal.compiler.parser.Scanner;
import org.eclipse.jdt.internal.compiler.ast.Expression;

import statementdiff.differencing.model.MyDiffNode;
import statementdiff.differencing.model.StmtASTNode;
import statementdiff.model.DifferencingConstant;
import statementdiff.tool.StmtDiffTool;

public class StmtDifferencing {
	ASTNode leftnode;
	ASTNode rightnode;
	StatementTreeBuilder builder;
	
	StmtASTNode leftroot = null;
	StmtASTNode rightroot = null;
	
	StmtDiffTool tool = new StmtDiffTool();
	private Scanner leftfScanner;
	private Scanner rightfScanner;
	
	
	public StmtDifferencing(Scanner leftfScanner, Scanner rightfScanner) {
		super();
		this.leftfScanner = leftfScanner;
		this.rightfScanner = rightfScanner;
	}
	public StmtDifferencing(Scanner leftfScanner, Scanner rightfScanner, ASTNode leftnode, ASTNode rightnode) {
		super();
		this.leftfScanner = leftfScanner;
		this.rightfScanner = rightfScanner;
		this.leftnode = leftnode;
		this.rightnode = rightnode;
		builder = new StatementTreeBuilder();
	}
	private void createTree(){
		builder.initialize(leftfScanner);
		this.leftnode.traverse(builder, (BlockScope)null);
		 leftroot = builder.getRoot();
	//	 tool.generateValue(leftroot);
		 tool.generateDepth(leftroot);
		 
		builder.initialize(rightfScanner);
		this.rightnode.traverse(builder, (BlockScope)null);
		 rightroot = builder.getRoot();
	//	 tool.generateValue(rightroot);
		 tool.generateDepth(rightroot);
	}
	public MyDiffNode extractDifferencing(){
		createTree();
		if(leftroot == null || rightroot == null)
			return null;
		MyDiffNode root = extractDifferencing(leftroot,  rightroot);
		return root;
	}
	public MyDiffNode extractDifferencing(StmtASTNode leftastnode, StmtASTNode rightastnode){
		MyDiffNode root = new MyDiffNode(leftastnode, rightastnode);
		root.setDiffpartname(leftastnode.getWhichpart());
		extractDifferencing(root,  leftastnode,  rightastnode);
		
		if (hasChanges(root) ) {
	        return root;
	    }
	   return null;
	}
	private boolean hasNoneChildren(StmtASTNode astnode){
		return astnode.getChildren() == null || astnode.getChildren().size() == 0;
	}
	private void extractDifferencing(MyDiffNode root, StmtASTNode leftastnode, StmtASTNode rightastnode){
		if (this.nodeExactlyMatched(leftastnode, rightastnode))
			return;
		root.setDiffType(DifferencingConstant.difftype_change);
		root.setIsdiffentity(false);
		root.setIsstructural(false);
		if( isLeaf(leftastnode) || isLeaf(rightastnode))
		{
			processLeaf(root, leftastnode, rightastnode);
			return;
		}
		if(neednotFurtherAnlysis(root, leftastnode, rightastnode))
				return ;
		RecursiveExprProcesser recursivechecker = new RecursiveExprProcesser(this.leftfScanner, this.rightfScanner);
		MyDiffNode diffnode = recursivechecker.parse(leftastnode, rightastnode);
		if( diffnode != null){
			root.setDiffpartname(rightastnode.getWhichpart());
			if( diffnode.getChildren() != null && diffnode.getChildren().size()>0){
				for( MyDiffNode child: diffnode.getChildren() )
					root.addAChild(child);
			}else{
				root.setDiffType(diffnode.getDiffType());
				root.setContentpattern(diffnode.getContentpattern());
				root.setNestedexprpatterns(diffnode.getNestedexprpatterns());
			}
			return ;
		}
		List<StmtASTNode> leftchildren = leftastnode.getChildren();
		List<StmtASTNode> rightchildren = rightastnode.getChildren();
		traverseChildren(root, leftchildren, rightchildren);
    }
	
	private List<OrderChangeTuple> processOrderChanges(MyDiffNode root,List<StmtASTNode> leftnodes, List<StmtASTNode> rightnodes,
			int exactpairedi[] , int exactpairedj[] , int paircount){
		//check orderchanges
		List<OrderChangeTuple> ordertuples = this.checkOrderChanges(leftnodes, rightnodes, exactpairedi, exactpairedj, paircount);
		
		if(ordertuples.size()>0){
			for(OrderChangeTuple tuple: ordertuples){
				MyDiffNode diffnode = new MyDiffNode(tuple.leftnode, tuple.rightnode);
				diffnode.setDiffType(DifferencingConstant.difftype_change);
    			diffnode.setChangetype(DifferencingConstant.changetype_orderchanged);
    		//	diffnode.setOrderChangeTuple(tuple.lefti, tuple.righti);
    			diffnode.setOrderChangeTuple(tuple.leftelementindex, tuple.rightelementindex);
    			
    			if(tuple.leftnode.getWhichpart().equals( tuple.rightnode.getWhichpart())){
					diffnode.setDiffpartname(tuple.leftnode.getWhichpart());
					diffnode.setAcrosselements(false);
				}else{
					diffnode.setDiffpartname(tuple.leftnode.getWhichpart()+"->"+tuple.rightnode.getWhichpart());
					diffnode.setAcrosselements(true);
				}
				diffnode.setIsstructural(true);
    			root.addAChild(diffnode);
			}
		}
		return ordertuples;
	}
	
	private void traverseChildren(MyDiffNode root,List<StmtASTNode> leftchildren, List<StmtASTNode> rightchildren){
		MatchedRes matchedres = this.preProcessMatch(leftchildren, rightchildren);
		
		List<StmtASTNode> leftnodes1 = new LinkedList<StmtASTNode>();
		leftnodes1.addAll(leftchildren);
    	List<StmtASTNode> rightnodes1 = new LinkedList<StmtASTNode>();
    	rightnodes1.addAll(rightchildren);
    	List<OrderChangeTuple> ordertuples = new LinkedList<OrderChangeTuple>();
		if(matchedres.leftnodes_fullmatched.size()>1){
			ordertuples = processOrderChanges(root, leftnodes1, rightnodes1, matchedres.exactpairedi, matchedres.exactpairedj, matchedres.leftnodes_fullmatched.size());
		}
		leftnodes1.removeAll(matchedres.leftnodes_fullmatched);
		rightnodes1.removeAll(matchedres.rightnodes_fullmatched);
		if(leftnodes1.size() == 0 && rightnodes1.size() == 0){
			if(ordertuples == null || ordertuples.size() == 0)
				root.setDiffType("NO_CHANGE");
			return ;
		}
		//check identicalelementsindifferentpart_tuples
		if(matchedres.identicalelementsindifferentpart_tuples.size()>0){
			root.setChangetype(DifferencingConstant.changetype_hasidenticalelementsIndifferentParts);
			
			for(NodeTuple identicaltuple: matchedres.identicalelementsindifferentpart_tuples){
				root.addIdenticalelements_in_tuple_left(identicaltuple.left);
				root.addIdenticalelements_in_tuple_right(identicaltuple.right);
				if(root.getLeftnode().getWhichpart().equals( root.getRightnode().getWhichpart())){
					root.setDiffpartname(root.getLeftnode().getWhichpart());
					root.setAcrosselements(false);
				}else{
					root.setDiffpartname(root.getLeftnode().getWhichpart()+"->"+root.getRightnode().getWhichpart());
					root.setAcrosselements(true);
				}
				root.setIsstructural(true);
		
			}
			return;
		}
		if(leftnodes1.size() == 0 && rightnodes1.size() == 0)
			return ;
		List<MyDiffNode> allchanges = new LinkedList<MyDiffNode>();
		if(leftnodes1.size() > 0 && rightnodes1.size() == 0){//deleted
			for(StmtASTNode astnode: leftnodes1){
				String whichpart = astnode.getWhichpart();
				if(isWhichpartCannotAddedDeleted(whichpart)){
					root.getChildren().clear();
					processException(root);
					return;
				}
    			MyDiffNode diffnode = this.makeNode(astnode, null, 
    					astnode.getWhichpart(), DifferencingConstant.difftype_delete, 
    					false, false);
    			allchanges.add(diffnode);
    		}
		}else
		if(leftnodes1.size() == 0 && rightnodes1.size() > 0){//add
			for(StmtASTNode astnode: rightnodes1){
				String whichpart = astnode.getWhichpart();
				if(isWhichpartCannotAddedDeleted(whichpart)){
					root.getChildren().clear();
					processException(root);
					return;
				}
    			MyDiffNode diffnode = this.makeNode(null, astnode, 
    					astnode.getWhichpart(), DifferencingConstant.difftype_add, 
    					false, false);
    			allchanges.add(diffnode);
			}
		}else {
			MatchedByElementPartTupleRes res = matchedByWhichPart( root, leftnodes1, rightnodes1);
			if(res.hasexception){
					processException(root);
					return;
			}
			List<MyDiffNode> whichparchanges = res.changes;
			allchanges.addAll(whichparchanges);
		}
		if( allchanges.isEmpty())
			root.setDiffType("NO_CHANGE");
		else
			for(MyDiffNode change : allchanges){
				root.addAChild(change);
			}
	}
	private void processException(MyDiffNode root){
		root.setChangetype(DifferencingConstant.changetype_elementpartmatchedexception);
		root.setNote(DifferencingConstant.changetype_elementpartmatchedexception);
		
		if(root.getLeftnode().getWhichpart().equals(root.getRightnode().getWhichpart())){
			root.setDiffpartname(root.getLeftnode().getWhichpart());
			root.setAcrosselements(false);
		}else{
			root.setDiffpartname(root.getLeftnode().getWhichpart()+"->"+ root.getRightnode().getWhichpart());
			root.setAcrosselements(true);
		}
		if (root.getLeftnode().getAstnode() == null || root.getRightnode().getAstnode() == null ||
				!root.getLeftnode().getAstnode().getClass().getSimpleName().equals(root.getRightnode().getAstnode().getClass().getSimpleName())){
			root.setIsdiffentity(true);
		}else{
			root.setIsdiffentity(false);
		}
		root.setIsstructural(true);
	}
	
	private MyDiffNode makeNode( StmtASTNode leftastnode, StmtASTNode rightastnode,
			String whichpartname,
			String difftype, boolean isdiffentity, boolean isstructural){
		MyDiffNode diffnode = new MyDiffNode(leftastnode, rightastnode);
		diffnode.setDiffpartname( whichpartname);
		diffnode.setDiffType(difftype);
		diffnode.setIsdiffentity(isdiffentity);
		diffnode.setIsstructural(isstructural);
		return diffnode;
	}
	
	private class MatchedByElementPartTupleRes{
		List<MyDiffNode> changes = new LinkedList<MyDiffNode>();
		boolean hasexception = false;
		
	}
	private  MatchedByElementPartTupleRes matchedByWhichPart( MyDiffNode root,List<StmtASTNode> leftremainnodes, List<StmtASTNode> rightremainnodes){
		Set<String> diffpartnameset = new HashSet<String>();
		Map<String, Object> leftdiffartSet = new HashMap<String, Object>();
	    Map<String, Object> rightdiffartSet = new HashMap<String, Object>();
	    MatchedByElementPartTupleRes res = new MatchedByElementPartTupleRes();
	    for (StmtASTNode partialastnode : leftremainnodes) {
	    	String whichpart = partialastnode.getWhichpart();
	    	diffpartnameset.add(whichpart);
	    	List<StmtASTNode> leftnodes = (List)leftdiffartSet.get(whichpart);
	    	if(leftnodes == null)
	    		leftnodes = new LinkedList<StmtASTNode>();
	    	leftnodes.add(partialastnode);
	    	leftdiffartSet.put(whichpart, leftnodes);
        }
	    for (StmtASTNode partialastnode : rightremainnodes) {
            String whichpart = partialastnode.getWhichpart();
	    	diffpartnameset.add(whichpart);
	    	List<StmtASTNode> rightnodes = (List)rightdiffartSet.get(whichpart);
	    	if(rightnodes == null)
	    		rightnodes = new LinkedList<StmtASTNode>();
	    	rightnodes.add(partialastnode);
	    	rightdiffartSet.put(whichpart, rightnodes);
        }
	    List<MyDiffNode> allchanges = new LinkedList<MyDiffNode>();
    	
	    Map<String, Object> whichiparchanges = new HashMap<String, Object>();
	    for (String whichpart : diffpartnameset) {
        	List<StmtASTNode> leftnodes = (List)leftdiffartSet.get(whichpart);
        	List<StmtASTNode> rightnodes = (List)rightdiffartSet.get(whichpart);
        	if( isWhichpartCannotAddedDeleted(whichpart)
        	&& (leftnodes == null || rightnodes == null || leftnodes.size() == 0 
        	|| rightnodes.size() == 0)){
        		res.hasexception = true;
        		return res;
        	}
        	
        	List<MyDiffNode> changes = new LinkedList<MyDiffNode>();
        	if(leftnodes == null && rightnodes != null){
        		for(StmtASTNode astnode: rightnodes){
        			MyDiffNode diffnode = makeNode(  null,  astnode, whichpart,
        					DifferencingConstant.difftype_add,  false,  false);
        			//root.addAChild(diffnode);
        			changes.add(diffnode);
        		}
        	}else if(rightnodes == null && leftnodes != null){
        		for(StmtASTNode astnode: leftnodes){
        			MyDiffNode diffnode =  makeNode(  astnode, null,   whichpart,
        					DifferencingConstant.difftype_delete,  false,  false);
        			//root.addAChild(diffnode);
        			changes.add(diffnode);
        		}
        	}else {
        		if(leftnodes.size() ==1 && rightnodes.size() == 1){//change
    				MyDiffNode diffnode = this.extractDifferencing(leftnodes.get(0), rightnodes.get(0));
        			if(diffnode != null){
        				changes.add(diffnode);
        				//root.addAChild(diffnode);
        			}
        		}else{
    				List<SimilarAstNodeTuple> similartuples = this.matchSimilarAstnodes(leftnodes, rightnodes);
    				for(SimilarAstNodeTuple tuple: similartuples){
    					MyDiffNode diffnode = this.extractDifferencing(tuple.leftnode, tuple.rightnode);
    	    			if(diffnode != null){
    	    				//root.addAChild(diffnode);
    	    				changes.add(diffnode);
    	    			}
    	    			leftnodes.remove(tuple.leftnode);
    	    			rightnodes.remove(tuple.rightnode);
    				}
    				if(leftnodes.size()>0){
    					for(StmtASTNode astnode: leftnodes){
    						MyDiffNode diffnode = makeNode(  astnode, null,   whichpart,
    	        					DifferencingConstant.difftype_delete,  false,  false);
    		    		//	root.addAChild(diffnode);
    		    			changes.add(diffnode);
    		    		}
    				}
    				if(rightnodes.size()>0){
    					for(StmtASTNode astnode: rightnodes){
    		    			MyDiffNode diffnode =makeNode(  null,  astnode, whichpart,
    	        					DifferencingConstant.difftype_add,  false,  false);
    		    		//	root.addAChild(diffnode);
    		    			changes.add(diffnode);
    		    		}
    				}
    			}
        	}
        	whichiparchanges.put(whichpart, changes);
        	allchanges.addAll(changes);
	    }
	    res.changes = allchanges;
	    return res;
	}
	private List<SimilarAstNodeTuple> matchSimilarAstnodes(List<StmtASTNode> leftnodes, List<StmtASTNode> rightnodes){
		
		List<StmtASTNode> leftnodesmatched = new LinkedList<StmtASTNode>();
    	List<StmtASTNode> rightnodesmatched = new LinkedList<StmtASTNode>();
    	boolean paired[] = new boolean[rightnodes.size()];
		for(int i=0; i<paired.length; i++)
			paired[i] = false;
    	for(int i=0; i<leftnodes.size(); i++){
    		StmtASTNode leftnode = leftnodes.get(i);
			double maxsim = 0.0;
			int matchedj = -1;
			StmtASTNode nodematched = null;
			for(int j=0; j<rightnodes.size(); j++){
				if(paired[j])
					continue;
				StmtASTNode rightnode = rightnodes.get(j);
				double sim = 0.0;
				if(!isSameSyntaxEntity(leftnode, rightnode))
					sim = 0.0;
				 sim = tool.nGramsCal(leftnode, rightnode);
				if(sim > maxsim){
					maxsim = sim;
					nodematched = rightnode;
					matchedj = j;
				}
			}
			if(nodematched != null){
				leftnodesmatched.add(leftnode);
				rightnodesmatched.add(nodematched);
				paired[matchedj] = true;
			}
		}
    	List<SimilarAstNodeTuple> similartuples = new LinkedList<SimilarAstNodeTuple>();
    	if(leftnodesmatched.size()>0){
    		for(int i=0; i<leftnodesmatched.size(); i++){
    			SimilarAstNodeTuple tuple = new SimilarAstNodeTuple(leftnodesmatched.get(i), rightnodesmatched.get(i));
    			similartuples.add(tuple);
    		}
    	}
    	return similartuples;
	}
	private class SimilarAstNodeTuple{
		StmtASTNode leftnode;
		StmtASTNode rightnode;
		public SimilarAstNodeTuple(StmtASTNode leftnode,
				StmtASTNode rightnode) {
			super();
			this.leftnode = leftnode;
			this.rightnode = rightnode;
		}
		
	}
	private boolean isWhichpartCannotAddedDeleted(String whichpart){
		if(
    			whichpart.equals("name") 
    //	|| (whichpart.equals("id")
    //			&& !root.getLeftnode().getAstnode().getClass().getSimpleName().equals("BreakStmt")
    //			&& !root.getLeftnode().getAstnode().getClass().getSimpleName().equals("BreakStmt")
    //			)
    	||whichpart.equals("op")
    	|| whichpart.equals("left")
    	|| whichpart.equals("right")
    	||whichpart.equals("target")
    	||whichpart.equals("value")
    	|| whichpart.equals("?")
    	|| whichpart.equals(":")
    	|| whichpart.equals("thenexpr")
    	|| whichpart.equals("elseexpr")
    	|| whichpart.equals("if")
    //	|| whichpart.equals("condition")
    	)
    	return true;
	else
			return false;
	}
	private class OrderChangeTuple{
		StmtASTNode leftnode;
		int lefti;
		int leftelementindex;
		StmtASTNode rightnode;
		int righti;
		int rightelementindex;
		public OrderChangeTuple(StmtASTNode leftnode, int lefti,
				StmtASTNode rightnode, int righti
				) {
			super();
			this.leftnode = leftnode;
			this.lefti = lefti;
			this.rightnode = rightnode;
			this.righti = righti;
		}
	}
	private List<OrderChangeTuple> checkOrderChanges(List<StmtASTNode> leftnodes, List<StmtASTNode> rightnodes, 
			int pairedi[], int pairedj[], int pairedcount){
		List<IndexTuple> tuplesorderchanged = this.checkOrderingChange(pairedi, pairedj, pairedcount);
		if(tuplesorderchanged.size() == 0)
			return new LinkedList<OrderChangeTuple>();
		
		List<OrderChangeTuple> ordertuples = new LinkedList<OrderChangeTuple>();
		for(int i=0; i<tuplesorderchanged.size(); i++){
			IndexTuple indextuple = tuplesorderchanged.get(i);
				OrderChangeTuple ordertuple = new OrderChangeTuple(
						leftnodes.get(indextuple.left), indextuple.left,
						rightnodes.get(indextuple.right), indextuple.right );
				ordertuples.add(ordertuple);
		}
		return ordertuples;
	}
	private List<IndexTuple> checkOrderingChange(int pairedi[], int pairedj[], int pairedcount){
		IndexTuple[] matchedtuplesi = new IndexTuple[pairedcount];
		IndexTuple[] matchedtuplesj = new IndexTuple[pairedcount];
		int[] indicemapi = new int[pairedcount];
		int[] indicemapj = new int[pairedcount];
		//only the matched tuples considered
		IndexTuple[] adjustedtuplesi = new IndexTuple[pairedcount];
		
		for( int i=0, index = 0; i< pairedi.length; i++){
			if( pairedi[i] != -1){
				IndexTuple originaltuple = new IndexTuple( i, pairedi[i]);
				matchedtuplesi[index] = originaltuple;
				
				indicemapi[index] = i;//i mapped to index
				index++;
			}
		}
		for( int j=0, index = 0; j< pairedj.length; j++){
			if( pairedj[j] != -1){
				IndexTuple originaltuple = new IndexTuple( j, pairedj[j]);
				matchedtuplesj[index] = originaltuple;
				
				indicemapj[index] = j;//j mapped to index
				index++;
			}
		}
		
		for(int index = 0; index < pairedcount; index++){//adjust the index 
			IndexTuple originaltuplei= matchedtuplesi[index];
			int adjustedi = searchIndex(originaltuplei.left, indicemapi);
			int adjustedj = searchIndex(originaltuplei.right, indicemapj);
			IndexTuple adjsustedtuplei= new IndexTuple(adjustedi, adjustedj);
			adjustedtuplesi[index] = adjsustedtuplei;
		}
		//check
		List<IndexTuple> tuplesorderchanged = new LinkedList<IndexTuple>();
		for(int index = 0; index < pairedcount; index++){
			IndexTuple adjsustedtuplei = adjustedtuplesi[index];
			if( adjsustedtuplei.left != adjsustedtuplei.right){
				tuplesorderchanged.add(matchedtuplesi[index]);
			}
		}
		return tuplesorderchanged;
	}
	private int searchIndex(int index, int[] indicemap){//get the index mapped
		for( int i=0; i< indicemap.length; i++){
			if( indicemap[i] == index)
				return i;
		}
		return -1;
	}
	private class IndexTuple{
		int left;
		int right;
		public IndexTuple(int left, int right) {
			super();
			this.left = left;
			this.right = right;
		}
		
	}
	private class MatchedRes{
		List<StmtASTNode> leftnodes_fullmatched ;
    	List<StmtASTNode> rightnodes_fullmatched ;
    	List<NodeTuple>  identicalelementsindifferentpart_tuples ;
    	List<MovedNodeTuple>  movedtuples_lr;
		List<MovedNodeTuple>  movedtuples_rl;
		int exactpairedi[] ;
		int exactpairedj[] ;
		public MatchedRes(List<StmtASTNode> leftnodes_fullmatched,
				List<StmtASTNode> rightnodes_fullmatched,
				List<NodeTuple> identicalelementsindifferentpart_tuples,
				List<MovedNodeTuple> movedtuples_lr,
				List<MovedNodeTuple> movedtuples_rl, int[] exactpairedi,
				int[] exactpairedj) {
			super();
			this.leftnodes_fullmatched = leftnodes_fullmatched;
			this.rightnodes_fullmatched = rightnodes_fullmatched;
			this.identicalelementsindifferentpart_tuples = identicalelementsindifferentpart_tuples;
			this.movedtuples_lr = movedtuples_lr;
			this.movedtuples_rl = movedtuples_rl;
			this.exactpairedi = exactpairedi;
			this.exactpairedj = exactpairedj;
		}
		
	}
	private MatchedRes preProcessMatch(List<StmtASTNode> leftchildren, List<StmtASTNode> rightchildren){
		int pairedi[] = new int[leftchildren.size()];
		int pairedj[] = new int[rightchildren.size()];
		for(int i=0; i<pairedi.length; i++)
			pairedi[i] = -1;
		for(int i=0; i<pairedj.length; i++)
			pairedj[i] = -1;
		int exactpairedi[] = new int[leftchildren.size()];
		int exactpairedj[] = new int[rightchildren.size()];
		for(int i=0; i<exactpairedi.length; i++)
			exactpairedi[i] = -1;
		for(int i=0; i<exactpairedj.length; i++)
			exactpairedj[i] = -1;
		
		List<StmtASTNode> leftnodes_fullmatched = new LinkedList<StmtASTNode>();
    	List<StmtASTNode> rightnodes_fullmatched = new LinkedList<StmtASTNode>();
    	List<NodeTuple>  identicalelementsindifferentpart_tuples = new LinkedList<NodeTuple>();
    	for(int i=0; i<leftchildren.size(); i++){//exact match 
			StmtASTNode leftnode = leftchildren.get(i);
			for(int j=0; j<rightchildren.size(); j++){
				StmtASTNode rightnode = rightchildren.get(j);
				if(pairedj[j] != -1)
					continue;
				if( nodeExactlyMatched(leftnode, rightnode)){
					if(leftnode.getWhichpart().equals(rightnode.getWhichpart())){//first matching the elements in the same element part
						pairedj[j] = i;
						pairedi[i] = j;
						exactpairedi[i] = j;
						exactpairedj[j] = i;
						leftnodes_fullmatched.add(leftnode);
						rightnodes_fullmatched.add(rightnode);
						break;
					}
				/*	else{
						NodeTuple identicaltuple
							= new NodeTuple(leftnode, rightnode);
						identicalelementsindifferentpart_tuples.add(identicaltuple);
						pairedj[j] = i;
						pairedi[i] = j;
						break;
					}*/
					
				}
			}
		}
    	
    	List<MovedNodeTuple>  movedtuples_lr = new LinkedList<MovedNodeTuple>();
		List<MovedNodeTuple>  movedtuples_rl = new LinkedList<MovedNodeTuple>();
    /*	for(int i=0; i<leftchildren.size(); i++){//next move pattern match 
			if(pairedi[i] != -1)
				continue;
			PartialASTNode leftnode = leftchildren.get(i);
			for(int j=0; j<rightchildren.size(); j++){
				PartialASTNode rightnode = rightchildren.get(j);
				if(pairedj[j] != -1)
					continue;
				else {
					MovedTargetTuple matchedtargettuple = this.checkMovePattern(leftnode, rightnode, true);
					if(matchedtargettuple != null){
						MovedNodeTuple tuple = new MovedNodeTuple(leftnode, rightnode, matchedtargettuple, true);
						movedtuples_lr.add(tuple);//left in right
						pairedj[j] = i;
						pairedi[i] = j;
						
						break;
					}
					matchedtargettuple = this.checkMovePattern(rightnode, leftnode,true);
					if(matchedtargettuple != null){
						MovedNodeTuple tuple = new MovedNodeTuple(leftnode, rightnode, matchedtargettuple, false);
						movedtuples_rl.add(tuple);
						pairedj[j] = i;
						pairedi[i] = j;
						break;
					}
					
				}
			}
        }*/
    	return new MatchedRes(leftnodes_fullmatched , rightnodes_fullmatched ,identicalelementsindifferentpart_tuples 
    			,movedtuples_lr,movedtuples_rl, exactpairedi, exactpairedj);
	}
	
	private MovedTargetTuple checkMovePattern(StmtASTNode nodesource, StmtASTNode nodetarget, boolean considerclassname){
	// 	
		if(nodesource.getWhichpart().equals("op") || nodetarget.getWhichpart().equals("op")
		|| ( nodesource.getWhichpart().equals("name") && ( nodesource.getParent().getAstnode() instanceof MessageSend 
				||  nodesource.getParent().getAstnode() instanceof LocalDeclaration  || nodesource.getParent().getAstnode() instanceof Argument ) )
		|| ( nodetarget.getWhichpart().equals("name") && ( nodetarget.getParent().getAstnode() instanceof MessageSend 
				||  nodetarget.getParent().getAstnode() instanceof LocalDeclaration  || nodetarget.getParent().getAstnode() instanceof Argument ) )
		|| (nodesource.getWhichpart().equals("value") && nodetarget.getWhichpart().equals("target"))
		|| (nodesource.getWhichpart().equals("target") && nodetarget.getWhichpart().equals("value")) )
			return null;
	//	if( this.isLeaf(nodesource) || this.isLeaf(nodetarget))
	//		return null;
	//	String leftsymbolsvalue = tool.getChildrenSymbolString(nodesource);
	//	String rightsymbolsvalue = tool.getChildrenSymbolString(nodetarget);
		String leftsymbolsvalue = nodesource.getValue();
		String rightsymbolsvalue = nodetarget.getValue();
			
		if( rightsymbolsvalue.equals(leftsymbolsvalue)){
			MovedTargetTuple tuple = new MovedTargetTuple(nodetarget, true);
			return tuple;
		}else if( leftsymbolsvalue.length()>0 && rightsymbolsvalue.contains(leftsymbolsvalue) 
				&& checkCharBeforeAfter(rightsymbolsvalue, leftsymbolsvalue) ){
			List<StmtASTNode> children = nodetarget.getChildren();
			for(StmtASTNode child: children){
				if(isElementpartCannotEncap (child))
					continue;
				MovedTargetTuple candidate = checkMovePattern(nodesource, child, considerclassname);
				if(candidate != null){
					return candidate;
				}
			}
		//	MovedTargetTuple tuple = new MovedTargetTuple(nodetarget, false);
		//	return tuple;
			return null;
		}else
			return null;
	}
	private boolean isElementpartCannotEncap(StmtASTNode child){
		String elementpart = child.getWhichpart();
		if( elementpart == null || 
		( elementpart.equals("name") && ( child.getParent().getAstnode() instanceof MessageSend 
				||  child.getParent().getAstnode() instanceof LocalDeclaration  || child.getParent().getAstnode() instanceof Argument ) )
		|| elementpart.equals("type") || elementpart.equals("typearg")
		|| elementpart.equals("op") )
			return true;
		else
			return false;
		
	}
	private boolean checkCharBeforeAfter(String mainstring, String patternstring){//
		
		int index = mainstring.indexOf(patternstring);
		if( index > 0){
			char c1 = mainstring.charAt(index - 1);
			if( isCharInVar(c1) )
				return false;
		}
		index += patternstring.length();
		if( index < mainstring.length() ){
			char c2 = mainstring.charAt(index);
			if( isCharInVar(c2) )
				return false;
		}
		return true;
	}
	private boolean isCharInVar( char c){
		return (c>='a' && c<='z') || (c>='A' && c<='Z') || (c>='0' && c<='9') || (c == '_' ) ;
	}
	private class NodeTuple{
		StmtASTNode left = null;
		StmtASTNode right = null;
	}
	private class MovedNodeTuple{
		StmtASTNode leftnode;
		StmtASTNode rightnode;
		MovedTargetTuple matchedtargettuple ;
		boolean leftToright ;
	}
	private class MovedTargetTuple{
		StmtASTNode astnode= null;
		boolean fullmatched = false;
		public MovedTargetTuple(StmtASTNode astnode, boolean fullmatched) {
			super();
			this.astnode = astnode;
			this.fullmatched = fullmatched;
		}
	}
	
	private boolean nodeExactlyMatched(StmtASTNode leftnode, StmtASTNode rightnode){
		if(leftnode.getAstnode() != null && rightnode.getAstnode() != null 
			//	&& isSameSyntaxEntity(leftnode, rightnode) 
				&& leftnode.getValue().equals(rightnode.getValue()))
			return true;
		else
			return false;
	}
	
	
	private boolean neednotFurtherAnlysis(MyDiffNode root, StmtASTNode leftastnode, StmtASTNode rightastnode){
		if (!isSameSyntaxEntity(leftastnode, rightastnode)){
			root.setIsdiffentity(true);
			if(leftastnode.getWhichpart().equals(rightastnode.getWhichpart())){
        		root.setDiffpartname(leftastnode.getWhichpart());
        		root.setAcrosselements(false);
			}else{
        		root.setDiffpartname(leftastnode.getWhichpart()+"->"+rightastnode.getWhichpart());
        		root.setAcrosselements(true);
        	}
			boolean nonsymbolsmatched = this.noneSymbols_Matched(leftastnode, rightastnode);
			if(nonsymbolsmatched){
				//root.setChangetype(DifferencingConstant.changetype_nonesymbolmatched);
				root.setChangetype(DifferencingConstant.changetype_nonesymbolmatched);
			}else{
				root.setChangetype(DifferencingConstant.changetype_containcommonsymbols);
				checkEncapsulatedMode(root, leftastnode, rightastnode);
			}
			return true;
		}
		if( checkEncapsulatedMode(root, leftastnode, rightastnode))
			return true;
		return false;
	}
	
	private boolean noneSymbols_Matched(StmtASTNode leftastnode, StmtASTNode rightastnode){
		Traverser lefttraverser = new Traverser();
		lefttraverser.generateNodeList(leftastnode);
		List<StmtASTNode> leftnodelist = lefttraverser.nodelist;
		Traverser righttraverser = new Traverser();
		righttraverser.generateNodeList(rightastnode);
		List<StmtASTNode> rightnodelist = righttraverser.nodelist;
		
		for(StmtASTNode leftnode: leftnodelist){
			for(StmtASTNode rightnode: rightnodelist){
				if( leftnode.getValue().equals(rightnode.getValue()))
				return false;
			}
		}
		return true;
	}
	private class Traverser{
		List<StmtASTNode> nodelist = new LinkedList<StmtASTNode>();
		public void generateNodeList(StmtASTNode root){//through post-traversing
			   if( root.getChildren() == null || root.getChildren().size() == 0){
				   nodelist.add(root);
				}else {
					for( StmtASTNode child: root.getChildren()){
						generateNodeList(child);
					}
				}
		}
	}
	
	private boolean checkEncapsulatedMode(MyDiffNode root, StmtASTNode leftastnode, StmtASTNode rightastnode){
		if( ! ( leftastnode.getAstnode() instanceof Expression 
			//	&& leftastnode.getAstnode() instanceof MessageSend) 
				||
			rightastnode.getAstnode() instanceof Expression	||
			leftastnode.getAstnode() instanceof Reference ||
			rightastnode.getAstnode() instanceof Reference )	
			)
			return false;
			
		String leftstring = leftastnode.getValue();
		String rightstring = rightastnode.getValue();
		if( leftstring != null && rightstring.contains(leftstring) && checkCharBeforeAfter(rightstring, leftstring) ){
			MovedTargetTuple tuple = this.checkMovePattern(leftastnode, rightastnode,  true);
			if( tuple == null)
				return false;
			root.setChangetype(DifferencingConstant.changetype_encapsulated_LeftInRight);
			root.setMovedtarget(tuple.astnode);
			root.setFullmatched(tuple.fullmatched);
			root.setIsstructural(true);
			if(leftastnode.getWhichpart().equals(rightastnode.getWhichpart())){
        		root.setDiffpartname(leftastnode.getWhichpart());
        		root.setAcrosselements(false);
			}else{
        		root.setDiffpartname(leftastnode.getWhichpart()+"->"+rightastnode.getWhichpart());
        		root.setAcrosselements(true);
        	}
			return true;
		}
		if( rightstring != null && leftstring.contains(rightstring) && checkCharBeforeAfter(leftstring, rightstring) ){
			MovedTargetTuple tuple = this.checkMovePattern(rightastnode,leftastnode,   true);
			if( tuple == null)
				return false;
			root.setChangetype(DifferencingConstant.changetype_encapsulated_RightInLeft);
			root.setMovedtarget(tuple.astnode);
			root.setFullmatched(tuple.fullmatched);
			root.setIsstructural(true);
			if(leftastnode.getWhichpart().equals(rightastnode.getWhichpart())){
        		root.setDiffpartname(leftastnode.getWhichpart());
        		root.setAcrosselements(false);
			}else{
        		root.setDiffpartname(leftastnode.getWhichpart()+"->"+rightastnode.getWhichpart());
        		root.setAcrosselements(true);
        	}
			return true;
		}
		return false;
	}
	
	private boolean isSameSyntaxEntity(StmtASTNode leftastnode, StmtASTNode rightastnode){
		if (leftastnode.getAstnode() == null || rightastnode.getAstnode() == null )
			return false;
		if ( leftastnode.getAstnode().getClass().getSimpleName().equals(rightastnode.getAstnode().getClass().getSimpleName()))
			return true;
		else if( 
			( leftastnode.getAstnode().getClass().getSimpleName().endsWith("BinaryExpression") 
			&& rightastnode.getAstnode().getClass().getSimpleName().endsWith("BinaryExpression") )
		||	( leftastnode.getAstnode().getClass().getSimpleName().endsWith("TypeReference") 
				&& rightastnode.getAstnode().getClass().getSimpleName().endsWith("TypeReference") )
		||	( leftastnode.getAstnode().getClass().getSimpleName().endsWith("NameReference") 
				&& rightastnode.getAstnode().getClass().getSimpleName().endsWith("NameReference") )
				) 
			return true;
		else
			return false;
	}
	
	boolean isLeaf(StmtASTNode partialastnode){
		if( partialastnode == null || this.hasNoneChildren(partialastnode))
			return true;
		ASTNode astnode = partialastnode.getAstnode();
		if( astnode instanceof Literal || astnode instanceof TypeReference 
			|| astnode instanceof SingleNameReference
		//	|| astnode instanceof ArrayQualifiedTypeReference 
		//	|| astnode instanceof ArrayTypeReference 
		//	|| astnode instanceof ParameterizedQualifiedTypeReference 
		//	|| astnode instanceof ParameterizedSingleTypeReference 
			)
			return true;
		else
			return false;
	}
	
	private void processLeaf(MyDiffNode root, StmtASTNode leftastnode, StmtASTNode rightastnode){
		extractLeafDifferencing(root, leftastnode, rightastnode);
		if( !this.hasChanges(root) || root.getChildren() == null || root.getChildren().size() <=1)
			return;
		//contain multichanges, for example multiple changes in typereference
		root.getChildren().clear();
		makeLeafNode(root, leftastnode, rightastnode);
	}
	private void extractLeafDifferencing(MyDiffNode root, StmtASTNode leftastnode, StmtASTNode rightastnode){
		if(leftastnode == null || rightastnode == null 
		|| ( hasNoneChildren(leftastnode) && hasNoneChildren(rightastnode) )
		){
			makeLeafNode(root, leftastnode, rightastnode);
			return;
		}else
		if( hasNoneChildren(leftastnode) || hasNoneChildren(rightastnode)){
			if( !checkEncapsulatedMode(root, leftastnode, rightastnode))
				makeLeafNode(root, leftastnode, rightastnode);
			return ;
		}
		if(neednotFurtherAnlysis(root, leftastnode, rightastnode))
				return ;
		List<StmtASTNode> leftchildren = leftastnode.getChildren();
		List<StmtASTNode> rightchildren = rightastnode.getChildren();
		traverseChildren(root, leftchildren, rightchildren);
    }

	private void makeLeafNode(MyDiffNode root, StmtASTNode leftastnode, StmtASTNode rightastnode){
		//need improve
		if (leftastnode == null) {
			root.setDiffpartname(rightastnode.getWhichpart());
            root.setDiffType(DifferencingConstant.difftype_add);
        } else if (rightastnode == null) {
        	root.setDiffpartname(leftastnode.getWhichpart());
            root.setDiffType(DifferencingConstant.difftype_delete);
        } else {
        	//List<MySymbol> leftsymbols = leftastnode.getChildrenSymbols();
    		//List<MySymbol> rightsymbols = rightastnode.getChildrenSymbols();
    		//root.setDiffType(DifferencingConstant.difftype_change);
    		if(leftastnode.getWhichpart().equals(rightastnode.getWhichpart())){
        		root.setDiffpartname(leftastnode.getWhichpart());
        		root.setAcrosselements(false);
			}else{
        		root.setDiffpartname(leftastnode.getWhichpart()+"->"+rightastnode.getWhichpart());
        		root.setAcrosselements(true);
        	}
			if( this.noneSymbols_Matched(leftastnode, rightastnode) ){
    			root.setChangetype(DifferencingConstant.changetype_nonesymbolmatched);
    		}else{
    			root.setChangetype(DifferencingConstant.changetype_containcommonsymbols);
    		}
			if (leftastnode.getAstnode() != null && rightastnode.getAstnode() != null &&
					!leftastnode.getAstnode().getClass().getSimpleName().equals(rightastnode.getAstnode().getClass().getSimpleName())){
				root.setIsdiffentity(true);
			}
        }
	}
	
	private boolean hasChanges(MyDiffNode root) {
		if(root.getDiffType().equals("NO_CHANGE") )
			return false;
       return (root != null) && (!root.getChildren().isEmpty() || root.getDiffType() != null);
    		   //(!root.getDiffType().equals("NO_CHANGE") ));
    }
	
}
