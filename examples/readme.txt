== DESCRIPTION:

This is a package of examples of micro changes extracted from jEdit, Eclipse JDT Core, Maven, and Guice.
== Usage:

   Download the folder. 
   Then, you can browse the examples by opening the index.html using a browser, chrome recommended. 
Hints: 
   1) Pattern EncapsulationLR, EncapsulationRL usually occur in elements of expression entities,such as BinaryExpr, MethodCallExpr, FieldAccessExpr, ObjectCreationExpr, ConditionalExpr, etc.
   Pattern MovingAcrossElements usually occurs in MethodCallExpr_arg, BinaryExpr_right, AssignExpr_value,ObjectCreationExpr_arg, etc.
   Pattern OrderingChange usually occur in MethodCallExpr_arg, ObjectCreationExpr_arg ArrayInitializerExpr_values, ConstructorDeclaration_parameter, MethodDeclaration_parameter, etc.
   2) Some change entities containe "->", like "MethodDeclaration->MethodDeclaration", because every part of them has been changed. 
   
