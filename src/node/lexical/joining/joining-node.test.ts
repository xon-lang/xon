import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { IdNode } from '~/node/lexical/id/id-node';
import { MemberNode } from '~/node/member/member-node';
import { NodeType } from '~/node/node';
import { OperatorNode } from '~/node/operator/operator-node';
import { Source } from '~/source/source';

test('line joining', () => {
  const text = 'abc\\  .def';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.body().statements[0].nodes;
  const member = nodes[0] as MemberNode;

  expect(nodes.length).toBe(1);
  expect(member.instance.$).toBe(NodeType.ID);
  expect((member.instance as IdNode).text).toBe('abc');
  expect((member.operator as OperatorNode).text).toBe('.');
  expect(member.operator.hidden.length).toBe(1);
  expect(member.operator.hidden[0].text).toBe('\\  ');
  expect(member.id.$).toBe(NodeType.ID);
  expect((member.id as IdNode).text).toBe('def');
});

test('line joining with new line', () => {
  const text = 'abc\\   \n  .def';
  const source = Source.fromText(text, null);
  const lexer = new LexicalAnalysis(source.text);
  const nodes = lexer.body().statements[0].nodes;
  const member = nodes[0] as MemberNode;

  expect(nodes.length).toBe(1);
  expect(member.instance.$).toBe(NodeType.ID);
  expect((member.instance as IdNode).text).toBe('abc');
  expect((member.operator as OperatorNode).text).toBe('.');
  expect(member.operator.hidden.length).toBe(1);
  expect(member.operator.hidden[0].text).toBe('\\   \n  ');
  expect(member.id.$).toBe(NodeType.ID);
  expect((member.id as IdNode).text).toBe('def');
});
