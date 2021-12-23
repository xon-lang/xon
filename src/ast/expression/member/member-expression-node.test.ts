import { parseExpression } from '../../util/parse';
import { IdExpressionNode } from '../id/id-expression-node';
import { MemberExpressionNode } from './member-expression-node';

test('not safe', () => {
  const code = 'abc.def';
  const node = parseExpression<MemberExpressionNode>(code);
  expect(node).toBeInstanceOf(MemberExpressionNode);

  expect(node.instance).toBeInstanceOf(IdExpressionNode);
  expect((node.instance as IdExpressionNode).id.name.text).toBe('abc');
  expect(node.id.name.text).toBe('def');
});
