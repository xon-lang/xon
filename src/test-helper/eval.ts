import { ExpressionContext } from '../grammar/xon-parser';
import { AddExpressionTree } from '../tree/expression/add-expression/add-expression.tree';
import { BitAndExpressionTree } from '../tree/expression/bit-and-expression/bit-and-expression.tree';
import { BitNotExpressionTree } from '../tree/expression/bit-not-expression/bit-not-expression.tree';
import { BitOrExpressionTree } from '../tree/expression/bit-or-expression/bit-or-expression.tree';
import { BitShiftExpressionTree } from '../tree/expression/bit-shift-expression/bit-shift-expression.tree';
import { BitXorExpressionTree } from '../tree/expression/bit-xor-expression/bit-xor-expression.tree';
import { DivideExpressionTree } from '../tree/expression/divide-expression/divide-expression.tree';
import { EqualsExpressionTree } from '../tree/expression/equals-expression/equals-expression.tree';
import { getExpressionTree } from '../tree/expression/expression-helper';
import { ExpressionTree } from '../tree/expression/expression.tree';
import { IdExpressionTree } from '../tree/expression/id-expression/id-expression.tree';
import { LiteralExpressionTree } from '../tree/expression/literal-expression/literal-expression.tree';
import { LogicalAndExpressionTree } from '../tree/expression/logical-and-expression/logical-and-expression.tree';
import { LogicalNotExpressionTree } from '../tree/expression/logical-not-expression/logical-not-expression.tree';
import { LogicalOrExpressionTree } from '../tree/expression/logical-or-expression/logical-or-expression.tree';
import { ModuloExpressionTree } from '../tree/expression/modulo-expression/modulo-expression.tree';
import { MultiplyExpressionTree } from '../tree/expression/multiply-expression/multiply-expression.tree';
import { NotEqualsExpressionTree } from '../tree/expression/not-equals-expression/not-equals-expression.tree';
import { PipeExpressionTree } from '../tree/expression/pipe-expression/pipe-expression.tree';
import { PowExpressionTree } from '../tree/expression/pow-expression/pow-expression.tree';
import { RelationalExpressionTree } from '../tree/expression/relational-expression/relational-expression.tree';
import { SubstractExpressionTree } from '../tree/expression/substract-expression/substract-expression.tree';
import { UnaryMinusExpressionTree } from '../tree/expression/unary-minus-expression/unary-minus-expression.tree';
import { UnaryPlusExpressionTree } from '../tree/expression/unary-plus-expression/unary-plus-expression.tree';

export function evalExpression(tree: ExpressionTree, params = {}) {
    if (tree instanceof IdExpressionTree) {
        if (tree.id in params) {
            return params[tree.id];
        }

        throw Error('Undefined key: ' + tree.id);
    }

    if (tree instanceof LiteralExpressionTree) {
        if (tree.literal.value == 'null') return 0;
        return tree.literal.value;
    }

    if (tree instanceof UnaryPlusExpressionTree) return evalExpression(tree.value, params);

    if (tree instanceof UnaryMinusExpressionTree) return -evalExpression(tree.value, params);

    if (tree instanceof LogicalNotExpressionTree) return !evalExpression(tree.value, params);

    if (tree instanceof BitNotExpressionTree) return ~evalExpression(tree.value, params);

    if (tree instanceof PowExpressionTree)
        return Math.pow(evalExpression(tree.base, params), evalExpression(tree.exponent, params));

    if (tree instanceof PipeExpressionTree) {
        const a = evalExpression(tree['left'], params);
        if (tree.arg) params[tree.arg] = a;
        return evalExpression(tree['right'], params);
    }

    if (!tree['left'] || !tree['right']) return undefined;

    const a = evalExpression(tree['left'], params);
    const b = evalExpression(tree['right'], params);
    
    if (tree instanceof MultiplyExpressionTree) return a * b;
    if (tree instanceof DivideExpressionTree) return a / b;
    if (tree instanceof ModuloExpressionTree) return a % b;

    if (tree instanceof AddExpressionTree) return a + b;
    if (tree instanceof SubstractExpressionTree) return a - b;

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

    if (tree instanceof EqualsExpressionTree) return a === b;
    if (tree instanceof NotEqualsExpressionTree) return a !== b;

    if (tree instanceof BitAndExpressionTree) return a & b;
    if (tree instanceof BitXorExpressionTree) return a ^ b;
    if (tree instanceof BitOrExpressionTree) return a | b;

    if (tree instanceof LogicalAndExpressionTree) return a && b;
    if (tree instanceof LogicalOrExpressionTree) return a || b;

    throw 'Unsupported operation';
}

export function evalExpressionCtx(ctx: ExpressionContext) {
    return evalExpression(getExpressionTree(ctx));
}
