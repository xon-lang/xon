import { parseExpression } from '../../parse';
import { IdExpressionNode } from '../id/id-expression-node';
import { MemberExpressionNode } from './member-expression-node';

test('not safe', () => {
  const code = 'abc.def';
  const tree = parseExpression<MemberExpressionNode>(code);
  expect(tree).toBeInstanceOf(MemberExpressionNode);

  expect(tree.instance).toBeInstanceOf(IdExpressionNode);
  expect((tree.instance as IdExpressionNode).id.text).toBe('abc');
  expect(tree.id.text).toBe('def');
});
