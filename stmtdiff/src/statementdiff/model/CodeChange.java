package statementdiff.model;

/*
 * StmtDiff
 * %%
 * Copyright (C) 2019 - Chunhua Yang <jnych@126.com>
 * %%
 * Licensed under the MIT License
 * 
 */

import java.util.List;

import statementdiff.model.metadata.Metadata;
import ch.uzh.ifi.seal.changedistiller.model.entities.SourceCodeChange;

public class CodeChange{
	
	SourceCodeChange distillerstmtupdate;
	List<MicroChange> microchanges = null;
	List<Metadata> metadalist = null;
	
	public CodeChange(SourceCodeChange distillerstmtupdate) {
		this.distillerstmtupdate = distillerstmtupdate;
	}
	public SourceCodeChange getDistillerstmtupdate() {
		return distillerstmtupdate;
	}
	public List<MicroChange> getMicrochanges() {
		return microchanges;
	}
	public void setMicrochanges(List<MicroChange> microchanges) {
		this.microchanges = microchanges;
	}
	public List<Metadata> getMetadalist() {
		return metadalist;
	}
	public void setMetadalist(List<Metadata> metadalist) {
		this.metadalist = metadalist;
	}
	
}
