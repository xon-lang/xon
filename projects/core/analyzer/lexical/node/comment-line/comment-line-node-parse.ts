import {Nothing, nothing} from '../../../../../lib/types';
import {LexicalAnalyzer} from '../../lexical-analyzer';
import {COMMENT_LINE, NL} from '../../lexical-analyzer-config';
import {CommentLineNode, commentLineNode} from './comment-line-node';

export function commentLineNodeParse(analyzer: LexicalAnalyzer): CommentLineNode | Nothing {
  if (!analyzer.checkTextAtIndex(COMMENT_LINE)) {
    return nothing;
  }

  const text = analyzer.resource.data.takeWhile((x) => x !== NL, analyzer.position.index);
  const range = analyzer.getRange(text.length);

  return commentLineNode(range, text);
}
