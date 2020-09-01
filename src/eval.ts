import { AddExpressionTree } from './tree/expression/add-expression/add-expression.tree';
import { BitAndExpressionTree } from './tree/expression/bit-and-expression/bit-and-expression.tree';
import { BitLeftShiftExpressionTree } from './tree/expression/bit-left-shift-expression/bit-left-shift-expression.tree';
import { BitNotExpressionTree } from './tree/expression/bit-not-expression/bit-not-expression.tree';
import { BitOrExpressionTree } from './tree/expression/bit-or-expression/bit-or-expression.tree';
import { BitRightShiftExpressionTree } from './tree/expression/bit-right-shift-expression/bit-right-shift-expression.tree';
import { BitXorExpressionTree } from './tree/expression/bit-xor-expression/bit-xor-expression.tree';
import { DivideExpressionTree } from './tree/expression/divide-expression/divide-expression.tree';
import { EqualsExpressionTree } from './tree/expression/equals-expression/equals-expression.tree';
import { ExpressionTree } from './tree/expression/expression.tree';
import { IdExpressionTree } from './tree/expression/id-expression/id-expression.tree';
import { LessThanEqualsExpressionTree } from './tree/expression/less-than-equals-expression/less-than-equals-expression.tree';
import { LessThanExpressionTree } from './tree/expression/less-than-expression/less-than-expression.tree';
import { LiteralExpressionTree } from './tree/expression/literal-expression/literal-expression.tree';
import { LogicalAndExpressionTree } from './tree/expression/logical-and-expression/logical-and-expression.tree';
import { LogicalNotExpressionTree } from './tree/expression/logical-not-expression/logical-not-expression.tree';
import { LogicalOrExpressionTree } from './tree/expression/logical-or-expression/logical-or-expression.tree';
import { ModuloExpressionTree } from './tree/expression/modulo-expression/modulo-expression.tree';
import { MoreThanEqualsExpressionTree } from './tree/expression/more-than-equals-expression/more-than-equals-expression.tree';
import { MoreThanExpressionTree } from './tree/expression/more-than-expression/more-than-expression.tree';
import { MultiplyExpressionTree } from './tree/expression/multiply-expression/multiply-expression.tree';
import { NotEqualsExpressionTree } from './tree/expression/not-equals-expression/not-equals-expression.tree';
import { ParenthesizedExpressionTree } from './tree/expression/parenthesized-expression/parenthesized-expression.tree';
import { PipeExpressionTree } from './tree/expression/pipe-expression/pipe-expression.tree';
import { PowExpressionTree } from './tree/expression/pow-expression/pow-expression.tree';
import { SubstractExpressionTree } from './tree/expression/substract-expression/substract-expression.tree';
import { UnaryMinusExpressionTree } from './tree/expression/unary-minus-expression/unary-minus-expression.tree';
import { UnaryPlusExpressionTree } from './tree/expression/unary-plus-expression/unary-plus-expression.tree';

export function evalExpression(tree: ExpressionTree, params = {}) {
    if (tree instanceof ParenthesizedExpressionTree) return evalExpression(tree.value);
    if (tree instanceof IdExpressionTree) {
        if (tree.name in params) {
            return params[tree.name];
        }

        throw Error('Undefined key: ' + tree.name);
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

    if (tree instanceof BitLeftShiftExpressionTree) return a << b;
    if (tree instanceof BitRightShiftExpressionTree) return a >> b;

    if (tree instanceof LessThanExpressionTree) return a < b;
    if (tree instanceof LessThanEqualsExpressionTree) return a <= b;
    if (tree instanceof MoreThanExpressionTree) return a > b;
    if (tree instanceof MoreThanEqualsExpressionTree) return a >= b;

    if (tree instanceof EqualsExpressionTree) return a === b;
    if (tree instanceof NotEqualsExpressionTree) return a !== b;

    if (tree instanceof BitAndExpressionTree) return a & b;
    if (tree instanceof BitXorExpressionTree) return a ^ b;
    if (tree instanceof BitOrExpressionTree) return a | b;

    if (tree instanceof LogicalAndExpressionTree) return a && b;
    if (tree instanceof LogicalOrExpressionTree) return a || b;

    throw 'Unsupported operation';
}
