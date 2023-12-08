import { IdNode } from '../../../parser/node/id/id-node';
import { MemberNode } from '../../../parser/node/member/member-node';
import { parse } from '../../../parser/parser';
import { NodeType } from '../node-type';

test('meta property', () => {
  const text = 'abc::def';
  const nodes = parse(text).root.children;
  const member = nodes[0] as MemberNode;

  expect(nodes.length).toBe(1);

  expect(member.$).toBe(NodeType.META_MEMBER);
  expect(member.instance.$).toBe(NodeType.ID);
  expect((member.instance as IdNode).text).toBe('abc');
  expect(member.operator.text).toBe('::');
  expect(member.id.text).toBe('def');
});
