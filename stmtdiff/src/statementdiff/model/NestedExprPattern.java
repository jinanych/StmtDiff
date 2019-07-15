package statementdiff.model;

/*
 * StmtDiff
 * %%
 * Copyright (C) 2019 - Chunhua Yang <jnych@126.com>
 * %%
 * Licensed under the MIT License
 * 
 */

import statementdiff.differencing.model.StmtASTNode;
public class NestedExprPattern {
	int leftlevel;//is -1 for ADD
	int rightlevel;//is -1 for DEL
	String action;
	String content;
	String contentpattern;//is null for ADD and DEL
	StmtASTNode leftnode = null;
	StmtASTNode rightnode = null;
	
	public NestedExprPattern(int leftlevel, int rightlevel, String action, String content,
			String contentpattern, StmtASTNode leftnode , StmtASTNode rightnode) {
		super();
		this.leftlevel = leftlevel;
		this.rightlevel = rightlevel;
		this.action = action;
		this.content = content;
		this.contentpattern = contentpattern;
		this.leftnode = leftnode;
		this.rightnode = rightnode;
	}
	public int getLeftlevel() {
		return leftlevel;
	}
	public int getRightlevel() {
		return rightlevel;
	}
	public String getAction() {
		return action;
	}
	public String getContent() {
		return content;
	}
	public String getContentpattern() {
		return contentpattern;
	}
	public String getPrintStr(){
		String str = "";
		str += action +" ";
		if( leftlevel != -1 && rightlevel != -1)
			str += leftlevel +":"+ rightlevel +" ";
		else if( leftlevel != -1)
			str += leftlevel  +" ";
		else 
			str += rightlevel +" ";
		
		if( content != null)
			str += content;
		if( contentpattern != null)
			str +="  " + contentpattern;
		str += "\n";
		return str;
	}
	public StmtASTNode getLeftnode() {
		return leftnode;
	}
	public StmtASTNode getRightnode() {
		return rightnode;
	}
	
}
