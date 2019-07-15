package statementdiff.model;

/*
 * StmtDiff
 * %%
 * Copyright (C) 2019 - Chunhua Yang <jnych@126.com>
 * %%
 * Licensed under the MIT License
 * 
 */

public class DifferencingConstant {
	public static final String difftype_add = "ADDITION";
	public static final String difftype_delete = "DELETION";
	public static final String difftype_change = "CHANGE";
	
	//structural
	public static final String changetype_orderchanged = "ORDER_CHANGED";
	public static final String changetype_allementschanged = "AllElementsChanged";
	public static final String changetype_elementpartmatchedexception = "Irregular";
	public static final String changetype_encapsulated_LeftInRight = "LeftEncapsulatedInRight";
	public static final String changetype_encapsulated_RightInLeft = "RightEncapsulatedInLeft";
	
	public static final String changetype_hasidenticalelementsIndifferentParts = "HasIdenticalElementsInDifferentParts";
	
	//simple
	public static final String changetype_nonesymbolmatched = "NoneSymbolMatched";
	public static final String changetype_containcommonsymbols = "ContainCommonSymbols";
	
	public static final String changetype_entity_DiffEntities = "DiffEntities";
	public static final String changetype_entity_SameEntities = "SameEntities";
	
	
}
