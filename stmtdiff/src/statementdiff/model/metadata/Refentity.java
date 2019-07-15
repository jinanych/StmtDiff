package statementdiff.model.metadata;

/*
 * StmtDiff
 * %%
 * Copyright (C) 2019 - Chunhua Yang <jnych@126.com>
 * %%
 * Licensed under the MIT License
 * 
 */

public class Refentity {
	String category;
	String name;
	String entitykind;
	public Refentity(String category, String name, String entitykind) {
		super();
		this.category = category;
		this.name = name;
		this.entitykind = entitykind;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEntitykind() {
		return entitykind;
	}
	public void setEntitykind(String entitykind) {
		this.entitykind = entitykind;
	}
	
}
