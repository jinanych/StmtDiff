//# actiontype, whichpart, changecategory
var actions = [
['ADDITION', 'MethodCallExpr_arg', NULL],
['ADDITION', 'MethodCallExpr_scope', NULL],
['ADDITION', 'ObjectCreationExpr_arg', NULL],
['CHANGE', 'ArrayAccessExpr_name', 'EncapsulationLR'],
['CHANGE', 'BinaryExpr_left', 'NonCommonTokens'],
['CHANGE', 'BinaryExpr_right', 'NonCommonTokens'],
['CHANGE', 'FieldAccessExpr_scope', 'EncapsulationLR'],
['CHANGE', 'IfStmt_condition', 'ContainingCommonTokens'],
['CHANGE', 'MethodCallExpr_arg', 'EncapsulationLR'],
['CHANGE', 'MethodCallExpr_arg', 'NonCommonTokens'],
['CHANGE', 'MethodCallExpr_arg', 'ContainingCommonTokens'],
['CHANGE', 'MethodCallExpr_name', 'NonCommonTokens'],
['CHANGE', 'MethodCallExpr_scope', 'NonCommonTokens'],
['CHANGE', 'ObjectCreationExpr_arg', 'NonCommonTokens'],
['CHANGE', 'UnaryExpr_expr', 'EncapsulationLR'],
['CHANGE', 'VariableDeclarationExpr_type', 'NonCommonTokens'],
['CHANGE', 'VariableDeclarator_id', 'NonCommonTokens'],
['DELETION', 'MethodCallExpr_arg', NULL],
['DELETION', 'MethodCallExpr_scope', NULL],
['DELETION', 'MethodCallExpr_typearg', NULL],
['DELETION', 'ObjectCreationExpr_arg', NULL]

];