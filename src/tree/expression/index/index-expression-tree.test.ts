import { IntegerLiteralTree } from '../../literal/integer/integer-literal-tree';
import { StringLiteralTree } from '../../literal/string/string-literal-tree';
import { parseExpression } from '../../../util/parse';
import { IdExpressionTree } from '../id/id-expression-tree';
import { LiteralExpressionTree } from '../literal/literal-expression-tree';
import { IndexExpressionTree } from './index-expression-tree';

test('method call', () => {
  const code = 'f[3, "str"]';
  const tree = parseExpression(code) as IndexExpressionTree;
  expect(tree).toBeInstanceOf(IndexExpressionTree);

  expect(tree.arguments.length).toBe(2);
  expect((tree.arguments[0] as LiteralExpressionTree).literal).toBeInstanceOf(IntegerLiteralTree);
  expect((tree.arguments[0] as LiteralExpressionTree).literal.value).toBe(3);
  expect((tree.arguments[1] as LiteralExpressionTree).literal).toBeInstanceOf(StringLiteralTree);
  expect((tree.arguments[1] as LiteralExpressionTree).literal.value).toBe('str');
  expect(tree.instance).toBeInstanceOf(IdExpressionTree);
});

test('method on several lines', () => {
  const code = `f[3,
        "str", 123, 
    415]`;
  const tree = parseExpression(code) as IndexExpressionTree;
  expect(tree).toBeInstanceOf(IndexExpressionTree);

  expect(tree.arguments.length).toBe(4);
  const [arg1, arg2] = tree.arguments.map((x) => x as LiteralExpressionTree);
  expect(arg1.literal).toBeInstanceOf(IntegerLiteralTree);
  expect(arg2.literal).toBeInstanceOf(StringLiteralTree);
  expect(tree.instance).toBeInstanceOf(IdExpressionTree);
});

test('no args', () => {
  const code = 'A[]';
  const tree = parseExpression(code) as IndexExpressionTree;
  expect(tree).toBeInstanceOf(IndexExpressionTree);

  expect(tree.arguments.length).toBe(0);
  expect(tree.instance).toBeInstanceOf(IdExpressionTree);
});
