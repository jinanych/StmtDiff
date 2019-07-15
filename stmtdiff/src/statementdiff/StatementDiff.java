package statementdiff;
/*
 * StmtDiff
 * %%
 * Copyright (C) 2019 - Chunhua Yang <jnych@126.com>
 * %%
 * Licensed under the MIT License
 * 
 */

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

import org.eclipse.jdt.internal.compiler.ast.ASTNode;
import org.eclipse.jdt.internal.compiler.parser.Scanner;

import statementdiff.differencing.model.MyDiffNode;
import statementdiff.model.CodeChange;
import statementdiff.model.MicroChange;
import statementdiff.model.metadata.Metadata;
import statementdiff.tool.StmtDiffTool;
import ch.uzh.ifi.seal.changedistiller.ChangeDistiller;
import ch.uzh.ifi.seal.changedistiller.ChangeDistiller.Language;
import ch.uzh.ifi.seal.changedistiller.distilling.FileDistiller;
import ch.uzh.ifi.seal.changedistiller.model.entities.SourceCodeChange;
import ch.uzh.ifi.seal.changedistiller.model.entities.Update;
import ch.uzh.ifi.seal.changedistiller.structuredifferencing.StructureNode;

public class StatementDiff {
	StmtDiffTool tool = new StmtDiffTool();
	List<SourceCodeChange> sourcecodechanges = null;
	List<Update> stmtuplist = new LinkedList<Update>();
	
	private Scanner leftfScanner;
	private Scanner rightfScanner;
	FileDistiller distiller;
	
	public StatementDiff(FileDistiller distiller) {
		this.distiller = distiller;
		
	}
	public StatementDiff() {
		distiller = ChangeDistiller.createFileDistiller(Language.JAVA);
	}
	public List<CodeChange> generateStmtUpdateChanges(String oldfilename, String newfilename ){
		List<SourceCodeChange> distillerchanges = this.generateDistillerChanges(oldfilename, newfilename);
		if( distillerchanges == null || distillerchanges.isEmpty())
			return null;
		this.leftfScanner = distiller.getLeftScanner();
		this.rightfScanner = distiller.getRightScanner();
		List<CodeChange> changelist = new LinkedList<CodeChange>();
		for(SourceCodeChange distillerchange: distillerchanges){
			CodeChange codechange = this.parse(distillerchange);
			List<Metadata> matadatalist = tool.generateMetadata(codechange);
			codechange.setMetadalist(matadatalist);
			changelist.add(codechange);
		}
		return changelist;
	}
	public void printChanges(List<CodeChange> changes){
		StmtDiffTool tool = new StmtDiffTool();
		for( CodeChange codechange: changes){
			System.out.println(tool.generateChangeStr(codechange));
		}
	}
	public StructureNode getRootFromAddDeleteFile( String oldfilename){
		List<String> leftcode = new ArrayList<String>();
		try{
			File left = new File(oldfilename);
			FileReader leftfileReader = new FileReader(left);
			BufferedReader br = new BufferedReader(leftfileReader);
			String line = null;
			 while ((line = br.readLine()) != null) {
			     leftcode.add(line);
			 }
			 StructureNode root = distiller.createRoot(left);
			 if( root != null)
				 return root;
			 else
				 return null;
		} catch(Exception e) {
		    System.err.println("Warning: error while change distilling. " + e.getMessage());
		    return null;
		}		
	}
	private List<SourceCodeChange> generateDistillerChanges( String oldfilename, String newfilename){
		File left = new File(oldfilename);
    	File right = new File(newfilename);
		List<String> leftcode = new ArrayList<String>();
		List<String> rightcode = new ArrayList<String>();
	
		try{
			FileReader leftfileReader = new FileReader(left);
			BufferedReader br = new BufferedReader(leftfileReader);
			String line = null;
			 while ((line = br.readLine()) != null) {
			     leftcode.add(line);
			 }
			 FileReader rightfileReader = new FileReader(right);
			 BufferedReader br1 = new BufferedReader(rightfileReader);
			 String line1 = null;
			 while ((line1 = br1.readLine()) != null) {
			     rightcode.add(line1);
			 }
			distiller.extractClassifiedSourceCodeChanges(left, right);
			if( distiller.getSourceCodeChanges() == null || distiller.getSourceCodeChanges().size() ==0)	
				return null;
			return distiller.getSourceCodeChanges();
		} catch(Exception e) {
		    System.err.println("Warning: error while change distilling. " + e.getMessage());
		    return null;
		}
	}
	public CodeChange parse(SourceCodeChange change){
		CodeChange codechange = new CodeChange(change);
		if (	!( change.getChangeType().toString().equals("STATEMENT_UPDATE")
	    	   ||change.getChangeType().toString().equals ("CONDITION_EXPRESSION_CHANGE")
	    	//	change instanceof Update
	    		//	&& (change.getChangedEntity().getNode() instanceof Statement
	    	//	|| change.getChangedEntity().getType().toString().equals("CATCH_CLAUSE")	 
	    		)
	    		)
			return codechange;
		Update updateop = (Update)change;
		//printChange(updateop);
     	ASTNode oldastnode = updateop.getChangedEntity().getNode();
     	ASTNode newastnode = updateop.getNewEntity().getNode();
     	List<MicroChange> microchanges = this.extractDifferencing(oldastnode, newastnode);
     	if(microchanges != null && microchanges.size() > 0 ){
     		RefExtractor extractor = new RefExtractor();
    		for( MicroChange microchange : microchanges){
     			extractor.extract(microchange);
     		}
     		codechange.setMicrochanges(microchanges);
     	}
     		
     	return codechange;
	}
	public List<MicroChange> extractDifferencing(ASTNode leftnode, ASTNode rightnode){
		StmtDifferencing stmtdifferencing = new StmtDifferencing( this.leftfScanner, this.rightfScanner, leftnode,  rightnode);
		MyDiffNode diffroot = stmtdifferencing.extractDifferencing();
		StmtChangesClassifier classifier = new StmtChangesClassifier();
		List<MicroChange> updatepatterns = classifier.parseChanges(diffroot);
		return updatepatterns;
	}
	
/*	public static void main(String[] args){
			String oldfilename = "./src/example/Example.java";
			String newfilename = "./src/example1/Example.java";
			StatementDiff changemaker = new StatementDiff();
			List<CodeChange> changes = changemaker.generateStmtUpdateChanges(oldfilename, newfilename);
			if(changes != null )
				changemaker.printChanges(changes);
	}  */
}
