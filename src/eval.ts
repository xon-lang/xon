/* eslint-disable import/prefer-default-export */
/* eslint-disable no-param-reassign */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { AddExpressionTree } from './tree/expression/add-expression/add-expression.tree';
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function evalExpression(tree: ExpressionTree, argsMap = {}): any {
  if (tree === undefined) return undefined;
  if (tree instanceof ParenthesizedExpressionTree) return evalExpression(tree.value);
  if (tree instanceof IdExpressionTree) {
    if (tree.name in argsMap) {
      return argsMap[tree.name];
    }

    throw Error(`Undefined key: ${tree.name}`);
  }

  if (tree instanceof LiteralExpressionTree) {
    if (tree.literal.value === 'null') return 0;
    return tree.literal.value;
  }

  if (tree instanceof UnaryMinusExpressionTree) return -evalExpression(tree.value, argsMap);

  if (tree instanceof LogicalNotExpressionTree) return !evalExpression(tree.value, argsMap);

  if (tree instanceof PowExpressionTree) {
    return evalExpression(tree.base, argsMap) ** evalExpression(tree.exponent, argsMap);
  }

  if (tree instanceof PipeExpressionTree) {
    const a = evalExpression(tree.left, argsMap);
    if (tree.arg) argsMap[tree.arg] = a;
    return evalExpression(tree.right, argsMap);
  }

  if (!('left' in tree) || !('right' in tree)) return undefined;

  // @ts-ignore
  const a = evalExpression(tree.left, argsMap);
  // @ts-ignore
  const b = evalExpression(tree.right, argsMap);

  // eslint-disable-next-line no-param-reassign
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tree = tree as any;

  if (tree instanceof MultiplyExpressionTree) return a * b;
  if (tree instanceof DivideExpressionTree) return a / b;
  if (tree instanceof ModuloExpressionTree) return a % b;

  if (tree instanceof AddExpressionTree) return a + b;
  if (tree instanceof SubstractExpressionTree) return a - b;

  if (tree instanceof LessThanExpressionTree) return a < b;
  if (tree instanceof LessThanEqualsExpressionTree) return a <= b;
  if (tree instanceof MoreThanExpressionTree) return a > b;
  if (tree instanceof MoreThanEqualsExpressionTree) return a >= b;

  if (tree instanceof EqualsExpressionTree) return a === b;
  if (tree instanceof NotEqualsExpressionTree) return a !== b;

  if (tree instanceof LogicalAndExpressionTree) return a && b;
  if (tree instanceof LogicalOrExpressionTree) return a || b;

  throw new Error('Unsupported operation');
}
