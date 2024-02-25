import { parseSyntax } from '../../../syntax';
import { $Node } from '../../node';
import { CommentNode } from './comment-node';

test('line comment', () => {
  const text = '-- abc';
  const ast = parseSyntax(text);
  const node = ast.hiddenNodes[0] as CommentNode;

  expect(ast.hiddenNodes.length).toBe(1);
  expect(node.$).toBe($Node.COMMENT);
  expect(node.text).toBe('-- abc');
});

test('block comment', () => {
  const text = '--- abc\n\n\n def---';
  const ast = parseSyntax(text);
  const node = ast.hiddenNodes[0] as CommentNode;

  expect(ast.hiddenNodes.length).toBe(1);
  expect(node.$).toBe($Node.COMMENT);
  expect(node.text).toBe('--- abc\n\n\n def---');
});
