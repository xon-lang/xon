import { ExpressionTree } from '../trees/expression/expression.tree';
import { IntegerLiteralExpressionTree } from '../trees/integer-literal-expression/integer-literal-expression.tree';
import { MultiplicationExpressionTree } from '../trees/multiplication-expression/multiplication-expression.tree';
import { DivideExpressionTree } from '../trees/divide-expression/divide-expression.tree';
import { AddExpressionTree } from '../trees/add-expression/add-expression.tree';
import { SubtractionExpressionTree } from '../trees/subtraction-expression/subtraction-expression.tree';

export function evalExpression(tree: ExpressionTree) {
    if (tree instanceof IntegerLiteralExpressionTree) return +tree.value;
    if (tree instanceof MultiplicationExpressionTree)
        return evalExpression(tree.left) * evalExpression(tree.right);
    if (tree instanceof DivideExpressionTree)
        return evalExpression(tree.left) / evalExpression(tree.right);
    if (tree instanceof AddExpressionTree)
        return evalExpression(tree.left) + evalExpression(tree.right);
    if (tree instanceof SubtractionExpressionTree)
        return evalExpression(tree.left) - evalExpression(tree.right);
}
