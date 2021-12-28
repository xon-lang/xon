import { IntegerLiteralTree } from '../../literal/integer/integer-literal-tree';
import { StringLiteralTree } from '../../literal/string/string-literal-tree';
import { parseExpression } from '../../../util/parse';
import { IdExpressionTree } from '../id/id-expression-tree';
import { LiteralExpressionTree } from '../literal/literal-expression-tree';
import { MemberExpressionTree } from '../member/member-expression-tree';
import { InvokeExpressionTree } from './invoke-expression-tree';

test('method call', () => {
  const code = 'f(3, "str")';
  const tree = parseExpression(code) as InvokeExpressionTree;
  expect(tree).toBeInstanceOf(InvokeExpressionTree);

  expect(tree.arguments.length).toBe(2);
  expect((tree.arguments[0] as LiteralExpressionTree).literal).toBeInstanceOf(IntegerLiteralTree);
  expect((tree.arguments[0] as LiteralExpressionTree).literal.value).toBe(3);
  expect((tree.arguments[1] as LiteralExpressionTree).literal).toBeInstanceOf(StringLiteralTree);
  expect((tree.arguments[1] as LiteralExpressionTree).literal.value).toBe('str');
  expect(tree.instance).toBeInstanceOf(IdExpressionTree);
});

test('method on several lines', () => {
  const code = `f(3,
        "str", 123, 
    415)`;
  const tree = parseExpression(code) as InvokeExpressionTree;
  expect(tree).toBeInstanceOf(InvokeExpressionTree);

  expect(tree.arguments.length).toBe(4);
  const [arg1, arg2] = tree.arguments.map((x) => x as LiteralExpressionTree);
  expect(arg1.literal).toBeInstanceOf(IntegerLiteralTree);
  expect(arg2.literal).toBeInstanceOf(StringLiteralTree);
  expect(tree.instance).toBeInstanceOf(IdExpressionTree);
});

test('can call with type parameter', () => {
  const code = 'a.get (1)';
  const tree = parseExpression(code) as InvokeExpressionTree;
  expect(tree).toBeInstanceOf(InvokeExpressionTree);

  expect(tree.arguments.length).toBe(1);
  const [arg] = tree.arguments.map((x) => x as LiteralExpressionTree);
  expect(arg.literal).toBeInstanceOf(IntegerLiteralTree);
  expect(tree.instance).toBeInstanceOf(MemberExpressionTree);
});
