package statementdiff.model;

/*
 * StmtDiff
 * %%
 * Copyright (C) 2019 - Chunhua Yang <jnych@126.com>
 * %%
 * Licensed under the MIT License
 * 
 */

public class MicroChangeConstant {
	public static final String actiontype_add = "ADDITION";
	public static final String actiontype_delete = "DELETION";
	public static final String actiontype_change = "CHANGE";
	
	public static final String category_structural_orderchanges = "OrderingChange";
	public static final String category_structural_encapsulate_LeftInRight = "EncapsulationLR";
	public static final String category_structural_encapsulate_RightInLeft = "EncapsulationRL";
	public static final String category_structural_hasidenticalelementsIndifferentParts = "MovingAcrossElements";
	public static final String category_nonesymbolmatched = "NonCommonTokens";
	public static final String category_containcommonsymbols = "ContainingCommonTokens";
	
	public static final String note_allementschanged = "AllElementsChanged";
	public static final String note_elementpartmatchedexception = "Irregular";
		
	public static final String category_entity_DiffEntities = "DiffEntities";
	public static final String category_entity_SameEntities = "SameEntities";
	
}
