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

import org.eclipse.jdt.internal.compiler.ast.ASTNode;

import statementdiff.differencing.model.MyDiffNode;
import statementdiff.differencing.model.StmtASTNode;
import statementdiff.model.DifferencingConstant;
import statementdiff.model.MicroChangeConstant;
import statementdiff.model.MicroChange;
import statementdiff.tool.StmtDiffTool;

public class StmtChangesClassifier {
	List<PatternObject> patternobjs = new LinkedList<PatternObject>();
	StmtDiffTool tool = new StmtDiffTool();
	public List<MicroChange> parseChanges(MyDiffNode diffroot){
		if(diffroot != null){
			//System.out.println("-------Patterns:--------");
			List<MicroChange> updatepatterns = extractPatternObjects(diffroot);
			return updatepatterns;
		}else{
			return null;
		}
	}
	
	private List<MicroChange> extractPatternObjects(MyDiffNode diffroot){
			patternobjs = new LinkedList<PatternObject>();
			tranverseDiffTree(diffroot);
			List<MicroChange> updatepatterns = new LinkedList<MicroChange>();
			
		//	System.out.println("-------Patterns:--------");
			for(PatternObject patternobj : patternobjs){
			//	System.out.println("-------Pattern:--------");
				MicroChange updatepattern = generatePatternString(diffroot, patternobj);
				if(updatepattern.getWhichpart() == null )
					continue;
				String whichpart = updatepattern.getWhichpart();
				if(
						(whichpart.endsWith("_=") 
								|| whichpart.endsWith("_extends")
								|| whichpart.endsWith("_throws")
								|| whichpart.endsWith("_inherits")
						)
						&& (	updatepattern.getActiontype().equals(MicroChangeConstant.actiontype_add)||
								updatepattern.getActiontype().equals(MicroChangeConstant.actiontype_delete)	
							)
						){
					continue;
				}
				updatepatterns.add(updatepattern);
			//	System.out.println(tuple.updatepattern.getPatternString());	
			}
			return updatepatterns;
		}
	private MicroChange generatePatternString(MyDiffNode diffroot, PatternObject patternobj){
		WhichpartTuple whichparttuple = this.generateWhichPartTuple(patternobj);
		MicroChange updatepattern = this.generateMicroChange(whichparttuple);
		updatepattern.setDiffroot(diffroot);
		updatepattern.setDiffleaf(this.getLeafDiffNode(patternobj));
		return updatepattern;
	}
	
	
	private MyDiffNode getLeafDiffNode(PatternObject patternobj){
		PatternObject currentpatternobj = patternobj;
		MyDiffNode diffnode = currentpatternobj.diffnode;
		while(!diffnode.isLeaf() ){
			currentpatternobj = currentpatternobj.getChild();
			diffnode = currentpatternobj.diffnode;
		}
		return diffnode;
	}
	private WhichpartTuple generateWhichPartTuple(PatternObject patternobj){
		//	System.out.println("----Pattern:");
		PatternObject currentpatternobj = patternobj;
		MyDiffNode diffnode = currentpatternobj.diffnode;
		String changetype;// = diffnode.getDiffType();
		String parentnodeclassname;// = diffnode.getLeftnode().getAstnode().getClass().getSimpleName();
		String patternstring = "";//changetype +" "+ parentnodeclassname;
		while(!diffnode.isLeaf() ){
			String tmppatternstring = "";
			parentnodeclassname = diffnode.getLeftnode().getAstnode().getClass().getSimpleName();
			tmppatternstring = parentnodeclassname;
			
			currentpatternobj = currentpatternobj.getChild();
			diffnode = currentpatternobj.diffnode;
			changetype = diffnode.getDiffType();
			String diffpartname = diffnode.getDiffpartname();
			
			tmppatternstring = tmppatternstring+"_"+diffpartname;
			tmppatternstring =changetype +" "+ tmppatternstring;
			if(patternstring.length()> 0)
				patternstring += ".";
			patternstring += tmppatternstring;
		}
		
		if(diffnode == patternobj.diffnode){//root is leaf
			if(diffnode.getParent()!= null){
				parentnodeclassname = diffnode.getParent().getLeftnode().getAstnode().getClass().getSimpleName();
				changetype = diffnode.getDiffType();
				String diffpartname = diffnode.getDiffpartname();
				patternstring = changetype +" "+ parentnodeclassname+"_"+diffpartname;
			}else{
				patternstring = diffnode.getDiffType()+" "+diffnode.getLeftnode().getAstnode().getClass().getSimpleName()
					+"->"
					+diffnode.getRightnode().getAstnode().getClass().getSimpleName();
				
			}
		}
		WhichpartTuple tuple = new WhichpartTuple(patternstring, diffnode);
		return tuple;
	}
	private MicroChange generateMicroChange(WhichpartTuple whichparttuple ){
		
		 String whichpartstring = whichparttuple.patternstring;
		//generate whichpart 
		 String actiontype= null;
		 String whichpart = null;
		 String whichpartcontext = null;
		
		int index = whichpartstring.lastIndexOf(".");
		if(index != -1){
			whichpartcontext = whichpartstring.substring(0, index);
			whichpart = whichpartstring.substring(index+1, whichpartstring.length());
		}else{
			whichpart =  whichpartstring;
		}
		String[] strs = whichpart.split(" ");
		if(strs.length == 0){
			actiontype = null;
			whichpart = null;
		}else if(strs.length == 1){
			if(strs[0].equals(MicroChangeConstant.actiontype_add) ||
					strs[0].equals(MicroChangeConstant.actiontype_change) ||
					strs[0].equals(MicroChangeConstant.actiontype_delete)
						){
			actiontype = strs[0];
			whichpart = null;
			}else{
				actiontype = null;
				whichpart = strs[0];
			}
		}else{
			actiontype = strs[0];
			whichpart = strs[1];
			if(whichpartcontext != null){
				String[] tempstrs = whichpartcontext.split("\\.");
				String tempwhichpartcontext = "";
				for(int i=0; i<tempstrs.length; i++){
					strs = tempstrs[i].split(" ");
					String tempwhichpart = strs[1];
					if(tempwhichpartcontext.length() == 0)
						tempwhichpartcontext = tempwhichpart;
					else
						tempwhichpartcontext += "."+tempwhichpart;
				}
				whichpartcontext = tempwhichpartcontext;
			}
		}
		// generate other parts
		MyDiffNode diffnode = whichparttuple.leafnode;
		ASTNode leftentity = null;
		ASTNode rightentity = null;
		String leftentitytype = null;
		String rightentitytype = null;
		
		if(diffnode.getLeftnode() != null ){
			leftentitytype = "symbol";
			if( diffnode.getLeftnode().getAstnode() != null ){
				leftentity = diffnode.getLeftnode().getAstnode();
				leftentitytype = leftentity.getClass().getSimpleName();
			}
		}
		if(diffnode.getRightnode() != null ){
			 rightentitytype = "symbol";
			if( diffnode.getRightnode().getAstnode() != null ){
				rightentity = diffnode.getRightnode().getAstnode();
				rightentitytype = rightentity.getClass().getSimpleName();
			}
		}	
		String entitytype = null;
		if(leftentitytype != null && rightentitytype != null){
			if(leftentitytype.equals(rightentitytype)){
				entitytype = leftentitytype;
			}else{
				entitytype = leftentitytype +"->"+rightentitytype;
			}
		}else if(leftentitytype != null )
			entitytype = leftentitytype;//+"->";
		else if(rightentitytype != null )
			entitytype = rightentitytype;
		String rootentity = null, rootelementpart = null;
		String tempwhichpart = whichpartcontext;
		if( whichpartcontext == null || whichpartcontext.length() == 0)
			tempwhichpart = whichpart;
		if( tempwhichpart != null && tempwhichpart.length() > 0){
			String rootwhichpart = tempwhichpart;
			int temoindex1 = tempwhichpart.indexOf(".");
			if( temoindex1 != -1){
				rootwhichpart = tempwhichpart.substring(0, temoindex1);
			}
			int tempindex1 = rootwhichpart.indexOf("_");
			int tempindex2 = rootwhichpart.indexOf("->");
			if( tempindex1 != -1 ){
					rootentity = rootwhichpart.substring(0, tempindex1);
					rootelementpart = rootwhichpart.substring(tempindex1+1);
			}else if( tempindex2 != -1 ){
					rootentity = rootwhichpart.substring(0, tempindex2);
			}
		}
		MicroChange updatepattern = new MicroChange(actiontype, whichpart,entitytype,whichpartcontext);
		updatepattern.setRootentity(rootentity);
		updatepattern.setRootelementpart(rootelementpart);
		updatepattern.setLeftentitytype(leftentitytype);
		updatepattern.setRightentitytype(rightentitytype);
		if( diffnode.getLeftnode() != null)
			updatepattern.setContentbefore(diffnode.getLeftnode().getValue());
		if( diffnode.getRightnode() != null)
			updatepattern.setContentafter(diffnode.getRightnode().getValue());
		
		String content = this.getValuePatternstring(diffnode);//diffnode.getEntityname_Source();
		updatepattern.setContent(content);
		if(diffnode.getContentpattern() != null)
			updatepattern.setContentpattern(diffnode.getContentpattern());
		if( diffnode.getNestedexprpatterns() != null)
			updatepattern.setNestedexprpatterns(diffnode.getNestedexprpatterns());
		if(diffnode.getChangetype() == null){
			return updatepattern;
		}
		if( whichpart != null && whichpart.length()>0){
			 index =  whichpart.lastIndexOf("_");
			if( index != -1)	{
				String changeentity = whichpart.substring(0, index);
				String elementpart = whichpart.substring(index+1);
				updatepattern.setChangeentity(changeentity);
				updatepattern.setElementpart(elementpart);
			}else if( whichpart.indexOf("->")!= -1)	{
				String[] str = whichpart.split("->");
				String changeentity = str[0];
				String elementpart = str[1];
				updatepattern.setChangeentity(changeentity);
				updatepattern.setElementpart(elementpart);
			}
		}
		
		 String changecategory = null;
		 String structureannotation = null;
		
		 	 String changetype = diffnode.getChangetype();
			 switch(changetype){
			 case DifferencingConstant.changetype_orderchanged:
				 changecategory = MicroChangeConstant.category_structural_orderchanges;
				 int leftindex = diffnode.getLefti();
				 int rightindex = diffnode.getRighti();
				 structureannotation = leftindex +"->"+rightindex;
				 
				 break;
			 case DifferencingConstant.changetype_hasidenticalelementsIndifferentParts:
				 changecategory = MicroChangeConstant.category_structural_hasidenticalelementsIndifferentParts;
				 List<StmtASTNode> leftidenticalnodes = diffnode.getIdenticalelements_in_tuple_left();
				 List<StmtASTNode> rightidenticalnodes = diffnode.getIdenticalelements_in_tuple_right();
				 String note = "";
				 for(int i=0; i<leftidenticalnodes.size(); i++){
					 StmtASTNode leftpartialastnode = leftidenticalnodes.get(i);
					 StmtASTNode rightpartialastnode = rightidenticalnodes.get(i);
					 String partnamechange = leftpartialastnode.getWhichpart()+"->"+rightpartialastnode.getWhichpart()+":"
							 + leftpartialastnode.getValue()+"->"+rightpartialastnode.getValue();
					 if(note.length() == 0)
						 note = partnamechange;
					 else
						 note +="\n"+partnamechange;
					 
				 }
				 if(note.length()>0)
					 structureannotation = note;	
				 ContentPatternGenerator contentpatterngen = new ContentPatternGenerator();
				 contentpatterngen.generateDiffPattern(diffnode);
				 updatepattern.setContentpattern(diffnode.getContentpattern());
				 break;
			 case DifferencingConstant.changetype_encapsulated_LeftInRight:
				 changecategory = MicroChangeConstant.category_structural_encapsulate_LeftInRight;
				 
				 String subwhichpartstring = this.getTheEncapsulatedWhichPartString(diffnode);
				 String whichpartnote = subwhichpartstring;
				 if(whichpartnote.length()>0 && diffnode.getLeftnode() != null){
					 if(diffnode.getLeftnode().getAstnode() == null)
						 structureannotation = "symbol"+"->"+whichpartnote;
					 else
						 structureannotation = diffnode.getLeftnode().getAstnode().getClass().getSimpleName()+"->"+whichpartnote;
				 }
				 contentpatterngen = new ContentPatternGenerator();
				 contentpatterngen.generateDiffPattern(diffnode);
				 updatepattern.setContentpattern(diffnode.getContentpattern());
				 break;
			 case DifferencingConstant.changetype_encapsulated_RightInLeft:
				 changecategory = MicroChangeConstant.category_structural_encapsulate_RightInLeft;
				 String subwhichpartstring1 = this.getTheEncapsulatedWhichPartString(diffnode);
				 String whichpartnote1 = subwhichpartstring1;
				 if(whichpartnote1.length()>0 && diffnode.getRightnode() != null){
					 if(diffnode.getRightnode().getAstnode() == null)
						 structureannotation = whichpartnote1+"<-"+"symbol";
					 else
						 structureannotation = whichpartnote1+"<-"+diffnode.getRightnode().getAstnode().getClass().getSimpleName();
				 }
				  contentpatterngen = new ContentPatternGenerator();
				 contentpatterngen.generateDiffPattern(diffnode);
				 updatepattern.setContentpattern(diffnode.getContentpattern());
				 break;
			 case DifferencingConstant.changetype_allementschanged:
				 changecategory = MicroChangeConstant.category_containcommonsymbols;
				 structureannotation = MicroChangeConstant.note_allementschanged;
				 break;
			 case DifferencingConstant.changetype_elementpartmatchedexception:
				 changecategory = MicroChangeConstant.category_containcommonsymbols;
				 structureannotation = MicroChangeConstant.note_elementpartmatchedexception;
				 break;
					
			 case DifferencingConstant.changetype_nonesymbolmatched:
				 changecategory = MicroChangeConstant.category_nonesymbolmatched;
				 break;
			 case DifferencingConstant.changetype_containcommonsymbols:
				 changecategory = MicroChangeConstant.category_containcommonsymbols;
				  contentpatterngen = new ContentPatternGenerator();
				 contentpatterngen.generateDiffPattern(diffnode);
				 updatepattern.setContentpattern(diffnode.getContentpattern());
				 break;
		}
		 if(diffnode.isdiffentity()){
			 updatepattern.setAredifferententities(true);
		 }else{
			 updatepattern.setAredifferententities(false);
		 }
		if(changecategory != null)
			updatepattern.setChangecategory(changecategory);
		if(diffnode.isIsstructural()){	
			updatepattern.setIsstructural(true);
		}else{
			updatepattern.setIsstructural(false);
		}
		if(diffnode.isAcrosselements()){
			updatepattern.setAcrosselements(true);
		}else{
			updatepattern.setAcrosselements(false);
		}
		if(structureannotation!= null)
			updatepattern.setStructureannotation(structureannotation);
		
		return updatepattern;
	}
	private String getTheEncapsulatedWhichPartString(MyDiffNode diffnode){
		StmtASTNode leftnode = diffnode.getLeftnode();
		StmtASTNode rightnode = diffnode.getRightnode();
		StmtASTNode targetparentnode = null;
		StmtASTNode targetnode = diffnode.getMovedtarget();
		if(diffnode.getChangetype().equals(DifferencingConstant.changetype_encapsulated_RightInLeft)){
			targetparentnode = leftnode;
		}else{
			targetparentnode = rightnode;
		}
		StmtASTNode currentnode = targetnode;
		String whichpartstring ="";
		while(currentnode != targetparentnode)	{
			if(whichpartstring.length()>0)
				whichpartstring = "_"+currentnode.getWhichpart()
					+"."+ whichpartstring;
			else
				whichpartstring = "_"+currentnode.getWhichpart();
			currentnode = currentnode.getParent();
			if(currentnode.getAstnode() != null)
				whichpartstring = currentnode.getAstnode().getClass().getSimpleName()
				+ whichpartstring;
			
		}
		return 	whichpartstring;
	}
	private String getValuePatternstring(MyDiffNode diffnode){
		String str = "";
		if(diffnode.getLeftnode() != null){
			str = diffnode.getLeftnode().getValue();
					//tool.getChildrenSymbolString(diffnode.getLeftnode());
		}
		if(diffnode.getRightnode() != null){
			if(str.length() >0)
				str += "->";
			str += diffnode.getRightnode().getValue();
		}
		return str;
	}

	private class WhichpartTuple{
		String patternstring;
		MyDiffNode leafnode;
		public WhichpartTuple(String patternstring, MyDiffNode leafnode) {
			super();
			this.patternstring = patternstring;
			this.leafnode = leafnode;
		}
		
	}
	private void tranverseDiffTree(MyDiffNode diffroot){
		if(diffroot == null)
			return;
		if(diffroot.getChildren() == null || diffroot.getChildren().size() == 0){
			PatternObject rootpatternobj = extractPattern(diffroot);
			patternobjs.add(rootpatternobj);
		}else{
			for(MyDiffNode child: diffroot.getChildren())
				tranverseDiffTree(child);
		}
	}
	private PatternObject extractPattern(MyDiffNode leaf){
		PatternObject root = new PatternObject(leaf);
		root.setParent(null);
		PatternObject lastobj = root;
		MyDiffNode p = leaf.getParent();
		while(p!= null){
			PatternObject currentobj = new PatternObject(p);
			lastobj.setParent(currentobj);
			lastobj = currentobj;
			p = p.getParent();
		}
		return lastobj;
	}
	private class PatternObject{
		MyDiffNode diffnode;
		PatternObject parent = null;
		PatternObject child = null;
		public PatternObject(MyDiffNode diffnode) {
			super();
			this.diffnode = diffnode;
			this.parent = null;
		}
		public void setParent(PatternObject parent) {
			this.parent = parent;
			if(parent != null)
				parent.setChild(this);
		}
		public PatternObject getChild() {
			return child;
		}
		public void setChild(PatternObject child) {
			this.child = child;
		}
	}
}
