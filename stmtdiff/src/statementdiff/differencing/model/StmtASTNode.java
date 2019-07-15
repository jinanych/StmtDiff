package statementdiff.differencing.model;

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

import org.eclipse.jdt.internal.compiler.ast.ASTNode;

public class StmtASTNode {
	ASTNode astnode;
	String whichpart;
	String value = null;//for elements like name, id
	List<StmtASTNode> children = new LinkedList<StmtASTNode>();

	StmtASTNode parent = null;
	
	int depth = 0;
	int level = 0;
	int sourcestart = -1;
	int sourceend = -1;
	public StmtASTNode(ASTNode astnode, String whichpart) {
		this.astnode = astnode;
		this.whichpart = whichpart;
	}
	public StmtASTNode(ASTNode astnode, String whichpart, String value) {
		this.astnode = astnode;
		this.whichpart = whichpart;
		this.value = value;
	}
	
	
	public int getSourcestart() {
		if( sourcestart == -1)
			return astnode.sourceStart;
		else
			return sourcestart;
	}
	public void setSourcestart(int sourcestart) {
		this.sourcestart = sourcestart;
	}
	public int getSourceend() {
		if( sourceend == -1)
			return astnode.sourceEnd;
		else
			return sourceend;
	}
	public void setSourceend(int sourceend) {
		this.sourceend = sourceend;
	}
	public StmtASTNode getParent() {
		return parent;
	}


	public void setParent(StmtASTNode parent) {
		this.parent = parent;
	}


	public void addAChild(StmtASTNode child){
		this.children.add(child);
		child.setParent(this);
	}
	public boolean hasChild(StmtASTNode child){
		for(StmtASTNode currentchild: this.children){
			if(currentchild == child)
				return true;
		}
		return false;
	}
	public ASTNode getAstnode() {
		return astnode;
	}

	public void setAstnode(ASTNode astnode) {
		this.astnode = astnode;
	}
	public List<StmtASTNode> getChildren() {
		return children;
	}
	public String getWhichpart() {
		return whichpart;
	}
	public String getValue() {
		if( value == null)
			return astnode.toString();
		else
			return value;
	}
	public void setValue(String value){
		this.value = value;
	}
	public int getDepth() {
		return depth;
	}
	public void setDepth(int depth) {
		this.depth = depth;
	}
	public int getLevel() {
		return level;
	}
	public void setLevel(int level) {
		this.level = level;
	}
	
}
