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

public class RefFromExpr {
	String category;
	String name;
	StmtASTNode entitynode;
	public RefFromExpr(String category, String fullname,
			StmtASTNode entitynode) {
		super();
		this.category = category;
		this.name = fullname;
		this.entitynode = entitynode;
	}
	public String getCategory() {
		return category;
	}
	public String getName() {
		return name;
	}
	public StmtASTNode getEntitynode() {
		return entitynode;
	}
	public String getStr(){
		String str = "Category:" + category +"\n";
		str += "name:" + name+"\n";
		str += "EntityKind:" + entitynode.getAstnode().getClass().getSimpleName();//+"\n";
		return str;
	}
}
