import { parseSyntax } from '../../syntax';
import { $Node } from '../node';
import { StringNode } from '../string/string-node';

test('a', () => {
  const text = '\'a\'';
  const syntax = parseSyntax(text);
  const tree = syntax.statements[0].item as StringNode;

  expect(syntax.statements.length).toBe(1);
  expect(tree.$).toBe($Node.CHAR);
  expect(tree.text).toBe(text);
});
