package statementdiff.model.metadata;

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

public class Metadata {
	String action;
	String whichpart;
	String rootwhichpart;
	String context = null;
	String leftentitytype = null;
	String rightentitytype = null;
	String content;
	String contentpattern = null;
	List<Refentity> leftreflist = null;
	List<Refentity> rightreflist = null;
	
	public Metadata(String action, String whichpart, String rootwhichpart,
			String context, String leftentitytype, String rightentitytype,
			String content, String contentpattern) {
		super();
		this.action = action;
		this.whichpart = whichpart;
		this.rootwhichpart = rootwhichpart;
		this.context = context;
		this.leftentitytype = leftentitytype;
		this.rightentitytype = rightentitytype;
		this.content = content;
		this.contentpattern = contentpattern;
	}
	public List<Refentity> getLeftreflist() {
		return leftreflist;
	}
	public void setLeftreflist(List<Refentity> leftreflist) {
		this.leftreflist = leftreflist;
	}
	public List<Refentity> getRightreflist() {
		return rightreflist;
	}
	public void setRightreflist(List<Refentity> rightreflist) {
		this.rightreflist = rightreflist;
	}
	public void addLeftRef(Refentity ref){
		if( leftreflist == null)
			leftreflist = new LinkedList<Refentity>();
		leftreflist.add(ref);
	}
	public void addRightRef(Refentity ref){
		if( rightreflist == null)
			rightreflist = new LinkedList<Refentity>();
		rightreflist.add(ref);
	}
	
}
