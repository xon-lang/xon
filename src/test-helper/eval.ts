import { AddSubExpressionTree } from '../trees/expression/add-sub-expression/add-sub-expression.tree';
import { BitNotExpressionTree } from '../trees/expression/bit-not-expression/bit-not-expression.tree';
import { BitShiftExpressionTree } from '../trees/expression/bit-shift-expression/bit-shift-expression.tree';
import { EqualityExpressionTree } from '../trees/expression/equality-expression/equality-expression.tree';
import { ExpressionTree } from '../trees/expression/expression.tree';
import { IntegerLiteralExpressionTree } from '../trees/expression/integer-literal-expression/integer-literal-expression.tree';
import { LogicalNotExpressionTree } from '../trees/expression/logical-not-expression/logical-not-expression.tree';
import { MulDivModExpressionTree } from '../trees/expression/mul-div-mod-expression/mul-div-mod-expression.tree';
import { PowExpressionTree } from '../trees/expression/pow-expression/pow-expression.tree';
import { RelationalExpressionTree } from '../trees/expression/relational-expression/relational-expression.tree';
import { UnaryMinusExpressionTree } from '../trees/expression/unary-minus-expression/unary-minus-expression.tree';
import { UnaryPlusExpressionTree } from '../trees/expression/unary-plus-expression/unary-plus-expression.tree';

export function evalExpression(tree: ExpressionTree) {
    if (tree instanceof IntegerLiteralExpressionTree) return +tree.value;

    if (tree instanceof UnaryPlusExpressionTree)
        return evalExpression(tree.value);

    if (tree instanceof UnaryMinusExpressionTree)
        return -evalExpression(tree.value);

    if (tree instanceof LogicalNotExpressionTree)
        return !evalExpression(tree.value);

    if (tree instanceof BitNotExpressionTree)
        return ~evalExpression(tree.value);


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

    if (tree instanceof BitShiftExpressionTree) {
        if (tree.isLeftShiftArithmetic) return a << b;
        if (tree.isRightShiftArithmetic) return a >> b;
        if (tree.isRightShiftLogical) return a >>> b;
    }

    if (tree instanceof RelationalExpressionTree) {
        if (tree.isLessThan) return a < b;
        if (tree.isLessThanEquals) return a <= b;
        if (tree.isMoreThan) return a > b;
        if (tree.isMoreThanEquals) return a >= b;
    }

    if (tree instanceof EqualityExpressionTree) {
        if (tree.isEquals) return a === b;
        if (tree.isNotEquals) return a !== b;
    }
}
