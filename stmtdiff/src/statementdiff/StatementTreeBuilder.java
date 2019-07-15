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
import java.util.Stack;

import org.eclipse.jdt.core.compiler.InvalidInputException;
import org.eclipse.jdt.internal.compiler.ASTVisitor;
import org.eclipse.jdt.internal.compiler.ast.AND_AND_Expression;
import org.eclipse.jdt.internal.compiler.ast.ASTNode;
import org.eclipse.jdt.internal.compiler.ast.AllocationExpression;
import org.eclipse.jdt.internal.compiler.ast.Argument;
import org.eclipse.jdt.internal.compiler.ast.ArrayAllocationExpression;
import org.eclipse.jdt.internal.compiler.ast.ArrayInitializer;
import org.eclipse.jdt.internal.compiler.ast.ArrayQualifiedTypeReference;
import org.eclipse.jdt.internal.compiler.ast.ArrayReference;
import org.eclipse.jdt.internal.compiler.ast.ArrayTypeReference;
import org.eclipse.jdt.internal.compiler.ast.AssertStatement;
import org.eclipse.jdt.internal.compiler.ast.Assignment;
import org.eclipse.jdt.internal.compiler.ast.BinaryExpression;
import org.eclipse.jdt.internal.compiler.ast.Block;
import org.eclipse.jdt.internal.compiler.ast.BreakStatement;
import org.eclipse.jdt.internal.compiler.ast.CaseStatement;
import org.eclipse.jdt.internal.compiler.ast.CastExpression;
import org.eclipse.jdt.internal.compiler.ast.CharLiteral;
import org.eclipse.jdt.internal.compiler.ast.ClassLiteralAccess;
import org.eclipse.jdt.internal.compiler.ast.CompoundAssignment;
import org.eclipse.jdt.internal.compiler.ast.ConditionalExpression;
import org.eclipse.jdt.internal.compiler.ast.ContinueStatement;
import org.eclipse.jdt.internal.compiler.ast.DoStatement;
import org.eclipse.jdt.internal.compiler.ast.DoubleLiteral;
import org.eclipse.jdt.internal.compiler.ast.EqualExpression;
import org.eclipse.jdt.internal.compiler.ast.ExplicitConstructorCall;
import org.eclipse.jdt.internal.compiler.ast.Expression;
import org.eclipse.jdt.internal.compiler.ast.ExtendedStringLiteral;
import org.eclipse.jdt.internal.compiler.ast.FalseLiteral;
import org.eclipse.jdt.internal.compiler.ast.FieldReference;
import org.eclipse.jdt.internal.compiler.ast.FloatLiteral;
import org.eclipse.jdt.internal.compiler.ast.ForStatement;
import org.eclipse.jdt.internal.compiler.ast.ForeachStatement;
import org.eclipse.jdt.internal.compiler.ast.IfStatement;
import org.eclipse.jdt.internal.compiler.ast.InstanceOfExpression;
import org.eclipse.jdt.internal.compiler.ast.IntLiteral;
import org.eclipse.jdt.internal.compiler.ast.LabeledStatement;
import org.eclipse.jdt.internal.compiler.ast.LocalDeclaration;
import org.eclipse.jdt.internal.compiler.ast.LongLiteral;
import org.eclipse.jdt.internal.compiler.ast.MessageSend;
import org.eclipse.jdt.internal.compiler.ast.NullLiteral;
import org.eclipse.jdt.internal.compiler.ast.OR_OR_Expression;
import org.eclipse.jdt.internal.compiler.ast.ParameterizedQualifiedTypeReference;
import org.eclipse.jdt.internal.compiler.ast.ParameterizedSingleTypeReference;
import org.eclipse.jdt.internal.compiler.ast.PostfixExpression;
import org.eclipse.jdt.internal.compiler.ast.PrefixExpression;
import org.eclipse.jdt.internal.compiler.ast.QualifiedAllocationExpression;
import org.eclipse.jdt.internal.compiler.ast.QualifiedNameReference;
import org.eclipse.jdt.internal.compiler.ast.QualifiedSuperReference;
import org.eclipse.jdt.internal.compiler.ast.QualifiedThisReference;
import org.eclipse.jdt.internal.compiler.ast.QualifiedTypeReference;
import org.eclipse.jdt.internal.compiler.ast.ReturnStatement;
import org.eclipse.jdt.internal.compiler.ast.SingleNameReference;
import org.eclipse.jdt.internal.compiler.ast.SingleTypeReference;
import org.eclipse.jdt.internal.compiler.ast.Statement;
import org.eclipse.jdt.internal.compiler.ast.StringLiteral;
import org.eclipse.jdt.internal.compiler.ast.StringLiteralConcatenation;
import org.eclipse.jdt.internal.compiler.ast.SuperReference;
import org.eclipse.jdt.internal.compiler.ast.SwitchStatement;
import org.eclipse.jdt.internal.compiler.ast.SynchronizedStatement;
import org.eclipse.jdt.internal.compiler.ast.ThisReference;
import org.eclipse.jdt.internal.compiler.ast.ThrowStatement;
import org.eclipse.jdt.internal.compiler.ast.TrueLiteral;
import org.eclipse.jdt.internal.compiler.ast.TryStatement;
import org.eclipse.jdt.internal.compiler.ast.TypeParameter;
import org.eclipse.jdt.internal.compiler.ast.TypeReference;
import org.eclipse.jdt.internal.compiler.ast.UnaryExpression;
import org.eclipse.jdt.internal.compiler.ast.UnionTypeReference;
import org.eclipse.jdt.internal.compiler.ast.WhileStatement;
import org.eclipse.jdt.internal.compiler.ast.Wildcard;
import org.eclipse.jdt.internal.compiler.lookup.BlockScope;
import org.eclipse.jdt.internal.compiler.parser.Scanner;
import org.eclipse.jdt.internal.compiler.parser.TerminalTokens;

import statementdiff.differencing.model.StmtASTNode;

public class StatementTreeBuilder extends ASTVisitor {

    private Stack<StmtASTNode> fNodeStack= new Stack<StmtASTNode>();;
    private Stack<String> whichpartstack = new Stack<String>();
   
    private StmtASTNode root = null;
    private Scanner fScanner;
    public StmtASTNode getRoot() {
		return root;
	}


	public void initialize(Scanner fScanner) {
		this.fScanner = fScanner;
		
        fNodeStack.clear();
        whichpartstack.clear();
        whichpartstack.push("body");
    }
    
    @Override
    public boolean visit(
    		AllocationExpression allocationExpression,
    		BlockScope scope) {
    	push(allocationExpression, this.whichpartstack.peek());
    	
    	if (allocationExpression.type != null) { // type null for enum constant initializations
    		this.whichpartstack.push("type");
    		allocationExpression.type.traverse(this, scope);
            this.whichpartstack.pop();
    	}
    	if (allocationExpression.typeArguments != null) {
    		for (TypeReference typearg:allocationExpression.typeArguments) {
    			this.whichpartstack.push("typearg");
        		typearg.traverse(this, scope);
                this.whichpartstack.pop();
    		}
    	}
    	if (allocationExpression.arguments != null) {
    		for (Expression arg:allocationExpression.arguments) {
    			this.whichpartstack.push("arg");
        		arg.traverse(this, scope);
                this.whichpartstack.pop();
    		}
    	}
    	pop();
        return false;
	}
    @Override
	public boolean visit(AND_AND_Expression and_and_Expression, BlockScope scope) {
    	push(and_and_Expression, this.whichpartstack.peek());
    	
    	this.whichpartstack.push("left");
    	and_and_Expression.left.traverse(this, scope);
        this.whichpartstack.pop();
        
        push(and_and_Expression, "op", and_and_Expression.operatorToString());
    	pop();
        
        this.whichpartstack.push("right");
    	and_and_Expression.right.traverse(this, scope);
        this.whichpartstack.pop();
        
        
    	pop();
        return false;
	}
    @Override
    public boolean visit(Argument argument, BlockScope scope) {
    	push(argument, this.whichpartstack.peek());
    	
    	if( argument.modifiers >0 ){
    		fScanner.resetTo(argument.declarationSourceStart, argument.sourceStart());
    		List<String> modifiers = visitModifiers(argument.modifiers);
    		if( modifiers != null)
    			for( String modifier: modifiers){
    				push(argument, "modifier", modifier);
    		    	pop();
    			}
    	}
	//	if (this.annotations != null) printAnnotations(this.annotations, output);

		if (argument.type != null) {
			 this.whichpartstack.push("type");
			 argument.type.traverse(this, scope);
		     this.whichpartstack.pop();
		} 
		
		push(argument, "name", argument.name);
    	pop();
    	
    	pop();
        return false;
	}
 //  taken from changedistiller
    private List<String>  visitModifiers(int modifierMask) {
        if (modifierMask != 0) {
            fScanner.tokenizeWhiteSpace = false;
            List<String> modifiers = new LinkedList<String>();
            try {
                int token;
                while ((token = fScanner.getNextToken()) != TerminalTokens.TokenNameEOF) {
                    switch (token) {
                    	case TerminalTokens.TokenNameabstract:
                        case TerminalTokens.TokenNamepublic:
                        case TerminalTokens.TokenNameprotected:
                        case TerminalTokens.TokenNameprivate:
                        case TerminalTokens.TokenNamefinal:
                        case TerminalTokens.TokenNamestatic:
                        case TerminalTokens.TokenNamevolatile:
                        case TerminalTokens.TokenNamestrictfp:
                        case TerminalTokens.TokenNamenative:
                        case TerminalTokens.TokenNamesynchronized:
                        case TerminalTokens.TokenNametransient:
                        	modifiers.add(fScanner.getCurrentTokenString());
                                    //JavaEntityType.MODIFIER,
                          //          fScanner.getCurrentTokenString(),
                           //         fScanner.getCurrentTokenStartPosition(),
                           //         fScanner.getCurrentTokenEndPosition(), null);
                            break;
                        default:
                            break;
                    }
                }
                // CHECKSTYLE:OFF
            } catch (InvalidInputException e) {
                // CHECKSTYLE:ON
                // ignore
            }
            return modifiers;
        }
       return null;
    }
    
    
    
    
    
    
    
    
    @Override
    public boolean visit(
    		ArrayAllocationExpression arrayAllocationExpression,
    		BlockScope scope) {
    	push(arrayAllocationExpression, this.whichpartstack.peek());
    	
    	//output.append("new "); //$NON-NLS-1$
    	this.whichpartstack.push("type");
    	arrayAllocationExpression.type.traverse(this, scope);
	    this.whichpartstack.pop();
	    
	    if(arrayAllocationExpression.dimensions != null) {
	    	for(Expression dim: arrayAllocationExpression.dimensions){
	    		if( dim == null){
	    			push(arrayAllocationExpression, "arraycount", "[]");
	            	pop();
	    		}else{
	    			this.whichpartstack.push("dimension");
	    	    	dim.traverse(this, scope);
	    		    this.whichpartstack.pop();
	    		}
	    	}
	    }
		
		if (arrayAllocationExpression.initializer != null) {
			whichpartstack.push("initializer");
			arrayAllocationExpression.initializer.traverse(this, scope);
            whichpartstack.pop();
		}
		
		pop();
        return false;
    	}
    @Override
    public boolean visit(ArrayInitializer arrayInitializer, BlockScope scope) {
    	push(arrayInitializer, this.whichpartstack.peek());
    	
    	if(arrayInitializer.expressions != null) {
	    	for(Expression expr: arrayInitializer.expressions){
	    		this.whichpartstack.push("values");
	    		expr.traverse(this, scope);
	    		this.whichpartstack.pop();
	    		
	    	}
	    }
		
		pop();
        return false;
    	
    }
   @Override
    public boolean visit(
    		ArrayQualifiedTypeReference arrayQualifiedTypeReference,
    		BlockScope scope) {
    	
		push(arrayQualifiedTypeReference, this.whichpartstack.peek());
    /*	if( arrayQualifiedTypeReference.tokens.length>1){
    		for (int i = 0; i < arrayQualifiedTypeReference.tokens.length-1; i++) {
    			push(arrayQualifiedTypeReference, "qualifier", arrayQualifiedTypeReference.tokens[i]);
    	     	pop();
    		}
    	}*/
		int length = arrayQualifiedTypeReference.tokens.length;
		if( length > 0){
			String qualifier = "";
			for (int i = 0; i < length -1 ; i++) {
				if( qualifier.length()>0)
					qualifier += '.';
				qualifier += String.valueOf(arrayQualifiedTypeReference.tokens[i]);
			}
			push(arrayQualifiedTypeReference, "qualifier", qualifier);
			pop();
     	}
		
    	push(arrayQualifiedTypeReference, "name", arrayQualifiedTypeReference.tokens[arrayQualifiedTypeReference.tokens.length-1]);
     	pop();
     	
     	/*if(arrayQualifiedTypeReference.isVarargs() ){
			for (int i= 0 ; i < arrayQualifiedTypeReference.dimensions() - 1; i++) {
				push(arrayQualifiedTypeReference, "dimension", "[]");
		    	pop();
			}
			push(arrayQualifiedTypeReference, "isvarargs", "...");
	    	pop();
		}else{*/
			for (int i= 0 ; i < arrayQualifiedTypeReference.dimensions() ; i++) {
				push(arrayQualifiedTypeReference, "dimension", "[]");
		    	pop();
			}
		//}
     	
     	
     	
    	pop();
        return false;
    }
   
   
     @Override
    public boolean visit(ArrayReference arrayReference, BlockScope scope) {
    	push(arrayReference, this.whichpartstack.peek());
    	
    	whichpartstack.push("name");
    	arrayReference.receiver.traverse(this, scope);
        whichpartstack.pop();
        
        whichpartstack.push("index");
    	arrayReference.position.traverse(this, scope);
        whichpartstack.pop();
        
		pop();
        return false;
    	}
   @Override
    public boolean visit(ArrayTypeReference arrayTypeReference, BlockScope scope) {
    	
		push(arrayTypeReference, this.whichpartstack.peek());
		
		push(arrayTypeReference, "name", arrayTypeReference.token);
    	pop();
    	
	/*	if(arrayTypeReference.isVarargs() ){
			for (int i= 0 ; i < arrayTypeReference.dimensions - 1; i++) {
				push(arrayTypeReference, "dimension", "[]");
		    	pop();
			}
			push(arrayTypeReference, "isvarargs", "...");
	    	pop();
		}else{*/
			for (int i= 0 ; i < arrayTypeReference.dimensions ; i++) {
				push(arrayTypeReference, "dimension", "[]");
		    	pop();
			}
	//	}
    	
		pop();
        return false;
		
    	}
    @Override
    public boolean visit(Assignment assignment, BlockScope scope) {
    	push(assignment, this.whichpartstack.peek());
    	
    	this.whichpartstack.push("target");
    	assignment.lhs.traverse(this, scope);
		this.whichpartstack.pop();
    	
    	push(assignment, "op", "=");
    	pop();
        
    	this.whichpartstack.push("value");
    	assignment.expression.traverse(this, scope);
		this.whichpartstack.pop();
		
		pop();
        return false;
    }
    @Override
    public boolean visit(BinaryExpression binaryExpression, BlockScope scope) {
    	push(binaryExpression, this.whichpartstack.peek());
    	
    	this.whichpartstack.push("left");
    	binaryExpression.left.traverse(this, scope);
		this.whichpartstack.pop();
    	
    	push(binaryExpression, "op", binaryExpression.operatorToString());
    	pop();
        
    	this.whichpartstack.push("right");
    	binaryExpression.right.traverse(this, scope);
		this.whichpartstack.pop();
		
		pop();
        return false;
	}
    @Override
    public boolean visit(CastExpression castExpression, BlockScope scope) {
    	push(castExpression, this.whichpartstack.peek());
    	
    	this.whichpartstack.push("type");
    	castExpression.type.traverse(this, scope);
		this.whichpartstack.pop();
    	
    	this.whichpartstack.push("expr");
    	castExpression.expression.traverse(this, scope);
		this.whichpartstack.pop();
		
		pop();
        return false;
	}
    @Override
    public boolean visit(CharLiteral charLiteral, BlockScope scope) {
    	push(charLiteral, this.whichpartstack.peek());
    	
		pop();
        return false;
	}
	public boolean visit(ClassLiteralAccess classLiteral, BlockScope scope) {
		push(classLiteral, this.whichpartstack.peek());
    	
    	this.whichpartstack.push("type");
    	classLiteral.type.traverse(this, scope);
		this.whichpartstack.pop();
    	
		pop();
        return false;
	}
	/*public boolean visit(Clinit clinit, ClassScope scope) {
		return true; // do nothing by default, keep traversing
	}
	public boolean visit(
		CompilationUnitDeclaration compilationUnitDeclaration,
		CompilationUnitScope scope) {
		return true; // do nothing by default, keep traversing
	}*/
    @Override
    public boolean visit(CompoundAssignment assignment, BlockScope scope) {
    	push(assignment, this.whichpartstack.peek());
    	
    	this.whichpartstack.push("target");
    	assignment.lhs.traverse(this, scope);
		this.whichpartstack.pop();
		
    	push(assignment, "op", assignment.operatorToString());
    	pop();
        
    	this.whichpartstack.push("value");
    	assignment.expression.traverse(this, scope);
		this.whichpartstack.pop();
		
		pop();
        return false;
    }
    @Override
    public boolean visit(
    		ConditionalExpression conditionalExpression,
    		BlockScope scope) {
    	push(conditionalExpression, this.whichpartstack.peek());
    	
    	this.whichpartstack.push("condition");
    	conditionalExpression.condition.traverse(this, scope);
		this.whichpartstack.pop();
		
		this.whichpartstack.push("thenexpr");
    	conditionalExpression.valueIfTrue.traverse(this, scope);
		this.whichpartstack.pop();
		
		this.whichpartstack.push("elseexpr");
    	conditionalExpression.valueIfFalse.traverse(this, scope);
		this.whichpartstack.pop();
		
    	
		pop();
        return false;
	}
   /* @Override
    public boolean visit(
		ConstructorDeclaration constructorDeclaration,
		ClassScope scope) {
		return true; // do nothing by default, keep traversing
	}
    */
    @Override
    public boolean visit(DoubleLiteral doubleLiteral, BlockScope scope) {
    	push(doubleLiteral, this.whichpartstack.peek());
    	
		pop();
        return false;
	}
   /* @Override
    public boolean visit(EmptyStatement emptyStatement, BlockScope scope) {
		return true; // do nothing by default, keep traversing
	}*/
    @Override
    public boolean visit(EqualExpression equalExpression, BlockScope scope) {
    	push(equalExpression, this.whichpartstack.peek());
    	
    	this.whichpartstack.push("left");
    	equalExpression.left.traverse(this, scope);
		this.whichpartstack.pop();
		
		String equalstr = equalExpression.toString();
		String left = equalExpression.left.toString();
		int i = equalstr.indexOf(left) + left.length();
		String oprightstr = equalstr.substring(i);
		String right = equalExpression.right.toString();
		int j = oprightstr.indexOf(right);
		String opstr = oprightstr.substring(0, j).trim();
		push(equalExpression, "op", opstr);
    	pop();
		
		this.whichpartstack.push("right");
		equalExpression.right.traverse(this, scope);
		this.whichpartstack.pop();
		
		pop();
        return false;
	}
    @Override
    public boolean visit(
    		ExtendedStringLiteral extendedStringLiteral,
    		BlockScope scope) {
    	push(extendedStringLiteral, this.whichpartstack.peek());
    	
		pop();
        return false;
    	}
    @Override
    public boolean visit(FalseLiteral falseLiteral, BlockScope scope) {
    		
    	push(falseLiteral, this.whichpartstack.peek());
    	
		pop();
        return false;
    	}
  /*  @Override
    public boolean visit(FieldDeclaration fieldDeclaration, MethodScope scope) {
    		return true; // do nothing by default, keep traversing
    	}
     @Override
    public boolean visit(FieldReference fieldReference, ClassScope scope) {
    		return true; // do nothing by default, keep traversing
    	}*/
    @Override
    public boolean visit(FieldReference fieldReference, BlockScope scope) {
    	push(fieldReference, this.whichpartstack.peek());
    	
    	this.whichpartstack.push("scope");
    	fieldReference.receiver.traverse(this, scope);
		this.whichpartstack.pop();
		
		push(fieldReference, "name", fieldReference.token);
    	pop();
		
		pop();
        return false;
    	}
   
    @Override
    public boolean visit(FloatLiteral floatLiteral, BlockScope scope) {
    	push(floatLiteral, this.whichpartstack.peek());
    	
		pop();
        return false;
    	}
   /* @Override
     public boolean visit(ImportReference importRef, CompilationUnitScope scope) {
		return true; // do nothing by default, keep traversing
	}
    @Override
    public boolean visit(Initializer initializer, MethodScope scope) {
		return true; // do nothing by default, keep traversing
	}*/
    @Override
    public boolean visit(
    		InstanceOfExpression instanceOfExpression,
    		BlockScope scope) {
    	push(instanceOfExpression, this.whichpartstack.peek());
    	
    	this.whichpartstack.push("expr");
    	instanceOfExpression.expression.traverse(this, scope);
		this.whichpartstack.pop();
		
		this.whichpartstack.push("type");
		instanceOfExpression.type.traverse(this, scope);
		this.whichpartstack.pop();
		
		pop();
        return false;
	}
    @Override
    public boolean visit(IntLiteral intLiteral, BlockScope scope) {
    	push(intLiteral, this.whichpartstack.peek());
    	
		pop();
        return false;
	}
    @Override
    public boolean visit(LongLiteral longLiteral, BlockScope scope) {
    	push(longLiteral, this.whichpartstack.peek());
    	
		pop();
        return false;
	}
	@Override
    public boolean visit(
			StringLiteralConcatenation literal,
			BlockScope scope) {
		push(literal, this.whichpartstack.peek());
    	
		pop();
        return false;
	}
	@Override
    public boolean visit(NullLiteral nullLiteral, BlockScope scope) {
		push(nullLiteral, this.whichpartstack.peek());
    	
		pop();
        return false;
	}
	@Override
    public boolean visit(OR_OR_Expression or_or_Expression, BlockScope scope) {
		push(or_or_Expression, this.whichpartstack.peek());
    	
    	this.whichpartstack.push("left");
    	or_or_Expression.left.traverse(this, scope);
        this.whichpartstack.pop();
        
        push(or_or_Expression, "op", or_or_Expression.operatorToString());
    	pop();
        
        this.whichpartstack.push("right");
        or_or_Expression.right.traverse(this, scope);
        this.whichpartstack.pop();
        
        pop();
        return false;
	}
	@Override
    public boolean visit(ParameterizedQualifiedTypeReference parameterizedQualifiedTypeReference, BlockScope scope) {
		push(parameterizedQualifiedTypeReference, this.whichpartstack.peek());
    	
		String qualifier = "";
		int length = parameterizedQualifiedTypeReference.tokens.length;
		for (int i = 0; i < length - 1; i++) {
			qualifier += String.valueOf(parameterizedQualifiedTypeReference.tokens[i]);
				TypeReference[] typeArgument = parameterizedQualifiedTypeReference.typeArguments[i];
				if (typeArgument != null) {
					qualifier +=typeArgument.toString();
				}
				qualifier += '.';
		}
		if( qualifier.length()>0){
			push(parameterizedQualifiedTypeReference, "qualifier", qualifier );
			pop();
		}
		push(parameterizedQualifiedTypeReference, "name", parameterizedQualifiedTypeReference.tokens[length - 1] );
		pop();
		if(length>=1){
		TypeReference[] typeArgument = parameterizedQualifiedTypeReference.typeArguments[length - 1];
			if (typeArgument != null) {
				for( TypeReference typearg: typeArgument){
	    			this.whichpartstack.push("typearg");
	        		typearg.traverse(this, scope);
	                this.whichpartstack.pop();
	    		}
			}
		}
			if(parameterizedQualifiedTypeReference.dimensions() > 0 ){
	    		for (int i= 0 ; i < parameterizedQualifiedTypeReference.dimensions() - 1; i++) {
	    			push(parameterizedQualifiedTypeReference, "dimension", "[]");
	            	pop();
	    		}
	    	/*	if( parameterizedQualifiedTypeReference.isVarargs()){
	    			push(parameterizedQualifiedTypeReference, "isvarargs", "...");
	            	pop();
	    		}else{*/
	    			push(parameterizedQualifiedTypeReference, "dimension", "[]");
	            	pop();
	    	//	}
	    	}

		
		
		
		
		
		
    	pop();
        return false;
	}
//	@Override
///    public boolean visit(ParameterizedQualifiedTypeReference parameterizedQualifiedTypeReference, ClassScope scope) {
//		return true; // do nothing by default, keep traversing
//	}
	@Override
    public boolean visit(ParameterizedSingleTypeReference parameterizedSingleTypeReference, BlockScope scope) {
		push(parameterizedSingleTypeReference, this.whichpartstack.peek());
    	
		push(parameterizedSingleTypeReference, "name", parameterizedSingleTypeReference.token );
    	pop();
		
    	if(parameterizedSingleTypeReference.typeArguments != null ){
    		for( TypeReference typearg: parameterizedSingleTypeReference.typeArguments){
    			this.whichpartstack.push("typearg");
        		typearg.traverse(this, scope);
                this.whichpartstack.pop();
    		}
    	}
    	if(parameterizedSingleTypeReference.dimensions > 0 ){
    		for (int i= 0 ; i < parameterizedSingleTypeReference.dimensions - 1; i++) {
    			push(parameterizedSingleTypeReference, "dimension", "[]");
            	pop();
    		}
    	/*	if( parameterizedSingleTypeReference.isVarargs()){
    			push(parameterizedSingleTypeReference, "isvarargs", "...");
            	pop();
    		}else{*/
    			push(parameterizedSingleTypeReference, "dimension", "[]");
            	pop();
    		//}
    	}
    	
    	
    	pop();
        return false;
        
	}
//	@Override
 //   public boolean visit(ParameterizedSingleTypeReference parameterizedSingleTypeReference, ClassScope scope) {
//		return true; // do nothing by default, keep traversing
//	}
	
    @Override
    public boolean visit(PostfixExpression postfixExpression, BlockScope scope) {
    	push(postfixExpression, this.whichpartstack.peek());
    	
    	this.whichpartstack.push("expr");
    	postfixExpression.lhs.traverse(this, scope);
        this.whichpartstack.pop();
        
        push(postfixExpression, "op", postfixExpression.operatorToString());
    	pop();
        
    	pop();
        return false;
    }

    @Override
    public boolean visit(PrefixExpression prefixExpression, BlockScope scope) {
    	push(prefixExpression, this.whichpartstack.peek());
    	
    	push(prefixExpression, "op", prefixExpression.operatorToString());
    	pop();
        
    	this.whichpartstack.push("expr");
    	prefixExpression.lhs.traverse(this, scope);
        this.whichpartstack.pop();
        
        pop();
        return false;
    }

    @Override
    public boolean visit(QualifiedAllocationExpression qualifiedAllocationExpression, BlockScope scope) {
    	
		push(qualifiedAllocationExpression, this.whichpartstack.peek());
    /*	if (qualifiedAllocationExpression.enclosingInstance != null){
    		this.whichpartstack.push("qualifier");
    		qualifiedAllocationExpression.enclosingInstance.traverse(this, scope);
    		this.whichpartstack.pop();
    	}*/
		if( qualifiedAllocationExpression.enclosingInstance != null){
			String qualifier = qualifiedAllocationExpression.enclosingInstance.toString();
			push(qualifiedAllocationExpression, "qualifier", qualifier);
			pop();
		}
    	if (qualifiedAllocationExpression.type != null) { // type null for enum constant initializations
    		this.whichpartstack.push("type");
    		qualifiedAllocationExpression.type.traverse(this, scope);
            this.whichpartstack.pop();
    	}
    	if (qualifiedAllocationExpression.typeArguments != null) {
    		for (TypeReference typearg:qualifiedAllocationExpression.typeArguments) {
    			this.whichpartstack.push("typearg");
        		typearg.traverse(this, scope);
                this.whichpartstack.pop();
    		}
    	}
    	if (qualifiedAllocationExpression.arguments != null) {
    		for (Expression arg:qualifiedAllocationExpression.arguments) {
    			this.whichpartstack.push("arg");
        		arg.traverse(this, scope);
                this.whichpartstack.pop();
    		}
    	}
    	if (qualifiedAllocationExpression.anonymousType != null) {
    		/*this.whichpartstack.push("type");
    		qualifiedAllocationExpression.anonymousType.traverse(this, scope);
    		this.whichpartstack.pop();*/
    		push(qualifiedAllocationExpression.anonymousType, "anonymoustype");
    	    pop();
		}
    	
    	pop();
        return false;
    }

    
    @Override
    public boolean visit(
			QualifiedNameReference qualifiedNameReference,
			BlockScope scope) {
    	push(qualifiedNameReference, this.whichpartstack.peek());
    /*	if( qualifiedNameReference.tokens.length>1){
    		for (int i = 0; i < qualifiedNameReference.tokens.length-1; i++) {
    			push(qualifiedNameReference, "qualifier", qualifiedNameReference.tokens[i]);
    	     	pop();
    		}
    	}*/
    	int length = qualifiedNameReference.tokens.length;
		if( length > 0){
			String qualifier = "";
			for (int i = 0; i < length -1 ; i++) {
				if( qualifier.length()>0)
					qualifier += '.';
				qualifier += String.valueOf(qualifiedNameReference.tokens[i]);
			}
			push(qualifiedNameReference, "qualifier", qualifier);
			pop();
     	}
		
    	push(qualifiedNameReference, "name", qualifiedNameReference.tokens[qualifiedNameReference.tokens.length-1]);
     	pop();
     	
    	pop();
        return false;
	}
	/*@Override
    public boolean visit(
			QualifiedNameReference qualifiedNameReference,
			ClassScope scope) {
		return true; // do nothing by default, keep traversing
	}*/
	@Override
    public boolean visit(
    		QualifiedSuperReference qualifiedSuperReference,
    		BlockScope scope) {
		
		push(qualifiedSuperReference, this.whichpartstack.peek());
    
	/*	if( qualifiedSuperReference.qualification != null){
    		this.whichpartstack.push("qualifier");
    		qualifiedSuperReference.qualification.traverse(this, scope);
    		this.whichpartstack.pop();
    	}*/
		if( qualifiedSuperReference.qualification != null){
			String qualifier = qualifiedSuperReference.qualification.toString();
			push(qualifiedSuperReference, "qualifier", qualifier);
			pop();
		}
		
    	push(qualifiedSuperReference, "name", "super");
     	pop();
     	
    	pop();
        return false;
	}
	/*@Override
    public boolean visit(
    		QualifiedSuperReference qualifiedSuperReference,
    		ClassScope scope) {
		return true; // do nothing by default, keep traversing
	}
	@Override
    public boolean visit(
			QualifiedThisReference qualifiedThisReference,
			ClassScope scope) {
		return true; // do nothing by default, keep traversing
	}*/
	
	@Override
    public boolean visit(
			QualifiedThisReference qualifiedThisReference,
			BlockScope scope) {
		push(qualifiedThisReference, this.whichpartstack.peek());
    /*	if( qualifiedThisReference.qualification != null){
    		this.whichpartstack.push("qualifier");
    		qualifiedThisReference.qualification.traverse(this, scope);
    		this.whichpartstack.pop();
    	}*/
		if( qualifiedThisReference.qualification != null){
			String qualifier = qualifiedThisReference.qualification.toString();
			push(qualifiedThisReference, "qualifier", qualifier);
			pop();
		}
		
    	push(qualifiedThisReference, "name", "this");
     	pop();
     	
    	pop();
        return false;
	}
	
	@Override
    public boolean visit(
    		QualifiedTypeReference qualifiedTypeReference,
    		BlockScope scope) {
		push(qualifiedTypeReference, this.whichpartstack.peek());
		/*
    	if( qualifiedTypeReference.tokens.length>1){
    		for (int i = 0; i < qualifiedTypeReference.tokens.length-1; i++) {
    			push(qualifiedTypeReference, "qualifier", qualifiedTypeReference.tokens[i]);
    	     	pop();
    		}
    	}*/
		int length = qualifiedTypeReference.tokens.length;
		if( length > 0){
			String qualifier = "";
			for (int i = 0; i < length -1 ; i++) {
				if( qualifier.length()>0)
					qualifier += '.';
				qualifier += String.valueOf(qualifiedTypeReference.tokens[i]);
			}
			push(qualifiedTypeReference, "qualifier", qualifier);
			pop();
     	}
    	push(qualifiedTypeReference, "name", qualifiedTypeReference.tokens[qualifiedTypeReference.tokens.length-1]);
     	pop();
     	
    	pop();
        return false;
	}
	
	
	@Override
    public boolean visit(
		SingleNameReference singleNameReference,
		BlockScope scope) {
		push(singleNameReference, this.whichpartstack.peek());
    	
		pop();
        return false;
	}
	
	@Override
    public boolean visit(
    		SingleTypeReference singleTypeReference,
    		BlockScope scope) {
		push(singleTypeReference, this.whichpartstack.peek());
    	
		
		
    	pop();
        return false;
	}
	
	@Override
    public boolean visit(StringLiteral stringLiteral, BlockScope scope) {
		push(stringLiteral, this.whichpartstack.peek());
    	
		pop();
        return false;
	}
	@Override
    public boolean visit(SuperReference superReference, BlockScope scope) {
		push(superReference, this.whichpartstack.peek());
    	
		pop();
        return false;
	}
	@Override
    public boolean visit(ThisReference thisReference, BlockScope scope) {
		push(thisReference, this.whichpartstack.peek());
    	
		pop();
        return false;
	}
	 
	@Override
    public boolean visit(TrueLiteral trueLiteral, BlockScope scope) {
		push(trueLiteral, this.whichpartstack.peek());
    	
		pop();
        return false;
	}
	@Override
    public boolean visit(TypeParameter typeParameter, BlockScope scope) {
		push(typeParameter, this.whichpartstack.peek());
		
		push(typeParameter, "name", typeParameter.name);
     	pop();
     	
     	if( typeParameter.type != null){
     		this.whichpartstack.push("type");
     		typeParameter.type.traverse(this, scope);
    		this.whichpartstack.pop();
     	}
     	if(typeParameter.bounds != null){
     		for( TypeReference bound: typeParameter.bounds){
     			this.whichpartstack.push("typebound");
     			bound.traverse(this, scope);
        		this.whichpartstack.pop();
     		}
     	}
		pop();
        return false;
		
	}
	
	@Override
    public boolean visit(UnaryExpression unaryExpression, BlockScope scope) {
		push(unaryExpression, this.whichpartstack.peek());
		
		push(unaryExpression, "op", unaryExpression.operatorToString());
     	pop();
     	
     	this.whichpartstack.push("expr");
     	unaryExpression.expression.traverse(this, scope);
    	this.whichpartstack.pop();
     	
		pop();
        return false;
	}
	@Override
    public boolean visit(
			UnionTypeReference unionTypeReference,
			BlockScope scope) {
		push(unionTypeReference, this.whichpartstack.peek());
		
		pop();
        return false;
	}
	
	@Override
    public boolean visit(Wildcard wildcard, BlockScope scope) {
		push(wildcard, this.whichpartstack.peek());
		
		pop();
        return false;
	}
	
	
	
    @Override
    public boolean visit(AssertStatement assertStatement, BlockScope scope) {
    	push(assertStatement, this.whichpartstack.peek());
    	this.whichpartstack.push("check");
    	assertStatement.assertExpression.traverse(this, scope);
        this.whichpartstack.pop();
   	
        this.whichpartstack.push("msg");
    	assertStatement.exceptionArgument.traverse(this, scope);
        this.whichpartstack.pop();
   
        pop();
        return false;
        
    }

    
    @Override
    public boolean visit(Block block, BlockScope scope) {
    	push(block, this.whichpartstack.peek());
        return true;
     }
    @Override
    public void endVisit(Block block, BlockScope scope) {
    	pop();
    }
    
    @Override
    public boolean visit(BreakStatement breakStatement, BlockScope scope) {
    	push(breakStatement, this.whichpartstack.peek());
        if(breakStatement.label != null){
        	push(breakStatement, "id", breakStatement.label);
        	pop();
    	}
    	
        pop();
        return false;
    }

    @Override
    public boolean visit(ExplicitConstructorCall explicitConstructor, BlockScope scope) {
        push(explicitConstructor, this.whichpartstack.peek());
        
        if(explicitConstructor.qualification != null){
        	this.whichpartstack.push("expr");
        	explicitConstructor.qualification.traverse(this, scope);
            this.whichpartstack.pop();
        }
        if(explicitConstructor.typeArguments != null){
        	for (TypeReference typearg: explicitConstructor.typeArguments) {
        		this.whichpartstack.push("typearg");
        		typearg.traverse(this, scope);
                this.whichpartstack.pop();
			}
        }
        if (explicitConstructor.accessMode == ExplicitConstructorCall.This) {
        	push(explicitConstructor, "isthis", "this");
        	pop();
		} else {
			push(explicitConstructor, "isthis", "super");
        	pop();
		}
		if (explicitConstructor.arguments != null) {
			for (Expression arg: explicitConstructor.arguments) {
				this.whichpartstack.push("arg");
		    	arg.traverse(this, scope);
		        this.whichpartstack.pop();
			}
		}
		 pop();
	     return false;
    }

    @Override
    public boolean visit(ContinueStatement continueStatement, BlockScope scope) {
        push(continueStatement, this.whichpartstack.peek());
        if(continueStatement.label != null){
        	push(continueStatement, "id", continueStatement.label);
        	pop();
    	}
    	
        pop();
        return false;
    }

    @Override
    public boolean visit(DoStatement doStatement, BlockScope scope) {
        push(doStatement, this.whichpartstack.peek());
    	
    	this.whichpartstack.push("condition");
    	doStatement.condition.traverse(this, scope);
        this.whichpartstack.pop();
   	
   //     this.whichpartstack.push("action");
   // 	forStatement.action.traverse(this, scope);
   //     this.whichpartstack.pop();
        pop();
        return false;
    }

   /* @Override
    public boolean visit(EmptyStatement emptyStatement, BlockScope scope) {
        
    }
*/

    @Override
    public boolean visit(ForeachStatement foreachStatement, BlockScope scope) {
    	push(foreachStatement, this.whichpartstack.peek());
    	
    	this.whichpartstack.push("var");
    	foreachStatement.elementVariable.traverse(this, scope);
        this.whichpartstack.pop();
        
        this.whichpartstack.push("iterable");
    	foreachStatement.collection.traverse(this, scope);
        this.whichpartstack.pop();
        
//      this.whichpartstack.push("action");
        // 	forStatement.action.traverse(this, scope);
        //     this.whichpartstack.pop();
        pop();
        return false;
    }

    @Override
    public boolean visit(ForStatement forStatement, BlockScope scope) {
    	push(forStatement, this.whichpartstack.peek());
    	
    	this.whichpartstack.push("condition");
    	forStatement.condition.traverse(this, scope);
        this.whichpartstack.pop();
   	
        // loop init
        if(forStatement.initializations != null && forStatement.initializations.length > 0) {
        	for(Statement initStatement : forStatement.initializations) {
        		this.whichpartstack.push("init");
        		initStatement.traverse(this, scope);
                this.whichpartstack.pop();
        	}
        }
        
        // loop afterthought
        if(forStatement.increments != null && forStatement.increments.length > 0) {
        	for(Statement incrementStatement : forStatement.increments) {
        		this.whichpartstack.push("update");
        		incrementStatement.traverse(this, scope);
                this.whichpartstack.pop();
        	}
        }
        
   //     this.whichpartstack.push("action");
   // 	forStatement.action.traverse(this, scope);
   //     this.whichpartstack.pop();
        pop();
        return false;
    }

   

    @Override
    public boolean visit(IfStatement ifStatement, BlockScope scope) {
    	push(ifStatement, this.whichpartstack.peek());
    	 this.whichpartstack.push("condition");
    	 ifStatement.condition.traverse(this, scope);
         this.whichpartstack.pop();
    	
      /*  if (ifStatement.thenStatement != null) {
        	 this.whichpartstack.push("thenstmt");
        	 ifStatement.thenStatement.traverse(this, scope);
             this.whichpartstack.pop();
            
        }
         if (ifStatement.elseStatement != null) {
        	this.whichpartstack.push("elsestmt");
       	 	ifStatement.elseStatement.traverse(this, scope);
            this.whichpartstack.pop();
        }*/
        pop();
        return false;
    }

    @Override
    public boolean visit(LabeledStatement labeledStatement, BlockScope scope) {
        push(labeledStatement, this.whichpartstack.peek());
        
        push(labeledStatement, "label", labeledStatement.label);
        pop();
        
        this.whichpartstack.push("stmt");
        labeledStatement.statement.traverse(this, scope);
        this.whichpartstack.pop();
        
        pop();
        return false;
    }

    @Override
    public boolean visit(LocalDeclaration localDeclaration, BlockScope scope) {
    	push(localDeclaration, this.whichpartstack.peek());
       
    	if( localDeclaration.modifiers >0 ){
    		fScanner.resetTo(localDeclaration.declarationSourceStart, localDeclaration.sourceStart());
    		List<String> modifiers = visitModifiers(localDeclaration.modifiers);
    		if( modifiers != null)
    			for( String modifier: modifiers){
    				push(localDeclaration, "modifier", modifier);
    		    	pop();
    			}
    	}
        if( localDeclaration.type!= null){
        	 this.whichpartstack.push("type");
        	 localDeclaration.type.traverse(this, scope);
        	 this.whichpartstack.pop();
        }
        
        push(localDeclaration, "name", localDeclaration.name);
        pop();
        
        if (localDeclaration.initialization != null) {
        	this.whichpartstack.push("init");
       	 	localDeclaration.initialization.traverse(this, scope);
       	 	this.whichpartstack.pop();
        }
        pop();
        return false;
    }

    @Override
    public boolean visit(MessageSend messageSend, BlockScope scope) {
    	push(messageSend, this.whichpartstack.peek());
        this.whichpartstack.push("scope");
        messageSend.receiver.traverse(this, scope);
        this.whichpartstack.pop();
        
        if(  messageSend.typeArguments != null){
        	for( TypeReference typeref : messageSend.typeArguments){
        		whichpartstack.push("typearg");
        		typeref.traverse(this, scope);
		        whichpartstack.pop();
        	}
        }
        
        push(messageSend, "name", messageSend.selector);
        pop();
        
        if( messageSend.arguments != null){
        	for( Expression arg: messageSend.arguments){
        		whichpartstack.push("arg");
        		arg.traverse(this, scope);
		        whichpartstack.pop();
        	}
        }
        pop();
        return false;
    }

        @Override
    public boolean visit(ReturnStatement returnStatement, BlockScope scope) {
        push(returnStatement, this.whichpartstack.peek());
        this.whichpartstack.push("expr");
        returnStatement.expression.traverse(this, scope);
        this.whichpartstack.pop();
       
        pop();
        return false;
    }

    @Override
    public boolean visit(CaseStatement caseStatement, BlockScope scope) {
        push(caseStatement, this.whichpartstack.peek());
        if( caseStatement.constantExpression != null){
        	 this.whichpartstack.push("label");
	        caseStatement.constantExpression.traverse(this, scope);
	        this.whichpartstack.pop();
        }
        pop();
        return false;
    }

    @Override
    public boolean visit(SwitchStatement switchStatement, BlockScope scope) {
        push(switchStatement, this.whichpartstack.peek());
        this.whichpartstack.push("selector");
        switchStatement.expression.traverse(this, scope);
        this.whichpartstack.pop();
       
        // visitNodes(switchStatement.statements, scope);
        pop();
        return false;
    }
    
    @Override
    public boolean visit(SynchronizedStatement synchronizedStatement, BlockScope scope) {
    	push(synchronizedStatement, this.whichpartstack.peek());
        this.whichpartstack.push("expr");
        synchronizedStatement.expression.traverse(this, scope);
        this.whichpartstack.pop();
        
        pop();
        return false;
    }

    @Override
    public boolean visit(ThrowStatement throwStatement, BlockScope scope) {
    	  push(throwStatement, this.whichpartstack.peek());
    	  
          this.whichpartstack.push("expr");
          throwStatement.exception.traverse(this, scope);
          this.whichpartstack.pop();
         
          pop();
          return false;
     }


    @Override
    public boolean visit(TryStatement node, BlockScope scope) {
        push(node, this.whichpartstack.peek());
  	  
        this.whichpartstack.push("tryblock");
        node.tryBlock.traverse(this, scope);
        this.whichpartstack.pop();
       
        if ((node.catchBlocks != null) && (node.catchBlocks.length > 0)) {
      /*     Block lastCatchBlock = node.catchBlocks[node.catchBlocks.length - 1];
            push(JavaEntityType.CATCH_CLAUSES, "", node.tryBlock.sourceEnd + 1, lastCatchBlock.sourceEnd, node);//???
            int start = node.tryBlock.sourceEnd();
            for (int i = 0; i < node.catchArguments.length; i++) {
                int catchClauseSourceStart = retrieveStartingCatchPosition(start, node.catchArguments[i].sourceStart);
                push(
                        JavaEntityType.CATCH_CLAUSE,
                        node.catchArguments[i].type.toString(),
                        catchClauseSourceStart,
                        node.catchBlocks[i].sourceEnd, node.catchBlocks[i]);
                node.catchBlocks[i].traverse(this, scope);
                pop(node.catchArguments[i].type);
                start = node.catchBlocks[i].sourceEnd();
            }
            pop(null); */
        }
        
        if (node.finallyBlock != null) {
        	this.whichpartstack.push("finallyblock");
            node.finallyBlock.traverse(this, scope);
            this.whichpartstack.pop();
        }
        
        pop();
        return false;
    }

    
/*
    // logic taken from org.eclipse.jdt.core.dom.ASTConverter
    private int retrieveStartingCatchPosition(int start, int end) {
        fScanner.resetTo(start, end);
        try {
            int token;
            while ((token = fScanner.getNextToken()) != TerminalTokens.TokenNameEOF) {
                switch (token) {
                    case TerminalTokens.TokenNamecatch:// 225
                        return fScanner.startPosition;
                }
            }
            // CHECKSTYLE:OFF
        } catch (InvalidInputException e) {
            // CHECKSTYLE:ON
            // ignore
        }
        return -1;
    }*/

    
    @Override
    public boolean visit(WhileStatement whileStatement, BlockScope scope) {
        push(whileStatement, this.whichpartstack.peek());
        this.whichpartstack.push("condition");
        whileStatement.condition.traverse(this, scope);
        this.whichpartstack.pop();
       // this.whichpartstack.push("body");
       // whileStatement.action.traverse(this, scope);
      //  this.whichpartstack.pop();
        pop();
        return false;
    }

   
    private void push(ASTNode astnode, String whichpart){
    	StmtASTNode n = new StmtASTNode(astnode, whichpart);
    	if(getCurrentParent() != null)
    		getCurrentParent().addAChild(n);
    	else{
    		this.root = n;
    	}
    	fNodeStack.push(n);
    }
    private void push(ASTNode astnode, String whichpart, String value){
    	StmtASTNode n = new StmtASTNode(astnode, whichpart, value);
    	if( lastnode != null ){
    		//String valuestr = astnode.toString();
    	//	valuestr = valuestr.substring(lastnode.astnode.sourceEnd - astnode.sourceStart +1);
    	//	int index = valuestr.indexOf(value);
    		n.setSourcestart(lastnode.getAstnode().sourceEnd +1);
    		n.setSourceend(lastnode.getAstnode().sourceEnd + value.length());
    	}
    	if(getCurrentParent() != null)
    		getCurrentParent().addAChild(n);
    	fNodeStack.push(n);
    }
    private void push(ASTNode astnode, String whichpart, char[] value){
    	String strvalue = String.valueOf(value);
    	push( astnode,  whichpart,  strvalue);
    }
    private void pop() {
    	lastnode = fNodeStack.pop();
      }
    private StmtASTNode getCurrentParent() {
    	if(fNodeStack.isEmpty())
    		return null;
        return fNodeStack.peek();
    }
    StmtASTNode lastnode = null;
    
}
