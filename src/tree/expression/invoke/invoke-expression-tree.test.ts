import { IdExpressionTree } from '~/tree/expression/id/id-expression-tree';
import { InvokeExpressionTree } from '~/tree/expression/invoke/invoke-expression-tree';
import { LiteralExpressionTree } from '~/tree/expression/literal/literal-expression-tree';
import { MemberExpressionTree } from '~/tree/expression/member/member-expression-tree';
import { IntegerLiteralTree } from '~/tree/literal/integer/integer-literal-tree';
import { StringLiteralTree } from '~/tree/literal/string/string-literal-tree';
import { parseExpression } from '~/util/parse';

test('method call', () => {
  const code = 'f[3, \'str\']';
  const tree = parseExpression(code) as InvokeExpressionTree;

  expect(tree).toBeInstanceOf(InvokeExpressionTree);
  expect(tree.arguments.length).toBe(2);
  expect(tree.arguments[0].value as LiteralExpressionTree.literal).toBeInstanceOf(
    IntegerLiteralTree,
  );
  expect(tree.arguments[0].value as LiteralExpressionTree.literal.value).toBe(3);
  expect(tree.arguments[1].value as LiteralExpressionTree.literal).toBeInstanceOf(
    StringLiteralTree,
  );
  expect(tree.arguments[1].value as LiteralExpressionTree.literal.value).toBe('str');
  expect(tree.instance).toBeInstanceOf(IdExpressionTree);
});

test('method on several lines', () => {
  const code = `f[3,
        'str', 123, 
    415]`;
  const tree = parseExpression(code) as InvokeExpressionTree;

  expect(tree).toBeInstanceOf(InvokeExpressionTree);
  expect(tree.arguments.length).toBe(4);
  const [arg1, arg2] = tree.arguments.map((x) => x.value as LiteralExpressionTree);
  expect(arg1.literal).toBeInstanceOf(IntegerLiteralTree);
  expect(arg2.literal).toBeInstanceOf(StringLiteralTree);
  expect(tree.instance).toBeInstanceOf(IdExpressionTree);
});

test('can call with type parameter', () => {
  const code = 'a.get [1]';
  const tree = parseExpression(code) as InvokeExpressionTree;

  expect(tree).toBeInstanceOf(InvokeExpressionTree);
  expect(tree.arguments.length).toBe(1);
  const [arg] = tree.arguments.map((x) => x.value as LiteralExpressionTree);
  expect(arg.literal).toBeInstanceOf(IntegerLiteralTree);
  expect(tree.instance).toBeInstanceOf(MemberExpressionTree);
});
