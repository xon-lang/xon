import {parseSyntax} from '../../../syntax';
import {$Node} from '../../node';
import {CommentBlockNode} from './comment-block-node';

test('block comment', () => {
  const text = '--- abc\n\n\n def---';
  const ast = parseSyntax(text);
  const node = ast.hiddenNodes[0] as CommentBlockNode;

  expect(ast.hiddenNodes.length).toBe(1);
  expect(node.$).toBe($Node.COMMENT_BLOCK);
  expect(node.text).toBe('--- abc\n\n\n def---');
});
