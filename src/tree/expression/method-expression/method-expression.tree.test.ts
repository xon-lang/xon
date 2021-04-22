/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable class-methods-use-this */
import { IntegerLiteralTree } from '../../literal/integer-literal/integer-literal.tree';
import { StringLiteralTree } from '../../literal/string-literal/string-literal.tree';
import { parseExpression } from '../../parse';
import { IdExpressionTree } from '../id-expression/id-expression.tree';
import { LiteralExpressionTree } from '../literal-expression/literal-expression.tree';
import { MemberExpressionTree } from '../member-expression/member-expression.tree';
import { MethodExpressionTree } from './method-expression.tree';

test('function call', () => {
  const code = 'f(count = 3, "str")';
  const tree = parseExpression<MethodExpressionTree>(code);
  expect(tree).toBeInstanceOf(MethodExpressionTree);

  expect(tree.arguments.length).toBe(2);
  expect(tree.arguments[0].name).toBe('count');
  expect((tree.arguments[0].value as LiteralExpressionTree).literal).toBeInstanceOf(
    IntegerLiteralTree,
  );
  expect((tree.arguments[0].value as LiteralExpressionTree).literal.value).toBe(3);
  expect((tree.arguments[1].value as LiteralExpressionTree).literal).toBeInstanceOf(
    StringLiteralTree,
  );
  expect((tree.arguments[1].value as LiteralExpressionTree).literal.value).toBe('str');
  expect(tree.object).toBeInstanceOf(IdExpressionTree);
});

test('function on several lines', () => {
  const code = `f(3,
        "str", 123, 
    415)`;
  const tree = parseExpression<MethodExpressionTree>(code);
  expect(tree).toBeInstanceOf(MethodExpressionTree);

  expect(tree.arguments.length).toBe(4);
  const [arg1, arg2] = tree.arguments.map((x) => x.value as LiteralExpressionTree);
  expect(arg1.literal).toBeInstanceOf(IntegerLiteralTree);
  expect(arg2.literal).toBeInstanceOf(StringLiteralTree);
  expect(tree.object).toBeInstanceOf(IdExpressionTree);
});

class A {
  public get: number;
}

test('can call with generics', () => {
  const code = 'a.get<String > (1)';
  const tree = parseExpression<MethodExpressionTree>(code);
  expect(tree).toBeInstanceOf(MethodExpressionTree);

  expect(tree.arguments.length).toBe(1);
  const [arg] = tree.arguments.map((x) => x.value as LiteralExpressionTree);
  expect(arg.literal).toBeInstanceOf(IntegerLiteralTree);
  expect(tree.object).toBeInstanceOf(MemberExpressionTree);
});
