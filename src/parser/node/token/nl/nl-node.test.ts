import {parseSyntax} from '../../../syntax';
import {TokenNode} from '../token-node';

test('lf nl', () => {
  const text = '\n';
  const nodes = parseSyntax(text).statements.map((x) => x.item);

  expect(nodes.length).toBe(0);
  // expect(nodes[0].hidden?.first().$).toBe(NodeType.NL);
  // expect(nodes[0].hidden?.first()?.text).toBe('\n');

  // expect(nodes[1].hidden?.first().$).toBe(NodeType.NL);
  // expect(nodes[1].hidden?.first()?.text).toBe('\r\n');

  // expect(nodes[2].hidden.length).toBe(0);
});

test('several', () => {
  const text = '  \n    \n   abc';
  const syntax = parseSyntax(text);
  const nodes = syntax.statements.map((x) => x.item);

  expect(nodes.length).toBe(1);
  expect((nodes[0] as TokenNode).text).toBe('abc');

  expect(syntax.statements[0].hiddenNodes.length).toBe(3);
  expect(syntax.statements[0].hiddenNodes[0].text).toBe('  ');
  expect(syntax.statements[0].hiddenNodes[1].text).toBe('\n    \n');
  expect(syntax.statements[0].hiddenNodes[2].text).toBe('   ');
});
