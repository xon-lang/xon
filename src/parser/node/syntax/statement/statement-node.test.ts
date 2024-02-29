import {parseSyntax} from '../../../syntax';
import {$Node} from '../../node';
import {StringNode} from '../../token/string/string-node';
import {TokenNode} from '../../token/token-node';

test('a', () => {
  const text = "'a'";
  const nodes = parseSyntax(text).statements.map((x) => x.item) as TokenNode[];
  const tree = nodes[0] as StringNode;

  expect(nodes.length).toBe(1);
  expect(tree.$).toBe($Node.CHAR);
  expect(tree.text).toBe(text);
});

test('formatting', () => {
  const text = `
+ --- --- 1




//   abc`;
  const syntax = parseSyntax(text);

  expect(syntax.statements.length).toBe(1);
});

test('formatting 2', () => {
  const text = `+ --- --- 1 

//
`;
  const syntax = parseSyntax(text);

  expect(syntax.statements.length).toBe(1);
});
