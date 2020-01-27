import { ExpressionTree } from '../trees/expression/expression.tree';
import { IntegerLiteralExpressionTree } from '../trees/expression/integer-literal-expression/integer-literal-expression.tree';
import { MulDivExpressionTree } from '../trees/expression/mul-div-expression/mul-div-expression.tree';
import { AddSubExpressionTree } from '../trees/expression/add-sub-expression/add-sub-expression.tree';
import { UnaryExpressionTree } from '../trees/expression/unary-expression/unary-expression.tree';

export function evalExpression(tree: ExpressionTree) {
    if (tree instanceof IntegerLiteralExpressionTree) return +tree.value;
    if (tree instanceof UnaryExpressionTree)
        return evalExpression(tree.value) * (tree.isMinus ? -1 : 1);
    const a = evalExpression(tree['left']);
    const b = evalExpression(tree['right']);
    if (tree instanceof MulDivExpressionTree) return tree.isMul ? a * b : a / b;
    if (tree instanceof AddSubExpressionTree) return tree.isAdd ? a + b : a - b;
}
