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

import org.eclipse.jdt.internal.compiler.ast.Expression;
import org.eclipse.jdt.internal.compiler.ast.MessageSend;
import org.eclipse.jdt.internal.compiler.ast.QualifiedTypeReference;
import org.eclipse.jdt.internal.compiler.ast.Reference;
import org.eclipse.jdt.internal.compiler.ast.SingleTypeReference;
import org.eclipse.jdt.internal.compiler.ast.TypeReference;

import statementdiff.differencing.model.MyDiffNode;
import statementdiff.differencing.model.StmtASTNode;
import statementdiff.model.CodeChange;
import statementdiff.model.MicroChangeConstant;
import statementdiff.model.MicroChange;
import statementdiff.model.NestedExprPattern;
import statementdiff.model.RefFromExpr;
import statementdiff.tool.StmtDiffTool;

public class RefExtractor {
	
	public void extractReferences( CodeChange stmtupdate){
		if(stmtupdate.getMicrochanges() == null || stmtupdate.getMicrochanges().size() == 0 )
			return;
		RefExtractor extractor = new RefExtractor();
		for( MicroChange microchange : stmtupdate.getMicrochanges()){
	//		String changestr = microchange.getPatternString();
	//		System.out.println(changestr);
			extractor.extract(microchange);
		}
	}
	public void extract(MicroChange microchange){
		if(  microchange.getNestedexprpatterns() != null){
			checkRecursiveExpr(microchange);
			return;
		}
		String pattern = this.checkNonEssentialPattern(microchange);
		if( pattern != null){
			return;
		}
		String changecategory = microchange.getChangecategory() ;
		
		if (changecategory != null &&  
				( changecategory.equals(MicroChangeConstant.category_structural_encapsulate_LeftInRight) 
				|| changecategory.equals(MicroChangeConstant.category_structural_encapsulate_RightInLeft) )
				){
					 List<RefFromExpr> reflist = this.checkEncapsualtion(microchange);
					boolean isleft = false;
					if (changecategory.equals(MicroChangeConstant.category_structural_encapsulate_LeftInRight) ){
						isleft = false;
					}else if( changecategory.equals(MicroChangeConstant.category_structural_encapsulate_RightInLeft)){
						isleft = true;
					}
					List<RefFromExpr> leftreflist = isleft?reflist:null;
					List<RefFromExpr> rightreflist = isleft?null:reflist;
					if(leftreflist != null) microchange.setLeftreflist(leftreflist);
					if(rightreflist != null) microchange.setRightreflist(rightreflist);
				return;	
		}
		analyzeTopDown(microchange);
	}
	private void analyzeTopDown(MicroChange microchange){
		String rootentity = microchange.getRootentity();
		String rootelementpart = microchange.getRootelementpart();
		if( rootentity == null)
			return ;
		String rootentity_elementpart = rootentity+"_"+rootelementpart;
		switch( rootentity_elementpart ){
			/*case "LocalDeclaration_name":
			case "MessageSend_name":
			case "Argument_name":
			case "LocalDeclaration_type":
			case "Argument_type":
			case "LocalDeclaration_modifier":
			case "Argument_modifier":
			case "ExplicitConstructorCall_isthis":
				break;
			case "ExplicitConstructorCall_typearg":
			case "ExplicitConstructorCall_expr":*/
			case "LocalDeclaration_init":
			case "MessageSend_scope":
			case "MessageSend_arg":
			case "Assignment_value":
			case "ExplicitConstructorCall_arg":
			case "ReturnStatement_expr":
			case "ThrowStatement_expr":
			case "CaseStatement_label":
			case "SynchronizedStatement_expr":
			case "SwitchStatement_selector":
			case "Assignment_target":
			case "CompoundAssignment_target":
			case "CompoundAssignment_value":
			case "PostfixExpression_expr":
			case "PrefixExpression_expr":
			case "AssertStatement_check":
			case "AssertStatement_message":
			case "LabeledStatement_stmt":
			case "ForeachStatement_var":
			case "ForeachStatement_iterable":
			case "ForStatement_condition":	
			case "ForStatement_init":	
			case "ForStatement_update":	
			case "WhileStatement_condition"://condition
			case "IfStatement_condition"://condition
			case "DoStatement_condition"://condition
				this.checkWhichpart_forRootEntity(microchange);
				break;
			/*
			case "LabeledStatement_label":
				break;
			case "Assignment_op":
			case "CompoundAssignment_op":
			case "PostfixExpression_op":
			case "PrefixExpression_op":
				break;
			case "BreakStatement_id":
			case "ContinueStatement_id":
				break;*/
		}
	}
	private void checkWhichpart_forRootEntity(MicroChange microchange){
		//what kinds of changes: name, value, type
		String whichpart = microchange.getWhichpart();
		String changecategory = "value";
		List<RefFromExpr> leftreflist = null;
		List<RefFromExpr> rightreflist = null;
		String entity = parseEntityFromWhichpart(whichpart);
		
		if(entity.endsWith("Reference") &&  whichpart.endsWith("_name")){
				StmtASTNode leftnode = getLeafNode(microchange, true);
				StmtASTNode rightnode = getLeafNode(microchange, false);
				String leftname = this.getName(leftnode);
				String rightname = this.getName( rightnode );
				leftreflist = new LinkedList<RefFromExpr>();
				rightreflist = new LinkedList<RefFromExpr>();
				leftreflist.add( new RefFromExpr( changecategory, leftname, leftnode) );
				rightreflist.add(new RefFromExpr( changecategory, rightname, rightnode) );
		}else {
			leftreflist = this.parseRefList(microchange, true);
			rightreflist = this.parseRefList(microchange, false);
		}
		if(leftreflist != null && leftreflist.size()>0 )
			microchange.setLeftreflist(leftreflist);
		if(rightreflist != null && rightreflist.size()>0 )
			microchange.setRightreflist(rightreflist);
	}
	public void checkRecursiveExpr(MicroChange microchange){
		List<RefFromExpr> leftreflist = new LinkedList<RefFromExpr>();
		List<RefFromExpr> rightreflist =  new LinkedList<RefFromExpr>();
		List<NestedExprPattern> micromicropatterns = microchange.getNestedexprpatterns();
		for( NestedExprPattern micropattern: micromicropatterns){
			if( micropattern.getContentpattern() != null ){
				String microcontent = parseContentPatternFromMicroMicroPattern(micropattern.getContentpattern());
				String pattern = this.checkNonEssentialPattern(microcontent );
				if(pattern != null){
					continue;
				}
			}else{
				List<RefFromExpr> leftreflist1 = null;
				List<RefFromExpr> rightreflist1 =  null;
				if(micropattern.getLeftnode() != null){
					leftreflist1 = this.getRefs_forRecursiveExpr(micropattern.getLeftnode());
					if( leftreflist1 != null && leftreflist1.size()>0)
						leftreflist.addAll(leftreflist1);
				}
				if(micropattern.getRightnode() != null){
					rightreflist1 = this.getRefs_forRecursiveExpr(micropattern.getRightnode());
					if( rightreflist1 != null && rightreflist1.size()>0)
						rightreflist.addAll(rightreflist1);
				}
			}
		}
		if( leftreflist.size() > 0){
			microchange.setLeftreflist(leftreflist);
		}
		if( rightreflist.size() > 0){
			microchange.setRightreflist(rightreflist);
		}
	}

	private List<RefFromExpr> getRefs_forRecursiveExpr(StmtASTNode node){
		List<RefFromExpr> reflist = new LinkedList<RefFromExpr>();
		if( node.getAstnode() instanceof MessageSend){
			for( StmtASTNode child: node.getChildren()){
				if( child.getWhichpart().equals("name") ){
					reflist.add( new RefFromExpr("name", child.getValue(), node));
				}else if( child.getWhichpart().equals("arg") ){
					List<RefFromExpr> reflist1 = this.extractRefs_fromExpr(child);
					if(reflist1 != null)
						reflist.addAll(reflist1);
				}
			}
		}else{
			for( StmtASTNode child: node.getChildren()){
				if( //child.getWhichpart().equals("op") || 
						child.getWhichpart().equals("right") ){
					List<RefFromExpr> reflist1 = this.extractRefs_fromExpr(child);
					if(reflist1 != null)
						reflist.addAll(reflist1);
				}
			}
		}
		if( reflist.size() == 0)
			return null;
		else
			return reflist;
	}
	private String parseContentPatternFromMicroMicroPattern(String contentpattern){
		if( contentpattern == null)
			return null;
		int index1 = contentpattern.indexOf(";");
		if( index1 == -1)
			return null;
		String contentstr = contentpattern.substring(0, index1);
		index1 = contentpattern.indexOf(":");
		if( index1 == -1)
			return null;
		contentstr = contentstr.substring(index1+1);
		return contentstr;
	}
	private String parseEntityFromWhichpart(String whichpart){
		String[] tmparry = whichpart.split("_");	
		if(tmparry.length>0)
			return tmparry[0];
		else
			return null;
	}
	
	private MyDiffNode getDiffLeaf(MicroChange microchange){
		if( microchange.getDiffleaf() == microchange.getDiffroot()){
			return microchange.getDiffleaf();
		}else
			return microchange.getDiffleaf().getParent();
	}
	private List<RefFromExpr> parseRefList(MicroChange microchange, boolean isleft){
		if( isleft ){
			if	(microchange.getActiontype().equals("CHANGE") || microchange.getActiontype().equals("DELETION") )
				return this.extractRefs_fromExpr(microchange, true);
			else
				return null;
		}else{
			if	(microchange.getActiontype().equals("CHANGE") || microchange.getActiontype().equals("ADDITION") )
				return this.extractRefs_fromExpr(microchange, false);
			else
				return null;
		}
		
	}
	
	private StmtASTNode getLeafNode(MicroChange microchange, boolean isleft){
		if(isleft)
			return this.getDiffLeaf(microchange).getLeftnode();
		else
			return this.getDiffLeaf(microchange).getRightnode();
	}
	private List<RefFromExpr> extractRefs_fromExpr(MicroChange microchange, boolean isleft){//extract references
		StmtASTNode node = microchange.getDiffleaf().getLeftnode();
		if( !isleft)
			node = microchange.getDiffleaf().getRightnode();
		return extractRefs_fromExpr(node);
	}
	
	private String getName(StmtASTNode partialastnode){
		StmtDiffTool tool = new StmtDiffTool();
		StmtASTNode namenode = tool.getChildInWhichpart(partialastnode, "name");
		if( namenode != null)
			return namenode.getValue();
		else
			return partialastnode.getValue();
	}
	private String getTypeReferecenName(TypeReference typeref){
		if( typeref instanceof SingleTypeReference ){//ParameterizedSingleTypeReference,ArrayTypeReference
			String name = String.valueOf(((SingleTypeReference)typeref).token);
			return name;
		}else if( typeref instanceof QualifiedTypeReference//ParameterizedQualifiedTypeReference
				){
			QualifiedTypeReference qualifiedTypeReference = (QualifiedTypeReference)typeref;
			int length = qualifiedTypeReference.tokens.length;
			String qualifier = "";
			if( length > 0){
				for (int i = 0; i < length ; i++) {
					if( qualifier.length()>0)
						qualifier += '.';
					qualifier += String.valueOf(qualifiedTypeReference.tokens[i]);
				}
			}
			
			String name = qualifier;
			return name;
		}//
		return null;
	}
	private List<RefFromExpr> extractRefs_fromExpr(StmtASTNode node){//extract references
		if( node ==null)
			return null;
		List<RefFromExpr> reflist = new LinkedList<RefFromExpr>();
		String category =null;
		String entitype = node.getAstnode().getClass().getSimpleName();
		if(entitype.endsWith("Reference"))	{
			String fullname = null;
				if(entitype.endsWith("NameReference") ){
					 fullname = node.getValue();//this.getName(node);
					category = "nameRef";
					
				}else if (entitype.equals("ArrayReference") ){
					fullname = this.getName(node);
					category = "nameRef";
					//reflist.add(new RefFromExpr(category, fullname, node));
					for( StmtASTNode child: node.getChildren()){
						if(child.getWhichpart().equals("index")){
							List<RefFromExpr> reflist1= extractRefs_fromExpr(child);
							if( reflist1 != null && reflist1.size()>0)
								reflist.addAll(reflist1);
						}	
					}
				}
				else if(entitype.equals("FieldReference") )	{
					 fullname = this.getName(node);
					category = "fieldRef";
					for( StmtASTNode child: node.getChildren()){
						if(child.getWhichpart().equals("scope")){
							List<RefFromExpr> reflist1= extractRefs_fromExpr(child);
							if( reflist1 != null && reflist1.size()>0)
								reflist.addAll(reflist1);
						}	
					}
				}else if(entitype.endsWith("TypeReference"))	{
						 fullname = getTypeReferecenName((TypeReference)node.getAstnode());
						category = "typeRef";
						for( StmtASTNode child: node.getChildren()){
							if(!child.getWhichpart().equals("name") &&  child.getWhichpart().equals("qualifier")){
								List<RefFromExpr> reflist1= extractRefs_fromExpr(child);
								if( reflist1 != null && reflist1.size()>0)
									reflist.addAll(reflist1);
							}	
						}
				}
				reflist.add(new RefFromExpr(category, fullname, node));
			}else if(entitype.endsWith("Literal"))	{//value
				
			}else if(entitype.endsWith("AllocationExpression"))	{
				if( entitype.endsWith("ArrayAllocationExpression") && node.getWhichpart().equals("arraycount") ){
					
				}else{
					category = "typeRef";
					StmtDiffTool tool = new StmtDiffTool();
					StmtASTNode typechild = tool.getChildInWhichpart(node, "type");
					String typename = null;//for arraycount
					if(typechild != null ){//
						typename = typechild.getValue();
						reflist.add(new RefFromExpr(category, typename, node));
					}
					for( StmtASTNode child: node.getChildren()){
						if(child.getWhichpart().equals("arg")){
							List<RefFromExpr> reflist1= extractRefs_fromExpr(child);
							if( reflist1 != null && reflist1.size()>0)
								reflist.addAll(reflist1);
						}	
					}
				}
			}else if(entitype.equals("CastExpression") || entitype.equals("InstanceOfExpression") )	{
				category = "typeRef";
				StmtDiffTool tool = new StmtDiffTool();
				StmtASTNode typechild = tool.getChildInWhichpart(node, "type");
				String typename = typechild.getValue();
				reflist.add(new RefFromExpr(category, typename, node));
				for( StmtASTNode child: node.getChildren()){
					if(child.getWhichpart().equals("expr")){
						List<RefFromExpr> reflist1= extractRefs_fromExpr(child);
						if( reflist1 != null && reflist1.size()>0)
							reflist.addAll(reflist1);
					}	
				}
			}else if(entitype.equals("ClassLiteralAccess"))	{
				StmtDiffTool tool = new StmtDiffTool();
				StmtASTNode typechild = tool.getChildInWhichpart(node, "type");
				String typename = typechild.getValue();
				category = "typeRef";
				reflist.add(new RefFromExpr(category, typename, node));
				
			}else if(entitype.endsWith("Expression")
					//entitype.equals("AND_AND_Expression") || entitype.equals("OR_OR_Expression")
					//|| entitype.equals("BinaryExpression") ||entitype.equals("CombinedBinaryExpression") 
					//|| entitype.equals("EqualExpression") 
					//|| entitype.equals("ConditionalExpression")
					//|| entitype.equals("PostfixExpression") || entitype.equals("PrefixExpression")
					)	{
				for( StmtASTNode child: node.getChildren()){
					if (!(child.getWhichpart().equals("op"))){
						List<RefFromExpr> reflist1= extractRefs_fromExpr(child);
						if( reflist1 != null && reflist1.size()>0)
							reflist.addAll(reflist1);
					}	
				}
			}else if(entitype.equals("MessageSend"))	{
				String fullname = getName(node);
				category = "name";
				reflist.add(new RefFromExpr(category, fullname, node));
				for( StmtASTNode child: node.getChildren()){
					if(!(child.getWhichpart().equals("name"))){
						List<RefFromExpr> reflist1= extractRefs_fromExpr(child);
						if( reflist1 != null && reflist1.size()>0)
							reflist.addAll(reflist1);
					}	
				}
			}else if(entitype.equals("ExplicitConstructorCall"))	{//
				for( StmtASTNode child: node.getChildren()){
					if(child.getWhichpart().equals("arg")){
						List<RefFromExpr> reflist1= extractRefs_fromExpr(child);
						if( reflist1 != null && reflist1.size()>0)
							reflist.addAll(reflist1);
					}	
				}
			} else if(entitype.equals("Argument"))	{
				String fullname = getName(node);
				category = "name";
				reflist.add(new RefFromExpr(category, fullname, node));
				
				StmtDiffTool tool = new StmtDiffTool();
				StmtASTNode typechild = tool.getChildInWhichpart(node, "type");
				String typename = typechild.getValue();
				category = "type";
				reflist.add(new RefFromExpr(category, typename, node));
				
			}else if(entitype.equals("ArrayInitializer"))	{
				for( StmtASTNode child: node.getChildren()){
					if(child.getWhichpart().equals("values")){
						List<RefFromExpr> reflist1= extractRefs_fromExpr(child);
						if( reflist1 != null && reflist1.size()>0)
							reflist.addAll(reflist1);
					}	
				}
			}else  if(entitype.equals("Assignment") || entitype.equals("CompoundAssignment") )	{
				if( node.getWhichpart().equals("op")){
					
				}else{
					String fullname = getAssignmentName(node);
					category = "nameRef";
					reflist.add(new RefFromExpr(category, fullname, node));
					
					for( StmtASTNode child: node.getChildren()){
						if(child.getWhichpart().equals("value")){
							List<RefFromExpr> reflist1= extractRefs_fromExpr(child);
							if( reflist1 != null && reflist1.size()>0)
								reflist.addAll(reflist1);
						}	
					}
				}
			}
		return reflist;
	}
	private String getAssignmentName(StmtASTNode node){
		StmtDiffTool tool = new StmtDiffTool();
		StmtASTNode child = tool.getChildInWhichpart(node, "target");
		String name = child.getValue();
		return name;
	}
	private String checkNonEssentialPattern(MicroChange microchange){
		return checkNonEssentialPattern(microchange.getContent());
	}
	private String checkNonEssentialPattern(String content){
		if(content == null || content.length() == 0)
			return null;
		String tmparry[] = content.split("->");
		if(tmparry.length == 2 ){
				String leftcontent = tmparry[0];
				String rightcontent = tmparry[1];
				if( rightcontent.equals("this."+leftcontent) )
					return "AddingThis";
				else if( leftcontent.equals("this."+ rightcontent) )
					return "RemovingThis";
		}else if(tmparry.length == 1){ //this-> or ->this
			if( content.equals("->this") )
				return "AddingThis";
			else if(content.equals("this->"))
				return "RemovingThis";
		}
		return null;
	}
	private List<RefFromExpr> checkEncapsualtion( MicroChange microchange){
		MyDiffNode diffleaf = microchange.getDiffleaf();
		String changecategory = microchange.getChangecategory() ;
		List<RefFromExpr> tuples = new LinkedList<RefFromExpr>();
		
		StmtASTNode movedtarget = diffleaf.getMovedtarget(); 
		StmtASTNode mainentity = null; 
		if (changecategory.equals(MicroChangeConstant.category_structural_encapsulate_LeftInRight) ){
			mainentity = diffleaf.getRightnode();
		}else if( changecategory.equals(MicroChangeConstant.category_structural_encapsulate_RightInLeft)){
			mainentity = diffleaf.getLeftnode();
		}
		if(movedtarget != null && mainentity != null 
		&& (mainentity.getAstnode() instanceof Expression 
			|| mainentity.getAstnode() instanceof  Reference )
	//	&& !(mainentity.getAstnode() instanceof TypeReference)
	//	&& !(mainentity.getAstnode() instanceof NameReference) 
		//|| mainentity.getAstnode() instanceof Assignment
				 ){
			/*if( //	mainentity.getAstnode() instanceof Reference 
				//	|| mainentity.getAstnode() instanceof TypeReference
					 mainentity.getAstnode() instanceof MessageSend
					|| mainentity.getAstnode() instanceof LocalDeclaration
					|| mainentity.getAstnode() instanceof Argument){
				List<ChangeTypeCategoryOneSide> tuples1 = analyzeReferenceEntities(mainentity);
				if( tuples1 != null && tuples1.size()>0 )
					tuples = this.makeChangeTypeCategoryList(tuples1, isleft);
			}else{*/
				List<StmtASTNode> otherchildren =  getChildrenNotEncaped(movedtarget, mainentity);
				for( StmtASTNode child: otherchildren){
					List<RefFromExpr> tuples1 = this.extractRefs_fromExpr(child);
					if( tuples1 != null && tuples1.size() > 0)
						tuples.addAll( tuples1);
				}
			//}
		}
		if( tuples.size() == 0){//????Exception
			
		}
		return tuples;
	}
	private List<StmtASTNode> getChildrenNotEncaped(StmtASTNode movedtarget, StmtASTNode mainentity){
		List<StmtASTNode> otherchildren = new LinkedList<StmtASTNode>();
		
		StmtASTNode parent = movedtarget.getParent();
		StmtASTNode currententity = movedtarget;
		while( parent != mainentity){
			for( StmtASTNode child: parent.getChildren()){
				if( child != currententity){
					otherchildren.add(child);
				}
			}
			currententity = parent;
			parent = parent.getParent();
		}
		for( StmtASTNode child: parent.getChildren()){
			if( child != currententity){
				otherchildren.add(child);
			}
		}
		return otherchildren;
	}
	
}
