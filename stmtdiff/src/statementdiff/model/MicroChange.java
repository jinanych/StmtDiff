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

import statementdiff.differencing.model.MyDiffNode;

public class MicroChange {
	String changeentity = null;
	String elementpart = null;
	String rootentity = null;
	String rootelementpart = null;
	String distillerentity = null; 
	
	private String actiontype;
	private String whichpart;
	private String whichpartcontext = null;
	
	private String entitytype;
	
	private String changecategory = null;
	private String structureannotation = null;
	private boolean isstructural = false;
	private boolean aredifferententities = false;
	private boolean acrosselements = false;
	
	private String content;
	private String contentpattern;
	
	List<NestedExprPattern> nestedexprpatterns = null;
	
	
	
	private String typechange_annotation = null;
	private String typechange_leafchange = null;
	private String typechange_leafcontent = null;
	private String typechange_leafcontentpattern = null;
	
	private String rootentityname = null;
	private String leftentitytype = null;
	private String rightentitytype = null;
	
	
	MyDiffNode diffroot = null;
	MyDiffNode diffleaf = null;
	String contentbefore = null;
	String contentafter = null;
/*
	String leftrootentity = null;
	String rightrootentity = null;
	String leftchangeentity = null;
	String rightchangeentity = null;
	String leftrootelementpart = null;
	String rightrootelementpart = null;
	String leftchangeelementpart = null;
	String rightchangeelementpart = null;
	*/
	
	List<RefFromExpr> leftreflist = null;
	List<RefFromExpr> rightreflist = null;
	
	public MicroChange(String actiontype, String whichpart, String entitytype, String whichpartcontext) {
		super();
		this.actiontype = actiontype;
		this.whichpart = whichpart;
		this.entitytype = entitytype;
		this.whichpartcontext = whichpartcontext;
		
	}
	
	public String getActiontype() {
		return actiontype;
	}
	public void setActiontype(String actiontype) {
		this.actiontype = actiontype;
	}
	public String getWhichpart() {
		return whichpart;
	}
	public void setWhichpart(String whichpart) {
		this.whichpart = whichpart;
	}
	public String getWhichpartcontext() {
		return whichpartcontext;
	}
	public void setWhichpartcontext(String whichpartcontext) {
		this.whichpartcontext = whichpartcontext;
	}
	public String getEntitytype() {
		return entitytype;
	}
	public void setEntitytype(String entitytype) {
		this.entitytype = entitytype;
	}
	public boolean isAredifferententities() {
		return aredifferententities;
	}
	public void setAredifferententities(boolean aredifferententities) {
		this.aredifferententities = aredifferententities;
	}
	public String getChangecategory() {
		return changecategory;
	}
	public void setChangecategory(String changecategory) {
		this.changecategory = changecategory;
	}
	public boolean isIsstructural() {
		return isstructural;
	}
	public void setIsstructural(boolean isstructural) {
		this.isstructural = isstructural;
	}
	public String getStructureannotation() {
		return structureannotation;
	}
	public void setStructureannotation(String structureannotation) {
		this.structureannotation = structureannotation;
	}
	
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getContentpattern() {
		return contentpattern;
	}
	public void setContentpattern(String contentpattern) {
		this.contentpattern = contentpattern;
	}
	public String getTypechange_annotation() {
		return typechange_annotation;
	}
	public void setTypechange_annotation(String typechange_annotation) {
		this.typechange_annotation = typechange_annotation;
	}
	
	public String getChangeentity() {
		return changeentity;
	}
	public void setChangeentity(String changeentity) {
		this.changeentity = changeentity;
	}
	public String getElementpart() {
		if( elementpart != null)
			return elementpart;
		else{
			if( whichpart == null)
				return null;
			else{
				int index = whichpart.lastIndexOf("_");
				if( index == -1)
					return null;
				return whichpart.substring(index+1);
			}
		}
	}
	public void setElementpart(String elementpart) {
		this.elementpart = elementpart;
	}
	public String getRootentity() {
		return rootentity;
	}
	public void setRootentity(String rootentity) {
		this.rootentity = rootentity;
	}
	public String getRootelementpart() {
		return rootelementpart;
	}
	public void setRootelementpart(String rootelementpart) {
		this.rootelementpart = rootelementpart;
	}
	
	
	public boolean isAcrosselements() {
		return acrosselements;
	}
	public void setAcrosselements(boolean acrosselements) {
		this.acrosselements = acrosselements;
	}
	
	public String getDistillerentity() {
		return distillerentity;
	}
	public void setDistillerentity(String distillerentity) {
		this.distillerentity = distillerentity;
	}
	
	public String getTypechange_leafchange() {
		return typechange_leafchange;
	}
	public void setTypechange_leafchange(String typechange_leafchange) {
		this.typechange_leafchange = typechange_leafchange;
	}
	public String getTypechange_leafcontent() {
		return typechange_leafcontent;
	}
	public void setTypechange_leafcontent(String typechange_leafcontent) {
		this.typechange_leafcontent = typechange_leafcontent;
	}
	public String getTypechange_leafcontentpattern() {
		return typechange_leafcontentpattern;
	}
	public void setTypechange_leafcontentpattern(
			String typechange_leafcontentpattern) {
		this.typechange_leafcontentpattern = typechange_leafcontentpattern;
	}
	public String getPatternString(){
		String str = "";
			
		if(whichpartcontext != null)
			str = whichpartcontext+".";
		if(actiontype != null)
			str += actiontype+" ";
		if( whichpart != null)
			str += whichpart+":\n";
		if( entitytype != null)
			str += "entitytype: "+entitytype+"\n";
		
		if(this.isAredifferententities()){
			str += "arediffrententities: true"+"\n";
		}else{
		//	str += "arediffrententities: false"+"\n";
		}
		if(this.acrosselements){
			str += "acrosselements: true"+"\n";
		}else{
		//	str += "acrosselements: false"+"\n";
		}
		if(this.isstructural){
			str += "isstructural: true"+"\n";
		}else{
			str += "isstructural: false"+"\n";
			str += "note:"+changecategory+"\n";
		}
		if(changecategory != null){
				str += "changecategory:"+changecategory+"\n";
		}
		
		if(structureannotation != null)
			str += "structureannotation:"+structureannotation+"\n";
		if(typechange_annotation != null)
			str += "typechange_annotation:"+typechange_annotation+"\n";
		if(this.typechange_leafchange != null)
			str += "typechange_leafchange:"+typechange_leafchange+"\n";
		if(this.typechange_leafcontent != null)
			str += "typechange_leafcontent:"+typechange_leafcontent+"\n";
		if(this.typechange_leafcontentpattern != null)
			str += "typechange_leafcontentpattern:"+typechange_leafcontentpattern+"\n";
		
		if( content!= null)
			str += "content:"+content+"\n";
		if(contentpattern != null)
			str += "contentpattern:"+contentpattern+"\n";
		if( changeentity != null){
			str += "changeentity:"+changeentity+"\n";
		}
		if(  elementpart!= null){
			str += "elementpart:"+elementpart+"\n";
		}
		if(  rootentity != null){
			str += "rootentity:"+rootentity+"\n";
		}
		if(  rootelementpart != null){
			str += "rootelementpart:"+rootelementpart+"\n";
		}
		if(  this.distillerentity != null){
			str += "distillerentity:"+distillerentity+"\n";
		}
		
		if( this.nestedexprpatterns != null){
			str += "NestedExprPattern:\n";
			for ( NestedExprPattern pattern: nestedexprpatterns){
				str += pattern.getPrintStr()+"\n";
			}
		}
		return str;
	}

	public List<NestedExprPattern> getNestedexprpatterns() {
		return nestedexprpatterns;
	}

	public void setNestedexprpatterns(List<NestedExprPattern> nestedexprpatterns) {
		this.nestedexprpatterns = nestedexprpatterns;
	}

	public String getRootentityname() {
		return rootentityname;
	}

	public void setRootentityname(String rootentityname) {
		this.rootentityname = rootentityname;
	}

	public String getLeftentitytype() {
		return leftentitytype;
	}

	public void setLeftentitytype(String leftentitytype) {
		this.leftentitytype = leftentitytype;
	}

	public String getRightentitytype() {
		return rightentitytype;
	}

	public void setRightentitytype(String rightentitytype) {
		this.rightentitytype = rightentitytype;
	}

	public MyDiffNode getDiffroot() {
		return diffroot;
	}

	public void setDiffroot(MyDiffNode diffroot) {
		this.diffroot = diffroot;
	}

	public MyDiffNode getDiffleaf() {
		return diffleaf;
	}

	public void setDiffleaf(MyDiffNode diffleaf) {
		this.diffleaf = diffleaf;
	}

	public String getContentbefore() {
		return contentbefore;
	}

	public void setContentbefore(String contentbefore) {
		this.contentbefore = contentbefore;
	}

	public String getContentafter() {
		return contentafter;
	}

	public void setContentafter(String contentafter) {
		this.contentafter = contentafter;
	}

	
	public List<RefFromExpr> getLeftreflist() {
		return leftreflist;
	}

	public void setLeftreflist(List<RefFromExpr> leftreflist) {
		this.leftreflist = leftreflist;
	}

	public List<RefFromExpr> getRightreflist() {
		return rightreflist;
	}

	public void setRightreflist(List<RefFromExpr> rightreflist) {
		this.rightreflist = rightreflist;
	}

	
}
