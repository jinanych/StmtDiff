package statementdiff.tool;

/*
 * StmtDiff
 * %%
 * Copyright (C) 2019 - Chunhua Yang <jnych@126.com>
 * %%
 * Licensed under the MIT License
 * 
 */

import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;

//import org.apache.commons.lang3.StringUtils;

import statementdiff.differencing.model.StmtASTNode;
import statementdiff.model.CodeChange;
import statementdiff.model.MicroChange;
import statementdiff.model.MicroChangeConstant;
import statementdiff.model.NestedExprPattern;
import statementdiff.model.RefFromExpr;
import statementdiff.model.metadata.Metadata;
import statementdiff.model.metadata.Refentity;
import ch.uzh.ifi.seal.changedistiller.model.entities.SourceCodeChange;

import com.google.gson.Gson;

public class StmtDiffTool {
	
		 //NGramsCalculator
	public double nGramsCal(StmtASTNode leftastnode, StmtASTNode rightastnode) {
    	String left = getChildrenSymbolString(leftastnode);
    	String right = getChildrenSymbolString(rightastnode);
    	if(left.equals(right))
    		return 1.0 ;
    	HashSet<String> leftsymbolstringhashset = generateHashSetString(leftastnode);
    	HashSet<String> rightsymbolstringhashset = generateHashSetString(rightastnode);
    	return nGramsCal(leftsymbolstringhashset, rightsymbolstringhashset);
    }
    private double nGramsCal(HashSet<String> left, HashSet<String> right) {
        int union = left.size() + right.size();
        left.retainAll(right);
        int intersection = left.size();
        return intersection * 2.0 / union;
    }
    public HashSet<String> generateHashSetString(StmtASTNode astnode){
    	List<String> symbols = getChildrenSymbols(astnode);
    	HashSet<String> symbolstringhashset = new HashSet<String>();
		for(String str: symbols){
				symbolstringhashset.add( str );
			
		}
		return symbolstringhashset;
	}
    
   public void generateDepth(StmtASTNode root){//through post-traversing
	   if(root.getParent() == null)
		   root.setLevel(1);
	   else
		   root.setLevel(root.getParent().getLevel() +1);
	   if( root.getChildren() == null || root.getChildren().size() == 0){
		   root.setDepth(1);
	   }else{
		   int depth = 0;
		   for( StmtASTNode child: root.getChildren()){
			   generateDepth(child);
			   if( child.getDepth()> depth)
				   depth = child.getDepth();
		   }
		   root.setDepth(depth+1);
	   }
   }
   
   public void generateValue(StmtASTNode root){//through post-traversing
	   if(root.getValue() != null)
		   return;
	   if( root.getChildren() == null || root.getChildren().size() == 0){
			if(root.getValue() == null)
				root.setValue(root.getAstnode().toString());
		}else {
			String rootvalue = "";
			for( StmtASTNode child: root.getChildren()){
				generateValue(child);
				if( rootvalue.length() == 0)
					rootvalue = child.getValue();
				else
					rootvalue += " " + child.getValue();
			}
			root.setValue(rootvalue);
		}
   }
    
    public List<String> getChildrenSymbols(StmtASTNode node){
		List<String> strlist = new LinkedList<String>();
		if( node.getChildren() == null || node.getChildren().size() == 0){
			strlist.add( node.getValue() );
		}else{
			for( StmtASTNode child: node.getChildren()){
				List<String> strlist1 = getChildrenSymbols(child);
				strlist.addAll(strlist1);
			}
		}
		return strlist;
	}
	public String getChildrenSymbolString(StmtASTNode node){
		List<String> strlist = this.getChildrenSymbols(node);
		String str = "";
		for(String str1: strlist){
			if(str.length() == 0)
				str = str1;
			else
				str +=" "+ str1;
		}
		return str;
	}
	
	public boolean isReservedWords(String symbolvalue){
		for(String str:OTHERRESERVEDWORDS){
			if(str.equals(symbolvalue))
				return true;
		}
		for(String str:ModifierSet){
			if(str.equals(symbolvalue))
				return true;
		}
		for(String str:PrimitiveTypeSet){
			if(str.equals(symbolvalue))
				return true;
		}
		if(isOperator(symbolvalue))
			return true;
		return false;
		
	}
	public boolean isOperator(String symbolvalue){
		for(String str:AssignOperatorSet){
			if(str.equals(symbolvalue))
				return true;
		}
		for(String str:BinaryOperator){
			if(str.equals(symbolvalue))
				return true;
		}
		for(String str:UnaryOperators){
			if(str.equals(symbolvalue))
				return true;
		}
		
		return false;
	}
	String[] OTHERRESERVEDWORDS = { 
			"package","import", 
			//"*",//import part
			"interface", "class",
			"extends","implements",//"& ",
			"new",
			"throws",
			"assert",//AssertStmt
			//":",//LabeledStmt
			"switch",//SwitchStmt
			"case","default",//":",//SwitchEntryStmt //AnnotationMemberDeclaration
			"break",//BreakStmt
			"return",//ReturnStmt
			"enum",//EnumDeclaration
			"if","else",//IfStmt
			"while",//WhileStmt
			"continue",//ContinueStmt
			"do",//DoStmt
			"for",//ForStmt. ForeachStmt
			"throw",//ThrowStmt
			"synchronized",//SynchronizedStmt
			"try","finally",//TryStmt
			"catch",//CatchClause
			"@interface",//AnnotationDeclaration
			"@",//AnnotationExpr
			//"=",//MemberValuePair
			"null",//NullLiteralExpr
			"this",//ThisExpr,ExplicitConstructorInvocationStmt
			"super",//SuperExpr,ExplicitConstructorInvocationStmt
			".class",//ClassExpr
			//"?",":",// ConditionalExpr
			"instanceof",//InstanceOfExpr
			"...",//VarArg,Parameter
			"?",//WildcardType
			"void",//VoidType
			//":"
	        };
		String[] ModifierSet = {
				"private","protected","public","abstract","static",
				"final","native","strictfp","synchronized","transient",
				"volatile"
		};
		String[] PrimitiveTypeSet = {
			"boolean","byte","char","double","float","int","long","short"
		};
		//String ReservedWord_VariableDeclaratorInit =" =";
		String[] AssignOperatorSet = {//AssignExpr
			"=","&=","|=" ,"^=","+=","-=","%=","/=","*=","<<=",">>=",">>>="
		};
		String[] BinaryOperator = {//BinaryExpr
			"||","&&","|","&" ,"^","==","!=","<",">","<=",">=","<<",">>",">>>",
	       "+","-","*","/","%"
		};
		String[] UnaryOperators = {//UnaryExpr
			"+","-","~","!","++","--"
		};
		
		String[] SystemAnnotationSet = {//AssignExpr
				"Override","Deprecated","SuppressWarnings" ,"Target","ElementType"
				,"Retention","RetentionPolicy","Documented"
			};
		
		public String makeDisitillerChanges(List<SourceCodeChange> fChanges){
		    	int n = 0;
		    	String resstr = "";
		    	for(int i=0; i<fChanges.size(); i++){
		    		SourceCodeChange change = fChanges.get(i);
		    		if( change.getChangeType().toString().contains("DOC") 
		    		|| change.getChangeType().toString().contains("COMMENT"))
		    			continue;
		    		n++;
		    		if( n>= 255)
		    			break;
		    		String str = makeDistillerChangeStr(change);
		    		if( resstr.length() == 0)
		    			resstr = str;
		    		else
		    			resstr += "\n" + str;
		    	}
		    	return resstr;
		    }
		
		 public String makeDistillerChangeStr(SourceCodeChange change){
		    	String entitycontent = change.getChangedEntity().toString();
				String entitytype = "";
				String content = "";
				if( entitycontent != null && entitycontent.length()>0){
					int index = entitycontent.indexOf(":");
					entitytype = entitycontent.substring(0, index).trim();
					content = entitycontent.substring(index+1).trim();
					//if(content.length()>100)
					//content = content.substring(0,100);//getFirstLine(content);
				}
				String str =  change.getChangeType().toString()
		    			+" "+ entitytype
		    			+" "+ content
		    			+"("+ change.getChangedEntity().getStartPosition() 
		    			+ ", "+ change.getChangedEntity().getEndPosition()
		    			+")";
				return str;
		    }
	/*	public static void main(String[] args){
			StmtDiffTool tool = new StmtDiffTool();
			int pairedi[] = {-1, -1, 3, 6, 5, -1};
			int pairedj[] = {-1, -1, -1, 2, -1, 4, 3};
			int pairedcount = 3;
			tool.checkOrderingChange(pairedi, pairedj, pairedcount);
		}*/
		 
		 public StmtASTNode getChildInWhichpart(StmtASTNode partialastnode, String whichpart){
				StmtASTNode namechild = null;
				for(StmtASTNode child: partialastnode.getChildren() ){
					if( child.getWhichpart().equals(whichpart) ){
						namechild = child; 
						break;
					}
				}
				return namechild;
			}
		public String generateChangeStr(CodeChange codechange){
			if( codechange.getDistillerstmtupdate() == null)
				return null;
			SourceCodeChange change = codechange.getDistillerstmtupdate();
			String distillerstr = this.makeDistillerChangeStr(change);
			String str = distillerstr;
			if( codechange.getMicrochanges() != null){
				str += "\n";
				//TestObjectToJson obj = new TestObjectToJson();  
				//String microchangestr1 = generateJSONOutput(obj);
				//str += microchangestr1;
				for( MicroChange microchange: codechange.getMicrochanges()){
					str += "----MicroChange----\n";
					String microchangestr = generateMicroChangeStr(microchange);
			//TestObjectToJson obj = new TestObjectToJson(microchange);  
				//	String microchangestr = generateJSONOutput(obj);
					//String microchangestr = generateJSONOutput(microchange);
					str += microchangestr;
				}/**/
			}
			if( codechange.getMetadalist() != null){
				str += "\n";
				Gson gson = new Gson();
				for( Metadata metadata: codechange.getMetadalist()){
					str += "----Metadata----\n";
					String metadatastr =  gson.toJson(metadata);;
					str += metadatastr;
				}
			}
			return str;
		}
		
		private String generateMicroChangeStr(MicroChange microchange){
			String str = "";
			
			str += "Context:" + microchange.getWhichpartcontext()+"\n";
			str += "Whichpart:" + microchange.getWhichpart()+"\n";
			String actiontype = microchange.getActiontype();
			
			String operation = actiontype;
			String changecategory = microchange.getChangecategory();
			if(changecategory!= null )
				switch(changecategory){
				case MicroChangeConstant.category_structural_orderchanges:
					operation = "OrderingChange";
					break;
				case MicroChangeConstant.category_structural_encapsulate_LeftInRight:
					operation = "Encapsulation";
					break;
				case MicroChangeConstant.category_structural_encapsulate_RightInLeft:
					operation = "Decapsulation";
					break;
				default:
					operation = "Update";
					break;
				}
			str += "Action:" + operation+"\n";
			str += "EntityType:" + microchange.getEntitytype()+"\n";
			str += "Content:" + microchange.getContent()+"\n";
			if( microchange.getContentpattern() != null)
				str += "ContentPattern:" + microchange.getContentpattern() +"\n";
			
			if( microchange.getNestedexprpatterns() != null){
				str += "--RecursiveExpressionPattern-----:\n";
				for(NestedExprPattern nestedExprPattern: microchange.getNestedexprpatterns()){
					String patterstr = nestedExprPattern.getPrintStr();
					str += patterstr+"\n";
				}
			}
			if( microchange.getLeftreflist() != null ){
				str += "--Left References-----:\n";
				for(RefFromExpr ref: microchange.getLeftreflist() ){
					String leftrefstr = ref.getStr();
					str += leftrefstr+"\n";
				}
			}
			if( microchange.getRightreflist() != null ){
				str += "--Right References----:\n";
				for(RefFromExpr ref: microchange.getRightreflist() ){
					String righftrefstr = ref.getStr();
					str += righftrefstr+"\n";
				}
			}
			return str;
		}
		public List<Metadata> generateMetadata(CodeChange codechange){
			if( codechange.getDistillerstmtupdate() == null)
				return null;
			List<Metadata> metadatalist = null;
			if( codechange.getMicrochanges() != null){
				metadatalist = new LinkedList<Metadata>();
				for( MicroChange microchange: codechange.getMicrochanges()){
					Metadata metadata = this.generateMetadata(microchange);
					metadatalist.add(metadata);
				}
			}
			return metadatalist;
		}
		public Metadata generateMetadata( MicroChange microchange ){
			String actiontype = microchange.getActiontype();
			
			String action = actiontype;
			String changecategory = microchange.getChangecategory();
			if(changecategory!= null )
				switch(changecategory){
				case MicroChangeConstant.category_structural_orderchanges:
					action = "OrderingChange";
					break;
				case MicroChangeConstant.category_structural_encapsulate_LeftInRight:
					action = "Encapsulation";
					break;
				case MicroChangeConstant.category_structural_encapsulate_RightInLeft:
					action = "Decapsulation";
					break;
				default:
					action = "Update";
					break;
				}
			String whichpart = microchange.getWhichpart();
			String rootwhichpart = microchange.getRootentity()+"_"+microchange.getRootelementpart();
			
			String context = microchange.getWhichpartcontext();
			String leftentitytype = microchange.getLeftentitytype();
			String rightentitytype = microchange.getRightentitytype();
			String content = microchange.getContent();
			String contentpattern = microchange.getContentpattern();
			if( microchange.getNestedexprpatterns() != null){
				String str = "";
				for(NestedExprPattern nestedExprPattern: microchange.getNestedexprpatterns()){
					String patterstr = nestedExprPattern.getPrintStr();
					str += patterstr+"\n";
				}
				contentpattern = str;
			}
			List<Refentity> leftreflist = null;
			List<Refentity> rightreflist = null;
			Metadata metadata = new Metadata( action,  whichpart,  rootwhichpart,
					 context,  leftentitytype,  rightentitytype,
					 content,  contentpattern);
			if( microchange.getLeftreflist() != null ){
				leftreflist = new LinkedList<Refentity>();
				for(RefFromExpr ref: microchange.getLeftreflist() ){
					Refentity refentity = new Refentity(ref.getCategory(), ref.getName(), ref.getEntitynode().getAstnode().getClass().getSimpleName());
					leftreflist.add(refentity);
				}
				metadata.setLeftreflist(leftreflist);
			}
			if( microchange.getRightreflist() != null ){
				rightreflist = new LinkedList<Refentity>();
				for(RefFromExpr ref: microchange.getRightreflist() ){
					Refentity refentity = new Refentity(ref.getCategory(), ref.getName(), ref.getEntitynode().getAstnode().getClass().getSimpleName());
					rightreflist.add(refentity);
				}
				metadata.setRightreflist(rightreflist);
			}
			return metadata;
		}
	
}
