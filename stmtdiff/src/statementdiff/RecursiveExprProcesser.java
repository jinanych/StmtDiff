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

import org.eclipse.jdt.internal.compiler.ast.AND_AND_Expression;
import org.eclipse.jdt.internal.compiler.ast.BinaryExpression;
import org.eclipse.jdt.internal.compiler.ast.MessageSend;
import org.eclipse.jdt.internal.compiler.ast.OR_OR_Expression;
import org.eclipse.jdt.internal.compiler.parser.Scanner;

import statementdiff.differencing.model.MyDiffNode;
import statementdiff.differencing.model.StmtASTNode;
import statementdiff.model.DifferencingConstant;
import statementdiff.model.MicroChange;
import statementdiff.model.NestedExprPattern;
import statementdiff.tool.StmtDiffTool;

public class RecursiveExprProcesser {
	private Scanner leftfScanner;
	private Scanner rightfScanner;
	
	public RecursiveExprProcesser(Scanner leftfScanner, Scanner rightfScanner) {
		super();
		this.leftfScanner = leftfScanner;
		this.rightfScanner = rightfScanner;
	}

	public MyDiffNode parse(StmtASTNode leftnode, StmtASTNode rightnode){

		StmtASTNode bottomrecurnode1 = isRecursiveExpr(leftnode);
		StmtASTNode bottomrecurnode2 = isRecursiveExpr(rightnode);
		
		if( bottomrecurnode1 == null || bottomrecurnode2 == null)
			return null;
		String mode = "";
		NodeArryGenerator nodearrygenerator1 = new NodeArryGenerator();
		if( leftnode.getAstnode() instanceof BinaryExpression){
			nodearrygenerator1.generateNodeArray_ForExpr(leftnode, bottomrecurnode1);
			mode = "BinaryExpression";
		}else{
			nodearrygenerator1.generateNodeArray_ForMessageSend(leftnode, bottomrecurnode1);
			mode = "MessageSend";
		}
		NodeArryGenerator nodearrygenerator2 = new NodeArryGenerator();
		if( leftnode.getAstnode() instanceof BinaryExpression)
			nodearrygenerator2.generateNodeArray_ForExpr(rightnode, bottomrecurnode2);
		else
			nodearrygenerator2.generateNodeArray_ForMessageSend( rightnode, bottomrecurnode2);
		
		LCS_OneCommonString(nodearrygenerator1.nodelist, nodearrygenerator2.nodelist);
		if( commonstring.length() == 0)//all changed
			return null;
		MyDiffNode diffnode = parseChanges(leftnode, rightnode, nodearrygenerator1.nodelist, nodearrygenerator2.nodelist, mode);
		return diffnode;
	}
	
	private MyDiffNode parseChanges(StmtASTNode leftnode, StmtASTNode rightnode, List<NodeValueTuple> diffnodelist1, List<NodeValueTuple> diffnodelist2, String mode){
		
		if(isSymmetricChangePattern(diffnodelist1, diffnodelist2) ){
			List<MyDiffNode> diffnodes = new LinkedList<MyDiffNode>();
			for( int i= diffnodelist1.size() -1; i>=0; i--){
				NodeValueTuple leftnodei = diffnodelist1.get(i);
				NodeValueTuple rightnodej = diffnodelist2.get(i);
				MyDiffNode diffnode = analyzeDiffParts(leftnodei, rightnodej, mode);
				diffnodes.add(diffnode);
			}
			return generateUpdateChanges(leftnode, rightnode, diffnodes);
		}else{
			return parseUnSimChanges(leftnode, rightnode, diffnodelist1, diffnodelist2, mode);
		}
	}
	private boolean isSymmetricChangePattern( List<NodeValueTuple> diffnodelist1, List<NodeValueTuple> diffnodelist2 ){
		boolean simchanged = true;
		if( diffnodelist1.size() == diffnodelist2.size()){
			for( int i=0; i< diffnodelist1.size(); i++){
				NodeValueTuple leftnodei = diffnodelist1.get(i);
				NodeValueTuple rightnodej = diffnodelist2.get(i);
				if( leftnodei.node.getLevel()!= rightnodej.node.getLevel()){
					simchanged = false;
					break;
				}
			}
		}else
			simchanged = false;
		return simchanged;
	}
	private MyDiffNode analyzeDiffParts(NodeValueTuple leftnodei, NodeValueTuple rightnodej, String mode){
		StmtDifferencing stmtdiff = new StmtDifferencing(this.leftfScanner, this.rightfScanner);
		if( mode.equals("MessageSend") ){
			//if( leftnodei.indexinlist > 0 && rightnodej.indexinlist > 0){//they are not leaves
				//	leftnodei.node.getAstnode() instanceof MessageSend){
				StmtASTNode leftscopenode = null;
				for( StmtASTNode child: leftnodei.node.getChildren()){
					if( child.getWhichpart().equals("scope")){
						leftscopenode = child;
						break;
					}
				}
				if( leftscopenode != null)	
					leftnodei.node.getChildren().remove(leftscopenode);
				StmtASTNode rightscopenode = null;
				for( StmtASTNode child: rightnodej.node.getChildren()){
					if( child.getWhichpart().equals("scope")){
						rightscopenode = child;
						break;
					}
				}
				if( rightscopenode != null)
					rightnodej.node.getChildren().remove(rightscopenode);
				
				MyDiffNode diffnode = stmtdiff.extractDifferencing(leftnodei.node, rightnodej.node);
				if( leftscopenode != null)	
					diffnode.getLeftnode().getChildren().add(0,leftscopenode);
				if( rightscopenode != null)
					diffnode.getRightnode().getChildren().add(0,rightscopenode);
				return diffnode;
		/*	}else{
				MyDiffNode diffnode = stmtdiff.extractDifferencing(leftnodei.node, rightnodej.node);
				return diffnode;
			}*/
		}else{
			if( leftnodei.indexinlist > 0 && rightnodej.indexinlist > 0){//they are not leaves
				StmtASTNode leftscopenode = null;
						for( StmtASTNode child: leftnodei.node.getChildren())
							if( child.getWhichpart().equals("left")){
								leftscopenode = child;
								break;
							}
				if( leftscopenode != null)	
					leftnodei.node.getChildren().remove(leftscopenode);
				StmtASTNode rightscopenode = null;
				
					for( StmtASTNode child: rightnodej.node.getChildren()){
						if( child.getWhichpart().equals("left")){
							rightscopenode = child;
							break;
						}
					}
				if( rightscopenode != null)
					rightnodej.node.getChildren().remove(rightscopenode);
				MyDiffNode diffnode = stmtdiff.extractDifferencing(leftnodei.node, rightnodej.node);
				if( leftscopenode != null)	
					diffnode.getLeftnode().getChildren().add(0,leftscopenode);
				if( rightscopenode != null)
					diffnode.getRightnode().getChildren().add(0,rightscopenode);
				return diffnode;
			}else{
				MyDiffNode diffnode = stmtdiff.extractDifferencing(leftnodei.node, rightnodej.node);
				return diffnode;
			}
		}
		
	}
	
	private class DiffNodesGroup{
		List<NodeValueTuple> diffnodelist;

		public DiffNodesGroup(List<NodeValueTuple> diffnodelist) {
			super();
			this.diffnodelist = diffnodelist;
		}
		
	}
	private List<DiffNodesGroup> groupDiffNodes(List<NodeValueTuple> diffnodelist){//group  diff nodes 
		List<DiffNodesGroup> grouplist = new LinkedList<DiffNodesGroup>();
		if( diffnodelist.size() == 0)
			return grouplist;
		int i=0;
		NodeValueTuple lastnodetuple = diffnodelist.get(i);
		List<NodeValueTuple> lastdiffnodelist = new LinkedList<NodeValueTuple>();
		lastdiffnodelist.add(lastnodetuple);
		i++;
		while(  i< diffnodelist.size()){
			NodeValueTuple nodetuple = diffnodelist.get(i);
			if( nodetuple.indexinlist != lastnodetuple.indexinlist+1){
				grouplist.add( new DiffNodesGroup(lastdiffnodelist));
				lastdiffnodelist = new LinkedList<NodeValueTuple>();
			}
			lastdiffnodelist.add(nodetuple);
			lastnodetuple = nodetuple;
			i++;
		}
		grouplist.add( new DiffNodesGroup(lastdiffnodelist));
		return grouplist;
	}
	private MyDiffNode parseUnSimChanges(StmtASTNode leftnode, StmtASTNode rightnode, List<NodeValueTuple> diffnodelist1, List<NodeValueTuple> diffnodelist2, String mode){
		List<MyDiffNode> diffnodes = new LinkedList<MyDiffNode>();
		List<DiffNodesGroup> grouplist1 = groupDiffNodes(diffnodelist1);
		List<DiffNodesGroup> grouplist2 = groupDiffNodes(diffnodelist2);
		int nodesdeleted = 0, nodesadded = 0;
		int i = grouplist1.size() -1;//the highest level of the left tree
		int j = grouplist2.size() -1;
		while( i>=0 && j>=0){
			DiffNodesGroup group1 = grouplist1.get(i);
			DiffNodesGroup group2 = grouplist2.get(j);
			int leftlevel = group1.diffnodelist.get(group1.diffnodelist.size()-1).node.getLevel() - nodesdeleted;
			int rightlevel = group2.diffnodelist.get(group2.diffnodelist.size()-1).node.getLevel() - nodesadded;
			if(  leftlevel == rightlevel){
				List<MyDiffNode> diffnodes1 = matchDiffNodes(group1.diffnodelist, group2.diffnodelist, mode);
				diffnodes.addAll(diffnodes1);
				i--;
				nodesdeleted += group1.diffnodelist.size();
				j--;
				nodesadded += group2.diffnodelist.size();
			}else if( leftlevel < rightlevel){
				int startindexi = group1.diffnodelist.size() - 1;
				while( startindexi >= 0 ){
					NodeValueTuple templeftnodei = group1.diffnodelist.get( startindexi );
					MyDiffNode diffnode =  makeDiffNode( templeftnodei, null, DifferencingConstant.difftype_delete);
		            diffnodes.add(diffnode);
		            startindexi --;
				}
				i--;
				nodesdeleted += group1.diffnodelist.size();
			}else{
				int startindexj = group2.diffnodelist.size() - 1;
				while ( startindexj >=0 ){
					NodeValueTuple temprightnodej = group2.diffnodelist.get( startindexj );
					MyDiffNode diffnode = makeDiffNode(null, temprightnodej, DifferencingConstant.difftype_add);
		            diffnodes.add(diffnode);
					
					startindexj --;
				}
				j--;
				nodesadded += group2.diffnodelist.size();
			}
			
		}
		while( i>=0){
			DiffNodesGroup group1 = grouplist1.get(i);
			int startindexi = group1.diffnodelist.size() - 1;
			while( startindexi >= 0 ){
				NodeValueTuple templeftnodei = group1.diffnodelist.get( startindexi );
				MyDiffNode diffnode = makeDiffNode( templeftnodei, null, DifferencingConstant.difftype_delete);
	            diffnodes.add(diffnode);
	            startindexi --;
			}
			i --;
		}
		while( j>=0 ){
			DiffNodesGroup group2 = grouplist2.get(j);
			int startindexj = group2.diffnodelist.size() - 1;
			while ( startindexj >=0 ){
				NodeValueTuple temprightnodej = group2.diffnodelist.get( startindexj );
				MyDiffNode diffnode = makeDiffNode(null, temprightnodej, DifferencingConstant.difftype_add);
	            diffnodes.add(diffnode);
				
				startindexj --;
			}
			j--;
		}
		return generateContentPattern1(leftnode, rightnode, diffnodes);
	}
	private MyDiffNode makeDiffNode(NodeValueTuple nodetuple1, NodeValueTuple nodetuple2, String difftype){
		if( difftype.equals(DifferencingConstant.difftype_add)){
			MyDiffNode diffnode = new MyDiffNode(null, nodetuple2.node);
			diffnode.setDiffpartname(nodetuple2.node.getWhichpart());
            diffnode.setDiffType(DifferencingConstant.difftype_add);
            return diffnode;
		}else if( difftype.equals(DifferencingConstant.difftype_delete)){
			MyDiffNode diffnode = new MyDiffNode(nodetuple1.node, null);
			diffnode.setDiffpartname(nodetuple1.node.getWhichpart());
            diffnode.setDiffType(DifferencingConstant.difftype_delete);
            return diffnode; 
		}else{
			MyDiffNode diffnode = new MyDiffNode(nodetuple1.node, nodetuple2.node);
			diffnode.setDiffpartname(nodetuple1.node.getWhichpart());
            diffnode.setDiffType(DifferencingConstant.difftype_change);
            return diffnode; 
		}
	}
	private class SimRes{
		int maxsimindex = -1;
		double maxsim = 0.0;
		public SimRes(int maxsimindex, double maxsim) {
			super();
			this.maxsimindex = maxsimindex;
			this.maxsim = maxsim;
		}
		
	}
	private SimRes findTheFirstMapping(NodeValueTuple nodvaluetuple, List<NodeValueTuple> diffnodelist, int startindex){
		StmtDiffTool tool = new StmtDiffTool();
		int maxsimindex = -1;
		double maxsim = 0.0;
		for( int i= startindex; i>=0; i--){
			NodeValueTuple nodetuple = diffnodelist.get(i);
			double sim = tool.nGramsCal(nodvaluetuple.node, nodetuple.node);
			if(sim > maxsim){
				maxsim = sim;
				maxsimindex = i;
			}
		}
		return new SimRes(maxsimindex, maxsim);
	}
	private List<MyDiffNode> matchDiffNodes(List<NodeValueTuple> diffnodelist1, List<NodeValueTuple> diffnodelist2, String mode){//match according their levels
		List<MyDiffNode> diffnodes = new LinkedList<MyDiffNode>();
		//if(diffnodelist1.size() == diffnodelist2.size() && diffnodelist1.size()){//all updated
		StmtDifferencing stmtdiff = new StmtDifferencing(leftfScanner, rightfScanner);
			
		//}else if(diffnodelist1.size() < diffnodelist2.size()){
			int startindexi = diffnodelist1.size() - 1;
			int startindexj = diffnodelist2.size() - 1;
			while ( startindexi >=0 && startindexj >=0){
				SimRes simres1 =  findTheFirstMapping(diffnodelist2.get(startindexj), diffnodelist1, startindexi);
				SimRes simres2 =  findTheFirstMapping(diffnodelist1.get(startindexi), diffnodelist2, startindexj);
				int matchedindexi = startindexi;
				int matchedindexj = startindexj;
				if( simres1.maxsim >= simres2.maxsim){
					matchedindexi = simres1.maxsimindex;
				}else{
					matchedindexj = simres2.maxsimindex;
				}
				while( matchedindexi != -1 && startindexi > matchedindexi){
					NodeValueTuple templeftnodei = diffnodelist1.get( startindexi );
					MyDiffNode diffnode =  makeDiffNode( templeftnodei, null, DifferencingConstant.difftype_delete);
		            diffnodes.add(diffnode);
		            startindexi --;
				}
				while ( matchedindexj != -1 && startindexj > matchedindexj ){
					NodeValueTuple temprightnodej = diffnodelist2.get( startindexj );
					MyDiffNode diffnode =  makeDiffNode(null, temprightnodej,  DifferencingConstant.difftype_add);
		            diffnodes.add(diffnode);
					
					startindexj --;
				}
				//update
				NodeValueTuple templeftnodei = diffnodelist1.get( startindexi );
				NodeValueTuple temprightnodej = diffnodelist2.get( startindexj );
				
				if( templeftnodei.indexinlist == 0 || temprightnodej.indexinlist == 0 ){//if one of them is a leaf
					MyDiffNode diffnode = stmtdiff.extractDifferencing(templeftnodei.node, temprightnodej.node);
					diffnodes.add(diffnode);
					startindexi = -1;
					startindexj = -1;
				}else{
					MyDiffNode diffnode = analyzeDiffParts(templeftnodei, temprightnodej, mode);
					diffnodes.add(diffnode);
					startindexi--;
					startindexj--;
				}
			}
			while( startindexi >=0 ){
				NodeValueTuple templeftnodei = diffnodelist1.get( startindexi );
				MyDiffNode diffnode =  makeDiffNode( templeftnodei, null, DifferencingConstant.difftype_delete);
	            diffnodes.add(diffnode);
	            startindexi --;
			}
			while ( startindexj >=0 ){
				NodeValueTuple temprightnodej = diffnodelist2.get( startindexj );
				MyDiffNode diffnode =  makeDiffNode( null, temprightnodej, DifferencingConstant.difftype_add);
	            diffnodes.add(diffnode);
				
				startindexj --;
			}
		//}	
			return diffnodes;
	}
	private String generateUpdatePattern(MyDiffNode diffroot){
		String str ="";
		StmtChangesClassifier classifier = new StmtChangesClassifier();
		List<MicroChange> updatepatterns = classifier.parseChanges(diffroot);
		for( MicroChange mc : updatepatterns){
			str += "content:"+mc.getContent()+";"+mc.getContentpattern()+"\n";
		//			mc.getPatternString();
		}
		return str;
	}
	private boolean isLeaf(StmtASTNode root, StmtASTNode node){
		return !this.isSameKindEntity(root, node);
	}
	
	private MyDiffNode generateContentPattern1(StmtASTNode leftroot, StmtASTNode rightroot, List<MyDiffNode> diffnodes){
		List<NestedExprPattern> micromicropatterns = new LinkedList<NestedExprPattern>();
	//	String leftpattern = "";
		int index = diffnodes.size() - 1;//for the nodes at the highest level
		while(index >=0){
			MyDiffNode lastdiffnode = diffnodes.get(index);
			StmtASTNode lastleftnode = lastdiffnode.getLeftnode();
			while (lastleftnode == null && index >0){
				index --;
				lastdiffnode = diffnodes.get(index);
				lastleftnode = lastdiffnode.getLeftnode();
			}
			if( lastleftnode != null){
				if( lastdiffnode.getDiffType().equals( DifferencingConstant.difftype_change)){
					boolean oneisleaf = isLeaf(leftroot, lastdiffnode.getLeftnode()) || isLeaf(rightroot, lastdiffnode.getRightnode());
					//leftpattern += "CHANGE:\n"+"Element:"+ 
					String content = generateValue(lastdiffnode.getLeftnode(), oneisleaf)+"->"+
							generateValue(lastdiffnode.getRightnode(), oneisleaf) +"\n";
					//leftpattern += "Changes:"+ generateUpdatePattern(lastdiffnode)+"\n";
					String contentpattern = generateUpdatePattern(lastdiffnode);
					NestedExprPattern micromicropattern = new NestedExprPattern(
							lastdiffnode.getLeftnode().getLevel() - leftroot.getLevel(), lastdiffnode.getRightnode().getLevel() - rightroot.getLevel(),
							DifferencingConstant.difftype_change, content, contentpattern
							, lastdiffnode.getLeftnode(),lastdiffnode.getRightnode() );
					micromicropatterns.add(micromicropattern);
				}else if( lastdiffnode.getDiffType().equals(DifferencingConstant.difftype_delete)){
					
					String content = generatePattern(lastdiffnode.getLeftnode(), isLeaf(leftroot, lastdiffnode.getLeftnode()) );
				//	leftpattern += "DELETE:"+ pattern+"\n";
					NestedExprPattern micromicropattern = new NestedExprPattern(
							lastdiffnode.getLeftnode().getLevel() - leftroot.getLevel(), -1,
							DifferencingConstant.difftype_delete, content, null
							, lastdiffnode.getLeftnode(),null);
					micromicropatterns.add(micromicropattern);
				}
			}
			index --;
		}
		MyDiffNode lastdiffnode = diffnodes.get(diffnodes.size() - 1);
	//	if( leftpattern.length() >0 && 
	//			lastdiffnode.getLeftnode() != leftroot )
	//		leftpattern += "*";
	//	String rightpattern = "";
		index = diffnodes.size() - 1;//for the nodes at the least level
		while(index >=0){
			lastdiffnode = diffnodes.get(index);
			StmtASTNode lastrightnode = lastdiffnode.getRightnode();
			while (lastrightnode == null && index >0){
				index --;
				lastdiffnode = diffnodes.get(index);
				lastrightnode = lastdiffnode.getRightnode();
			}
			if( lastrightnode != null){
				if( lastdiffnode.getDiffType().equals(DifferencingConstant.difftype_change)){
				}else if( lastdiffnode.getDiffType().equals(DifferencingConstant.difftype_add)){
					String content = generatePattern(lastdiffnode.getRightnode(), isLeaf(rightroot, lastdiffnode.getRightnode()));
					//rightpattern += "ADD:"+ pattern+"\n";
					NestedExprPattern micromicropattern = new NestedExprPattern(
							-1, lastdiffnode.getRightnode().getLevel() - rightroot.getLevel(),
							DifferencingConstant.difftype_add, content, null
							, null,lastdiffnode.getRightnode());
					micromicropatterns.add(micromicropattern);
				}
			}
			index --;
		}
	//	lastdiffnode = diffnodes.get(diffnodes.size() - 1);
	//	if( lastdiffnode.getRightnode() != rightroot)
	//		rightpattern += "*";
		
		//String pattern = leftpattern + "->" + rightpattern;
		MyDiffNode rootdiffnode = makeDiffNode( leftroot, rightroot);
		//rootdiffnode.setContentpattern(pattern);
		rootdiffnode.setNestedexprpatterns(micromicropatterns);
		rootdiffnode.setDiffType(DifferencingConstant.difftype_change);
	//	rootdiffnode.setChangetype(DifferencingConstant.changetype_containcommonsymbols);
		return rootdiffnode;
	}
	
	private String generateValue(StmtASTNode partialastnode, boolean isleaf){
		String pattern = "";
		if( partialastnode.getAstnode() instanceof BinaryExpression){
			BinaryExpression expr = (BinaryExpression)(partialastnode.getAstnode());
			if( isleaf )
				pattern = expr.toString();
			else
				pattern = expr.operatorToString() + expr.right.toString();
		}else if( partialastnode.getAstnode() instanceof MessageSend){
			String name = "";
			String arg = "";
			for( StmtASTNode child: partialastnode.getChildren()){
				if( child.getWhichpart().equals("name"))
					name = child.getValue();
				else if( child.getWhichpart().equals("arg")){
					if( arg.length() == 0)
						arg = child.getValue();
					else
						arg += "," + child.getValue();
				}
			}
			if( isleaf )
				pattern = partialastnode.getAstnode().toString();
			else
				pattern = name +"("+arg+")";
		}else{
			pattern =  partialastnode.getAstnode().toString();
		}
		return pattern;
	}
	private String generatePattern(StmtASTNode partialastnode, boolean isleaf){
		String pattern = "";
		if( partialastnode.getAstnode() instanceof BinaryExpression){
			BinaryExpression expr = (BinaryExpression)(partialastnode.getAstnode());
			if( isleaf) {
			//	if( partialastnode.getParent() != null && partialastnode.getAstnode() instanceof BinaryExpression)
			//		pattern = partialastnode.getValue() + ((BinaryExpression)partialastnode.getParent().getAstnode()).operatorToString();
			//	else
					pattern = partialastnode.getValue();
			}else
				pattern = "*"+ expr.operatorToString() + expr.right.toString();
		}else 
			if( partialastnode.getAstnode() instanceof MessageSend){
			String name = "";
			String arg = "";
			for( StmtASTNode child: partialastnode.getChildren()){
				if( child.getWhichpart().equals("name"))
					name = child.getValue();
				else if( child.getWhichpart().equals("arg")){
					if( arg.length() == 0)
						arg = child.getValue();
					else
						arg += "," + child.getValue();
				}
			}
			if( isleaf) 
				pattern =  partialastnode.getValue();
			else
				pattern = "*" + name +"("+arg+")";
		}else{/* */
			if( isleaf) 
				pattern =  partialastnode.getAstnode().toString();
			else
				pattern =  "*" + partialastnode.getAstnode().toString();
		}
		return pattern;
	}
	private MyDiffNode makeDiffNode(StmtASTNode leftnode, StmtASTNode rightnode){
		MyDiffNode diffnode = new MyDiffNode(leftnode, rightnode);
		diffnode.setDiffType(DifferencingConstant.difftype_change);
		diffnode.setIsdiffentity(false);
		diffnode.setIsstructural(false);
		diffnode.setDiffpartname(leftnode.getWhichpart());
		diffnode.setAcrosselements(false);
		return diffnode;
	}
	
	private List<MyDiffNode> sortDiffNodesAccordingToLevel(List<MyDiffNode> diffnodes){
		List<MyDiffNode> sorteddiffnodes = new LinkedList<MyDiffNode>();
		sorteddiffnodes.add(diffnodes.get(0));
		for(int i = 1; i< diffnodes.size(); i++){
			MyDiffNode currentdiffnode = diffnodes.get(i);
			sorteddiffnodes.add(currentdiffnode);
			int j = sorteddiffnodes.size()- 2;
			while(  j>=0){
				MyDiffNode sorteddiffnode = sorteddiffnodes.get(j);
				if( currentdiffnode.getLeftnode().getLevel() > sorteddiffnode.getLeftnode().getLevel()){
					sorteddiffnodes.set(j+1, sorteddiffnode);
					j--;
				}else
					break;
			}
			sorteddiffnodes.set(j+1, currentdiffnode);
		}
		return sorteddiffnodes;
	}
	private MyDiffNode generateUpdateChanges(StmtASTNode leftroot, StmtASTNode rightroot, List<MyDiffNode> diffnodes){
		List<MyDiffNode> sorteddiffnodes = this.sortDiffNodesAccordingToLevel(diffnodes);
		Map<StmtASTNode, MyDiffNode> partialastnode_diffnode_map = new HashMap<StmtASTNode, MyDiffNode>();
	/*	MyDiffNode rootdiffnode = null;
		for( MyDiffNode diffnode: diffnodes){
			if(diffnode.getLeftnode() == leftroot){
				rootdiffnode = diffnode;
				break;
			}	
		}
		if( rootdiffnode == null)
			rootdiffnode = makeDiffNode( leftroot, rightroot);
		*/
		int index = 0;//diffnodes.size() - 1;//for the nodes at the least level
		MyDiffNode lastdiffnode = sorteddiffnodes.get(index);
		while (lastdiffnode.getLeftnode().getParent() != null && lastdiffnode.getLeftnode().getParent() != leftroot){
			StmtASTNode lastleftparent = lastdiffnode.getLeftnode().getParent();
			StmtASTNode lastrightparent = lastdiffnode.getRightnode().getParent();
			MyDiffNode lastparentdiffnode = makeDiffNode( lastleftparent, lastrightparent);
			lastparentdiffnode.addAChild(lastdiffnode);
			partialastnode_diffnode_map.put(lastleftparent, lastparentdiffnode);
			
			lastdiffnode = lastparentdiffnode;
		}
		MyDiffNode rootdiffnode = null;
		if( lastdiffnode.getLeftnode().getParent()  == null)
			rootdiffnode = lastdiffnode;
		else{
			rootdiffnode = makeDiffNode( leftroot, rightroot);
			rootdiffnode.addAChild(lastdiffnode);
		}
		partialastnode_diffnode_map.put(leftroot, rootdiffnode);
		
		index ++;
		while (index < sorteddiffnodes.size() ){//- 1 ){ //>=0 ){
			MyDiffNode currentdiffnode = sorteddiffnodes.get(index);
			if( currentdiffnode.getLeftnode() == rootdiffnode.getLeftnode()){
				for(MyDiffNode child:currentdiffnode.getChildren()  )
					rootdiffnode.addAChild(child);
				index ++;
				continue;
			}
			StmtASTNode currentparentleftnode = currentdiffnode.getLeftnode().getParent();
			StmtASTNode currentparentrightnode = currentdiffnode.getRightnode().getParent();
			MyDiffNode diffnode = partialastnode_diffnode_map.get(currentparentleftnode);
			while (diffnode == null){
				diffnode = makeDiffNode( currentparentleftnode, currentparentrightnode);
				diffnode.addAChild(currentdiffnode);
				partialastnode_diffnode_map.put(currentparentleftnode, diffnode);
				
				currentdiffnode = diffnode;
				currentparentleftnode = currentdiffnode.getLeftnode().getParent();
				currentparentrightnode = currentdiffnode.getRightnode().getParent();
				diffnode = partialastnode_diffnode_map.get(currentparentleftnode);
			}
				diffnode.addAChild(currentdiffnode);
				
				index ++;
		}
	
		return rootdiffnode;
	}
	
	private StmtASTNode isRecursiveExpr(StmtASTNode root){
		String entitytype = root.getAstnode().getClass().getSimpleName();
		if( root.getAstnode() instanceof BinaryExpression){
			StmtASTNode leftchild = null;
			for( StmtASTNode child: root.getChildren()){
				if( child.getWhichpart().equals("left")){
					leftchild = child;
					break;
				}
			}
			if( leftchild == null)//the second traversing for matching differencing, the left child has been removed manually
				return null;
			if( root.getDepth() > 2 && 
			leftchild.getAstnode() instanceof BinaryExpression
			&& leftchild.getDepth() == root.getDepth()-1
			//&& ((BinaryExpression)leftchild.getAstnode()).operatorToString().equals(operator)
			)
				return isRecursiveBinaryExpr(root);
			else
				return null;
		//}else if( entitytype.equals("AND_AND_Expression")){
			
		//}else if( entitytype.equals("OR_OR_Expression")){
			
		}else if( entitytype.equals("MessageSend")){
			StmtASTNode scopechild = null;
			for( StmtASTNode child: root.getChildren()){
				if( child.getWhichpart().equals("scope")){
					scopechild = child;
					break;
				}
			}
			if( scopechild == null)//the second traversing for matching differencing, the scope child has been removed manually
				return null;
			if( root.getDepth() > 2 && scopechild != null
			&& scopechild.getAstnode() instanceof MessageSend
			&& scopechild.getDepth() == root.getDepth()-1
			)
				return isRecursiveMethodCall(root);
			else
				return null;
		}
		return null;
	}
	private StmtASTNode isRecursiveMethodCall(StmtASTNode partialastnode){
		StmtASTNode scopechild = null;
		for( StmtASTNode child: partialastnode.getChildren()){
			if( child.getWhichpart().equals("scope")){
				scopechild = child;
				break;
			}
		}
		if( scopechild.getAstnode() instanceof MessageSend){
			return isRecursiveMethodCall(scopechild);
		}else
			return scopechild;
	}
	private StmtASTNode isRecursiveBinaryExpr(StmtASTNode partialastnode){//return the bottom left child
			StmtASTNode leftchild = null;
			for( StmtASTNode child: partialastnode.getChildren()){
				if( child.getWhichpart().equals("left")){
					leftchild = child;
					break;
				}
			}
			if( isSameKindEntity(partialastnode, leftchild)	){
				return isRecursiveBinaryExpr(leftchild);
			}else{//seen as leaves
				return leftchild;
			}
	}
	private boolean isSameKindEntity(StmtASTNode parent, StmtASTNode leftchild){
		if( parent.getAstnode() instanceof BinaryExpression){
			if( parent.getAstnode() instanceof AND_AND_Expression || parent.getAstnode() instanceof OR_OR_Expression ){
				if( leftchild.getAstnode() instanceof AND_AND_Expression || leftchild.getAstnode() instanceof OR_OR_Expression)
					return true;
				else
					return false;
			}else if( leftchild.getAstnode() instanceof BinaryExpression)
				return true;
			else
				return false;
		}else{//messagesend
			if( leftchild.getAstnode() instanceof MessageSend)
				return true;
			else
				return false;
		}
	}
	private class NodeValueTuple{
		StmtASTNode node;
		String value;
		int indexinlist = -1;
		public NodeValueTuple(StmtASTNode node, String value, int indexinlist) {
			super();
			this.node = node;
			this.value = value;
			this.indexinlist = indexinlist;
		}
	}
	private class NodeArryGenerator{
		List<NodeValueTuple> nodelist = new LinkedList<NodeValueTuple>();
	/*	public void generateNodeArray(PartialASTNode root){
			if(root.getChildren() == null || root.children.size() == 0){
				nodelist.add(new NodeValueTuple(root, root.getValue()));
				return;
			}
			for( PartialASTNode child: root.getChildren()){
				if( child.getWhichpart().equals("left") ){
					if( child.getAstnode() instanceof BinaryExpression )
						generateNodeArray(child);
					else//seen as leaves
						nodelist.add(new NodeValueTuple(child, child.getValue()));
				}else if( child.getWhichpart().equals("right")){
					nodelist.add(new NodeValueTuple(child, child.getValue()));
				}
			}
		}*/
		public void generateNodeArray_ForExpr(StmtASTNode root, StmtASTNode leaf){//bottom-up
			int index = 0;
			nodelist.add(new NodeValueTuple(leaf, leaf.getValue(), index++));
			
			StmtASTNode parent = leaf.getParent();
			while( parent != root){
					String op = "";
					String rightvalue = "";
					for( StmtASTNode child: parent.getChildren()){
						if( child.getWhichpart().equals("op") ){
							op = child.getValue();
						}else if( child.getWhichpart().equals("right") ){
							rightvalue = child.getValue();
							break;
						}
					}
					String value = op + " "+ rightvalue;
					nodelist.add(new NodeValueTuple(parent, value, index++));
				parent = parent.getParent();
			}
			if( root != leaf){
				String op = "";
				String rightvalue = "";
				for( StmtASTNode child: root.getChildren()){
					if( child.getWhichpart().equals("op") ){
						op = child.getValue();
					}else if( child.getWhichpart().equals("right") ){
						rightvalue = child.getValue();
						break;
					}
				}
				String value = op + " "+ rightvalue;
				nodelist.add(new NodeValueTuple(root, value, index++));
			}
		}
		public void generateNodeArray_ForMessageSend(StmtASTNode root, StmtASTNode leaf){//bottom-up
			int index = 0;
			nodelist.add(new NodeValueTuple(leaf, leaf.getValue(), index++));
			StmtASTNode parent = leaf.getParent();
			while( parent != root){
					String name = "";
					String arg = "";
					for( StmtASTNode child: parent.getChildren()){
						if( child.getWhichpart().equals("name") ){
							name = child.getValue();
						}else if( child.getWhichpart().equals("arg") ){
							if(arg.length() == 0)
								arg = child.getValue();
							else
								arg += "," + child.getValue();
						}
					}
					String value = name +"("+arg+")";
					nodelist.add(new NodeValueTuple(parent, value, index++));
				parent = parent.getParent();
			}
			if( root != leaf){
				String name = "";
				String arg = "";
				for( StmtASTNode child: root.getChildren()){
					if( child.getWhichpart().equals("name") ){
						name = child.getValue();
					}else if( child.getWhichpart().equals("arg") ){
						if(arg.length() == 0)
							arg = child.getValue();
						else
							arg += "," + child.getValue();
					}
				}
				String value = name +"("+arg+")";
				nodelist.add(new NodeValueTuple(root, value, index++));
			}
		}
	}
	public int[][] LCS_BArry_OneCommonString( NodeValueTuple[] nodearry1, NodeValueTuple[] nodearry2){
		int m = nodearry1.length;
		int n = nodearry2.length;
		int L[][] = new int[m+1][n+1];
		int b[][] = new int[m+1][n+1];
		for(int j=0; j<=n;j++)
			L[0][j] = 0;
		for(int i=0; i<=m; i++)
			L[i][0]=0;
		for(int i=1; i<=m; i++){
			for(int j=1; j<=n; j++){
				String c1 = nodearry1[i-1].value;
				String c2 = nodearry2[j-1].value;
				if(c1.equals(c2)){
					L[i][j] = L[i-1][j-1]+1;
					b[i][j]=1;
				}else{
					if(L[i-1][j]>=L[i][j-1]){
						L[i][j] = L[i-1][j];
						b[i][j]=2;
					}else
					if(L[i-1][j]<L[i][j-1]){
						L[i][j] = L[i][j-1];
						b[i][j]=3;
					}
					
				}
			}
		}
	
		return b;
	}
	private NodeValueTuple[] getNodeArray(List<NodeValueTuple> nodelist){
		NodeValueTuple[] nodearry = new NodeValueTuple[nodelist.size()];
		for( int i=0; i< nodelist.size(); i++){
			nodearry[i] = nodelist.get(i);
		}
		return nodearry;
	}
	public void LCS_OneCommonString(List<NodeValueTuple> nodelist1, List<NodeValueTuple> nodelist2){
		NodeValueTuple[] nodearry1 = getNodeArray(nodelist1);
		NodeValueTuple[] nodearry2 = getNodeArray(nodelist2);
		
		int m = nodearry1.length;
		int n = nodearry2.length;
		int b[][] = LCS_BArry_OneCommonString(nodearry1, nodearry2);
		commonstring = "";
		traceLCS_OneCommonString(m,n, nodearry1, b);
		
		List<IndexTuple> indextuples = parseLCSStr(commonstring);
		if( indextuples == null || indextuples.size() == 0)
			return;
		List<NodeValueTuple> commonnodelist1 = new LinkedList<NodeValueTuple>();
		List<NodeValueTuple> commonnodelist2 = new LinkedList<NodeValueTuple>();
		for( int i=0; i< indextuples.size(); i++){
			int indexi = indextuples.get(i).indexi - 1;
			int indexj = indextuples.get(i).indexj - 1;
			commonnodelist1.add(nodelist1.get(indexi));
			commonnodelist2.add(nodelist2.get(indexj));
		}
		nodelist1.removeAll(commonnodelist1);//diff nodes
		nodelist2.removeAll(commonnodelist2);
		
		return ;
	}
	
	
	private void traceLCS_OneCommonString(int i, int j, NodeValueTuple[] strarry1, int b[][]){
		if(i==0 || j==0){
			return ;
		}
		if(b[i][j] == 1){
			if(commonstring.length() == 0)
				commonstring  = i+","+j;//+strarry1[i-1].value;
			else
				commonstring = i+","+j//+strarry1[i-1].value
				+ " "+commonstring;
			traceLCS_OneCommonString(i-1, j-1, strarry1, b );
			
		}else{
			if(b[i][j] == 2)
				traceLCS_OneCommonString(i-1, j, strarry1, b );
			else if(b[i][j] == 3)
				traceLCS_OneCommonString(i, j-1, strarry1, b);
		}
		
	}
	private class IndexTuple{
		int indexi;
		int indexj;
		public IndexTuple(int indexi, int indexj) {
			super();
			this.indexi = indexi;
			this.indexj = indexj;
		}
	}
	private List<IndexTuple> parseLCSStr(String lcsstr){
		if( lcsstr.length() == 0)
			return null;
		String[] temparry = lcsstr.split(" ");
		List<IndexTuple> indextuples = new LinkedList<IndexTuple>();
		for( int i=0; i< temparry.length; i++){
			String[] temparry1 = temparry[i].split(",");
			int indexi = Integer.valueOf(temparry1[0]);
			int indexj = Integer.valueOf(temparry1[1]);
			indextuples.add(new IndexTuple(indexi, indexj));
		}
		return indextuples;
	}
	
	
	public int[][] LCS_BArry_OneCommonString(String[] strarry1, String[] strarry2){
		int m = strarry1.length;
		int n = strarry2.length;
		int L[][] = new int[m+1][n+1];
		int b[][] = new int[m+1][n+1];
		for(int j=0; j<=n;j++)
			L[0][j] = 0;
		for(int i=0; i<=m; i++)
			L[i][0]=0;
		for(int i=1; i<=m; i++){
			for(int j=1; j<=n; j++){
				String c1 = strarry1[i-1];
				String c2 = strarry2[j-1];
				if(c1.equals(c2)){
					L[i][j] = L[i-1][j-1]+1;
					b[i][j]=1;
				}else{
					if(L[i-1][j]>=L[i][j-1]){
						L[i][j] = L[i-1][j];
						b[i][j]=2;
					}else
					if(L[i-1][j]<L[i][j-1]){
						L[i][j] = L[i][j-1];
						b[i][j]=3;
					}
					
				}
			}
		}
	
		return b;
	}

	
	public String LCS_OneCommonString(String[] strarry1, String[] strarry2){
		int m = strarry1.length;
		int n = strarry2.length;
		int b[][] = LCS_BArry_OneCommonString(strarry1, strarry2);
		commonstring = "";
		traceLCS_OneCommonString(m,n, strarry1, b);
		return commonstring;
	}
	private void traceLCS_OneCommonString(int i, int j, String[] strarry1, int b[][]){
		if(i==0 || j==0){
			return ;
		}
		if(b[i][j] == 1){
			int strlen = strarry1[i-1].length();
			if(commonstring.length() == 0)
				commonstring  = strlen+"("+i+","+j+")"+strarry1[i-1];
			else
				commonstring = strlen+"("+i+","+j+")"+strarry1[i-1]+ " "+commonstring;
			traceLCS_OneCommonString(i-1, j-1, strarry1, b );
			
		}else{
			if(b[i][j] == 2)
				traceLCS_OneCommonString(i-1, j, strarry1, b );
			else if(b[i][j] == 3)
				traceLCS_OneCommonString(i, j-1, strarry1, b);
		}
		
	}
	String commonstring = "";
	
	public Set<String> LCS(String[] strarry1, String[] strarry2){
		int m = strarry1.length;
		int n = strarry2.length;
		int b[][] = LCS_BArry(strarry1, strarry2);
		//String commonstring = traceLCS1(m,n, strarry1, b);
		//System.out.println(commonstring);
		LCSstrset = new HashSet<String>();
		traceLCS(m,n, strarry1, b, "");
		/*if(LCSstrset.size()>0){
			for(String str: LCSstrset){
				System.out.println(str);
			}
		}*/
		return LCSstrset;//L[m][n];
	}
	Set<String> LCSstrset = null;
	public int[][] LCS_BArry(String[] strarry1, String[] strarry2){
		int m = strarry1.length;
		int n = strarry2.length;
		int L[][] = new int[m+1][n+1];
		int b[][] = new int[m+1][n+1];
		for(int j=0; j<=n;j++)
			L[0][j] = 0;
		for(int i=0; i<=m; i++)
			L[i][0]=0;
		for(int i=1; i<=m; i++){
			for(int j=1; j<=n; j++){
				String c1 = strarry1[i-1];
				String c2 = strarry2[j-1];
				if(c1.equals(c2)){
					L[i][j] = L[i-1][j-1]+1;
					b[i][j]=1;
				}else{
					if(L[i-1][j]>L[i][j-1]){
						L[i][j] = L[i-1][j];
						b[i][j]=2;
					}
					if(L[i-1][j]<L[i][j-1]){
						L[i][j] = L[i][j-1];
						b[i][j]=3;
					}
					if(L[i-1][j]==L[i][j-1]){
						L[i][j] = L[i][j-1];
						b[i][j] = 4;
					}
				}
			}
		}
	/*	for(int i=0; i<=m; i++){
			for(int j=0; j<=n; j++)
				System.out.print(L[i][j]+" ");
			System.out.println();
		}
		for(int i=0; i<=m; i++){
			for(int j=0; j<=n; j++)
				System.out.print(b[i][j]+" ");
			System.out.println();
		}*/
		return b;
	}
	private void traceLCS(int i, int j, String[] strarry1, int b[][], String commonstr ){
		if(i==0 || j==0){
			/*Iterator<String> it = LCSstrstack.iterator();
			String commonstr = "";
			while(it.hasNext()){
				String commonstr1 = it.next();
				if(commonstr.length()>0)
					commonstr += " "+ commonstr1;
				else
					commonstr = commonstr1;
			}*/
			if(commonstr.length()>0){
				LCSstrset.add(commonstr);
			}
			
			return ;
		}
		if(b[i][j] == 1){
			int strlen = strarry1[i-1].length();
			if(commonstr.length() == 0)
				commonstr  = strlen+"("+i+","+j+")"+strarry1[i-1];//if there are identical symbols in a str
			else
				commonstr = strlen+"("+i+","+j+")"+strarry1[i-1]+ " "+commonstr;
			
			/*if(commonstr.length() == 0)
				commonstr  = strarry1[i-1];
			else
				commonstr =strarry1[i-1]+ " "+commonstr;*/
			
			traceLCS(i-1, j-1, strarry1, b,commonstr );
			
		}else{
			if(b[i][j] == 2)
				traceLCS(i-1, j, strarry1, b , commonstr);
			if(b[i][j] == 3)
				traceLCS(i, j-1, strarry1, b,commonstr);
			if(b[i][j] == 4){
				traceLCS(i-1, j, strarry1, b,commonstr );
				traceLCS(i, j-1, strarry1, b,commonstr);
			}
			
		}
			
	}

}
