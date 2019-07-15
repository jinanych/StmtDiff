package statementdiff.test;
/*
 * StmtDiff
 * %%
 * Copyright (C) 2019 - Chunhua Yang <jnych@126.com>
 * %%
 * Licensed under the MIT License
 * 
 */

import java.util.List;

import statementdiff.StatementDiff;
import statementdiff.model.CodeChange;

public class StmtDiffTest {
	public static void main(String[] args){
		String oldfilename = "./src/example/Example.java";
		String newfilename = "./src/example1/Example.java";
		StatementDiff changemaker = new StatementDiff();
		List<CodeChange> changes = changemaker.generateStmtUpdateChanges(oldfilename, newfilename);
		if(changes != null )
			changemaker.printChanges(changes);
   } 
}
