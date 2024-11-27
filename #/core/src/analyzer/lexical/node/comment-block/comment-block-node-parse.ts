import {Nothing, nothing} from '#/common';
import {
  COMMENT_BLOCK_CLOSE,
  COMMENT_BLOCK_OPEN,
  CommentBlockNode,
  commentBlockNode,
  LexicalAnalyzer,
} from '#/core';

export function commentBlockNodeParse(analyzer: LexicalAnalyzer): CommentBlockNode | Nothing {
  if (!analyzer.checkTextAtIndex(COMMENT_BLOCK_OPEN)) {
    return nothing;
  }

  const stopIndex = analyzer.resource.data.firstItemsIndex(
    COMMENT_BLOCK_CLOSE,
    analyzer.position.index + COMMENT_BLOCK_OPEN.length(),
  );

  const endSlice = stopIndex < 0 ? analyzer.resource.data.length() : stopIndex + COMMENT_BLOCK_CLOSE.length();

  const text = analyzer.resource.data.slice(analyzer.position.index, endSlice);
  // todo should we calculate nl count in place ???
  const reference = analyzer.getResourceRangeWithNL(text);

  return commentBlockNode(reference, text);
}
