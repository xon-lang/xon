import { parseExpression } from '../../../parse';
import { StringLiteralTree } from '../../literal/string-literal/string-literal.tree';
import { AddExpressionTree } from '../add-expression/add-expression.tree';
import { LiteralExpressionTree } from '../literal-expression/literal-expression.tree';
import { MemberExpressionTree } from '../member-expression/member-expression.tree';
import { IndexExpressionTree } from './index-expression.tree';

test('string expression index', () => {
  const code = "some_object.prop['ppp']";
  const tree = parseExpression<IndexExpressionTree>(code);
  expect(tree.value).toBeInstanceOf(MemberExpressionTree);
  expect(tree.index).toBeInstanceOf(LiteralExpressionTree);
  expect((tree.index as LiteralExpressionTree).literal).toBeInstanceOf(StringLiteralTree);
});

test('integer expression index', () => {
  const code = 'some_object.prop[12+33]';
  const tree = parseExpression<IndexExpressionTree>(code);
  expect(tree.value).toBeInstanceOf(MemberExpressionTree);
  expect(tree.index).toBeInstanceOf(AddExpressionTree);
});
