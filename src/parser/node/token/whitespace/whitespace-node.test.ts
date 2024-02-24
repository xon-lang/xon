import { parseSyntax } from '../../../syntax';
import { $Node } from '../../node';
import { TokenNode } from '../token-node';

test('whitespace', () => {
  const text = '    ';
  const syntax = parseSyntax(text);
  const nodes = syntax.statements.map((x) => x.item);
  const hiddenNodes = syntax.hiddenNodes;

  expect(nodes.length).toBe(0);
  expect(hiddenNodes.length).toBe(1);
  expect(hiddenNodes[0].$).toBe($Node.WHITESPACE);
  expect((hiddenNodes[0] as TokenNode).text).toBe('    ');
});
