package statementdiff;

/*
 * StmtDiff
 * %%
 * Copyright (C) 2019 - Chunhua Yang <jnych@126.com>
 * %%
 * Licensed under the MIT License
 * 
 */

import java.util.LinkedList;
import java.util.List;

import statementdiff.differencing.model.MyDiffNode;
import statementdiff.differencing.model.StmtASTNode;
import statementdiff.model.DifferencingConstant;

public class ContentPatternGenerator {
	
	public void generateDiffPattern(MyDiffNode diffnode){
		StmtASTNode leftnode = diffnode.getLeftnode();
		StmtASTNode rightnode = diffnode.getRightnode();
		if( leftnode == null || rightnode == null)
			return;
	if( diffnode.getChangetype()!= null){
			if( diffnode.getChangetype().equals(DifferencingConstant.changetype_encapsulated_LeftInRight)){
				//diffnode.getMovedtarget()
				String leftstring = diffnode.getLeftnode().getValue();
				String rightstring = diffnode.getRightnode().getValue();
				rightstring = rightstring.replace(leftstring, "*");
				diffnode.setContentpattern("*->"+ rightstring);
				return;
			}else if( diffnode.getChangetype().equals(DifferencingConstant.changetype_encapsulated_RightInLeft)){
				String leftstring = diffnode.getLeftnode().getValue();
				String rightstring = diffnode.getRightnode().getValue();
				leftstring = leftstring.replace(rightstring, "*");
				diffnode.setContentpattern(leftstring + "->*");
				return;
			}
		}
		Traverser lefttraverser = new Traverser();
		lefttraverser.generateNodeList(leftnode);
		Traverser righttraverser = new Traverser();
		righttraverser.generateNodeList(rightnode);
		
		LCSHelper lcshelper = new LCSHelper();
		LCSRes lcsres = lcshelper.LCS_OneCommonString(lefttraverser.nodelist, righttraverser.nodelist);
		String diffpattern1 = generateDiffSymbols(leftnode, lcsres.commonnodelist1);
		String diffpattern2 = generateDiffSymbols(rightnode, lcsres.commonnodelist2);
		
		diffnode.setContentpattern(diffpattern1 + "->"+diffpattern2);
	}
	private String generateDiffSymbols(StmtASTNode rootnode, List<NodeIndexTuple> diffnodetuplelist){
		if( diffnodetuplelist.size() == 0)
			return "*";
		String rootstring = rootnode.getAstnode().toString();
		String replacestr = "";
		for(NodeIndexTuple difftuple:  diffnodetuplelist){
			String commonvalue = difftuple.node.getValue();
			
			int index = rootstring.indexOf(commonvalue);
			replacestr += rootstring.substring(0, index)+"*";
			rootstring = rootstring.substring(index + commonvalue.length());
		}
		replacestr += rootstring;
		return replacestr;
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
	
	private class NodeIndexTuple{
		StmtASTNode node;
		int index;
		public NodeIndexTuple(StmtASTNode node, int index) {
			super();
			this.node = node;
			this.index = index;
		}
	}
	private class LCSRes{
		List<NodeIndexTuple> commonnodelist1 ;
		List<NodeIndexTuple> commonnodelist2 ;
		public LCSRes(List<NodeIndexTuple> commonnodelist1,
				List<NodeIndexTuple> commonnodelist2) {
			super();
			this.commonnodelist1 = commonnodelist1;
			this.commonnodelist2 = commonnodelist2;
		}
		
	}
	private class LCSHelper{
		public int[][] LCS_BArry_OneCommonString( StmtASTNode[] nodearry1, StmtASTNode[] nodearry2){
			//	String[] strarry1, String[] strarry2){
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
					String c1 = nodearry1[i-1].getValue();//.value;
					String c2 = nodearry2[j-1].getValue();//.value;
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
		private StmtASTNode[] getNodeArray(List<StmtASTNode> nodelist){
			StmtASTNode[] nodearry = new StmtASTNode[nodelist.size()];
			for( int i=0; i< nodelist.size(); i++){
				nodearry[i] = nodelist.get(i);
			}
			return nodearry;
		}
		String commonstring = "";
		public LCSRes LCS_OneCommonString(List<StmtASTNode> nodelist1, List<StmtASTNode> nodelist2){
			StmtASTNode[] nodearry1 = getNodeArray(nodelist1);
			StmtASTNode[] nodearry2 = getNodeArray(nodelist2);
			
			int m = nodearry1.length;
			int n = nodearry2.length;
			int b[][] = LCS_BArry_OneCommonString(nodearry1, nodearry2);
			commonstring = "";
			traceLCS_OneCommonString(m,n, nodearry1, b);
			
			List<IndexTuple> indextuples = parseLCSStr(commonstring);
			
			List<NodeIndexTuple> commonnodelist1 = new LinkedList<NodeIndexTuple>();
			List<NodeIndexTuple> commonnodelist2 = new LinkedList<NodeIndexTuple>();
			for( int i=0; i< indextuples.size(); i++){
				int indexi = indextuples.get(i).indexi - 1;
				int indexj = indextuples.get(i).indexj - 1;
				commonnodelist1.add(new NodeIndexTuple(nodelist1.get(indexi), indexi) );
				commonnodelist2.add(new NodeIndexTuple(nodelist2.get(indexj), indexj) );
			}
			
		//	nodelist1.removeAll(commonnodelist1);//diff nodes
		//	nodelist2.removeAll(commonnodelist2);
		//return commonstring;
			return new LCSRes( commonnodelist1, commonnodelist2 );
		}
		
		
		private void traceLCS_OneCommonString(int i, int j, StmtASTNode[] strarry1, int b[][]){
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
	}
}
