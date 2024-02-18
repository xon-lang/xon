import { parseSyntax } from '../../syntax';
import { TokenNode } from '../node';

test('lf cr', () => {
  const text = '\n\r';
  const nodes = parseSyntax(text).statements.map((x) => x.item);

  expect(nodes.length).toBe(0);
  // expect(nodes[0].hidden?.first().$).toBe(NodeType.NL);
  // expect(nodes[0].hidden?.first()?.text).toBe('\n');

  // expect(nodes[1].hidden?.first().$).toBe(NodeType.NL);
  // expect(nodes[1].hidden?.first()?.text).toBe('\r');

  // expect(nodes[2].hidden.length).toBe(0);
});

test('several', () => {
  const text = '  \n    \r\nabc';
  const nodes = parseSyntax(text).statements.map((x) => x.item);

  expect(nodes.length).toBe(1);
  // expect(nodes[0].hidden?.length).toBe(2);
  // expect(nodes[0].hidden?.at(1)?.$).toBe(NodeType.NL);
  // expect(nodes[0].hidden?.at(1)?.text).toBe('\n');
  // expect(nodes[1].hidden?.length).toBe(2);
  // expect(nodes[1].hidden?.at(1)?.$).toBe(NodeType.NL);
  // expect(nodes[1].hidden?.at(1)?.text).toBe('\r\n');
  // expect(nodes[2].hidden?.length).toBe(0);
  expect((nodes[0] as TokenNode).text).toBe('abc');
});
