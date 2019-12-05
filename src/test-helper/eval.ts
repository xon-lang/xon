import { ExpressionTree } from '../trees/expression/expression.tree';
import { IntegerLiteralExpressionTree } from '../trees/integer-literal-expression/integer-literal-expression.tree';
import { MulDivExpressionTree } from '../trees/mul-div-expression/mul-div-expression.tree';
import { AddSubExpressionTree } from '../trees/add-sub-expression/add-sub-expression.tree';
import { UnaryExpressionTree } from '../trees/unary-expression/unary-expression.tree';
import { ParenthesizedExpressionTree } from '../trees/parenthesized-expression/parenthesized-expression.tree';

export function evalExpression(tree: ExpressionTree) {
    if (tree instanceof IntegerLiteralExpressionTree) return +tree.value;
    if (tree instanceof UnaryExpressionTree)
        return evalExpression(tree.value) * (tree.isMinus ? -1 : 1);
    const a = evalExpression(tree['left']);
    const b = evalExpression(tree['right']);
    if (tree instanceof MulDivExpressionTree) return tree.isMul ? a * b : a / b;
    if (tree instanceof AddSubExpressionTree) return tree.isAdd ? a + b : a - b;
}
