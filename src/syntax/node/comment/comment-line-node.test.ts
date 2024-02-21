import { parseSyntax } from '../../syntax';
import { $Node } from '../node';
import { CommentLineNode } from './comment-line-node';

test('line comment', () => {
  const text = '-- abc';
  const ast = parseSyntax(text);
  const node = ast.hiddenNodes[0] as CommentLineNode;

  expect(ast.hiddenNodes.length).toBe(1);
  expect(node.$).toBe($Node.COMMENT_LINE);
  expect(node.text).toBe('-- abc');
});

test('line comment', () => {
  const text = '-- abc';
  const ast = parseSyntax(text);
  const node = ast.hiddenNodes[0] as CommentLineNode;

  expect(ast.hiddenNodes.length).toBe(1);
  expect(node.$).toBe($Node.COMMENT_LINE);
  expect(node.text).toBe('-- abc');
});
