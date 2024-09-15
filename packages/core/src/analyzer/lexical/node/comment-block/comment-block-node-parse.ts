import {Nothing, nothing} from '../../../../../../lib/types';
import {LexicalAnalyzer} from '../../lexical-analyzer';
import {COMMENT_BLOCK_CLOSE, COMMENT_BLOCK_OPEN} from '../../lexical-analyzer-config';
import {CommentBlockNode, commentBlockNode} from './comment-block-node';

export function commentBlockNodeParse(analyzer: LexicalAnalyzer): CommentBlockNode | Nothing {
  if (!analyzer.checkTextAtIndex(COMMENT_BLOCK_OPEN)) {
    return nothing;
  }

  const stopIndex = analyzer.resource.data.firstIndex(
    COMMENT_BLOCK_CLOSE,
    analyzer.position.index + COMMENT_BLOCK_OPEN.length,
  );

  const endSlice = stopIndex < 0 ? analyzer.resource.data.length() : stopIndex + COMMENT_BLOCK_CLOSE.length;

  const text = analyzer.resource.data.slice(analyzer.position.index, endSlice);
  // todo should we calculate nl count in place ???
  const reference = analyzer.getResourceRangeWithNL(text);

  return commentBlockNode(reference, text);
}
