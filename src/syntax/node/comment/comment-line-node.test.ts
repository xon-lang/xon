import { parseSyntax } from '../../syntax';
import { $Node } from '../node';
import { CommentLineNode } from './comment-line-node';

test('line comment', () => {
  const text = '-- abc';
  const ast = parseSyntax(text);
  const node = ast.statements[0].item as CommentLineNode;

  expect(ast.statements.length).toBe(1);
  expect(node.$).toBe($Node.COMMENT_LINE);
  expect(node.text).toBe('-- abc');
});

test('line comment', () => {
  const text = '-- abc';
  const ast = parseSyntax(text);
  const node = ast.statements[0].item as CommentLineNode;

  expect(ast.statements.length).toBe(1);
  expect(node.$).toBe($Node.COMMENT_LINE);
  expect(node.text).toBe('-- abc');
});
