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

import statementdiff.model.NestedExprPattern;

public class MyDiffNode {
	String diffpartname = null;
	private List<MyDiffNode> children = new LinkedList<MyDiffNode>();
	MyDiffNode parent = null;
	
	private StmtASTNode leftnode = null;
	private StmtASTNode rightnode = null;
	 
	private String difftype = "NO_CHANGE";
	private String changetype = null;
	private String note = null;
	
	boolean isdiffentity = false;
	boolean isstructural = false;
	boolean acrosselements = false;
	
	//moved pattern, or encapsulated pattern
	StmtASTNode movedtarget = null;
	boolean fullmatched;
	
	//for identical elements in different parts
	boolean identicalelement_indifferentparts = false;
	List<StmtASTNode> identicalelements_in_tuple_left = null;
	List<StmtASTNode> identicalelements_in_tuple_right = null;
	
	private boolean isorderchanges = false;
	private int lefti = -1;
	private int righti = -1;
	
	private String contentpattern = null;
	List<NestedExprPattern> nestedexprpatterns = null;
	public MyDiffNode(StmtASTNode leftnode, StmtASTNode rightnode) {
		this.leftnode = leftnode;
		this.rightnode = rightnode;
	}
	
	public String getDiffpartname() {
		return diffpartname;
	}

	public void setDiffpartname(String diffpartname) {
		this.diffpartname = diffpartname;
	}
	public String getDiffType() {
		return difftype;
	}

	public void setDiffType(String difftype) {
		this.difftype = difftype;
	}
	public List<MyDiffNode> getChildren() {
		return children;
	}

	public void addAChild(MyDiffNode child){
		this.children.add(child);
		child.setParent(this);
	}
	public MyDiffNode getParent() {
		return parent;
	}
	public void setParent(MyDiffNode parent) {
		this.parent = parent;
	}
	
	public boolean isdiffentity() {
		return isdiffentity;
	}
	public void setIsdiffentity(boolean isdiffentity) {
		this.isdiffentity = isdiffentity;
	}

	public boolean isIsstructural() {
		return isstructural;
	}
	public void setIsstructural(boolean isstructural) {
		this.isstructural = isstructural;
	}
	public boolean isAcrosselements() {
		return acrosselements;
	}
	public void setAcrosselements(boolean acrosselements) {
		this.acrosselements = acrosselements;
	}
	
	public String getChangetype() {
		return changetype;
	}

	public void setChangetype(String changetype) {
		this.changetype = changetype;
	}
	public boolean isOrderchanges() {
		return isorderchanges;
	}

	public void setOrderChangeTuple(int lefti, int righti){
		this.isorderchanges = true;
		this.lefti = lefti;
		this.righti = righti;
	}
	public int getLefti() {
		return lefti;
	}
	public int getRighti() {
		return righti;
	}
	
	public StmtASTNode getLeftnode() {
		return leftnode;
	}

	public void setLeftnode(StmtASTNode leftnode) {
		this.leftnode = leftnode;
	}

	public StmtASTNode getRightnode() {
		return rightnode;
	}

	public void setRightnode(StmtASTNode rightnode) {
		this.rightnode = rightnode;
	}
	public List<StmtASTNode> getIdenticalelements_in_tuple_left() {
		return identicalelements_in_tuple_left;
	}
	public void addIdenticalelements_in_tuple_left(StmtASTNode identicalelement) {
		if(identicalelements_in_tuple_left == null)
			identicalelements_in_tuple_left = new LinkedList<StmtASTNode>();
		identicalelements_in_tuple_left.add(identicalelement);
	}

	public List<StmtASTNode> getIdenticalelements_in_tuple_right() {
		return identicalelements_in_tuple_right;
	}

	public void addIdenticalelements_in_tuple_right(StmtASTNode identicalelement) {
		if(identicalelements_in_tuple_right == null)
			identicalelements_in_tuple_right = new LinkedList<StmtASTNode>();
		identicalelements_in_tuple_right.add(identicalelement);
	}
	public StmtASTNode getMovedtarget() {
		return movedtarget;
	}
	public void setMovedtarget(StmtASTNode movedtarget) {
		this.movedtarget = movedtarget;
	}
	public boolean isFullmatched() {
		return fullmatched;
	}
	public void setFullmatched(boolean fullmatched) {
		this.fullmatched = fullmatched;
	}
	public String getNote() {
		return note;
	}
	public void setNote(String note) {
		this.note = note;
	}
	public boolean isLeaf(){
		return (this.getChildren() == null || this.getChildren().size() == 0);
	}
	public String getContentpattern() {
		return contentpattern;
	}
	public void setContentpattern(String contentpattern) {
		this.contentpattern = contentpattern;
	}

	public List<NestedExprPattern> getNestedexprpatterns() {
		return nestedexprpatterns;
	}

	public void setNestedexprpatterns(List<NestedExprPattern> nestedexprpatterns) {
		this.nestedexprpatterns = nestedexprpatterns;
	}
	
	
}
