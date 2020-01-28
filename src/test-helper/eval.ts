import { ExpressionTree } from '../trees/expression/expression.tree';
import { IntegerLiteralExpressionTree } from '../trees/expression/integer-literal-expression/integer-literal-expression.tree';
import { MulDivModExpressionTree } from '../trees/expression/mul-div-mod-expression/mul-div-mod-expression.tree';
import { AddSubExpressionTree } from '../trees/expression/add-sub-expression/add-sub-expression.tree';
import { UnaryExpressionTree } from '../trees/expression/unary-expression/unary-expression.tree';
import { PowExpressionTree } from '../trees/expression/pow-expression/pow-expression.tree';
import { BitwiseExpressionTree } from '../trees/expression/bitwise-expression/bitwise-expression.tree';

export function evalExpression(tree: ExpressionTree) {
    if (tree instanceof IntegerLiteralExpressionTree) return +tree.value;

    if (tree instanceof UnaryExpressionTree)
        return evalExpression(tree.value) * (tree.isPlus ? 1 : -1);

    if (tree instanceof PowExpressionTree)
        return Math.pow(evalExpression(tree.base), evalExpression(tree.exponent));

    const a = evalExpression(tree['left']);
    const b = evalExpression(tree['right']);
    if (tree instanceof MulDivModExpressionTree) {
        if (tree.isMul) return a * b;
        if (tree.isDiv) return a / b;
        if (tree.isMod) return a % b;
    }

    if (tree instanceof AddSubExpressionTree) return tree.isPlus ? a + b : a - b;

    if (tree instanceof BitwiseExpressionTree) {
        if (tree.isAnd) return a & b;
        if (tree.isOr) return a | b;
        if (tree.isXor) return a ^ b;
        if (tree.isLeftShiftArithmetic) return a << b;
        if (tree.isRightShiftArithmetic) return a >> b;
        if (tree.isRightShiftLogical) return a >>> b;
    }
}
