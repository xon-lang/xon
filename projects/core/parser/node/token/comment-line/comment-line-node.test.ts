import {sourceFromText} from '../../../../source/source';
import {parseSyntax} from '../../../syntax';
import {$Node} from '../../node';
import {CommentLineNode} from './comment-line-node';

test('line comment', () => {
  const text = '// abc';
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = syntax.syntaxContext.hiddenNodes[0] as CommentLineNode;

  expect(statements.length).toBe(0);
  expect(syntax.syntaxContext.hiddenNodes.length).toBe(1);
  expect(node.$).toBe($Node.COMMENT_LINE);
  expect(node.text).toBe('// abc');
});
