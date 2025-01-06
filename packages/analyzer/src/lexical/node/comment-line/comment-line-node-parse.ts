import {COMMENT_LINE, CommentLineNode, LexicalAnalyzer, NL, commentLineNode} from '#analyzer';
import {Nothing, nothing} from '#common';

export function commentLineNodeParse(analyzer: LexicalAnalyzer): CommentLineNode | Nothing {
  if (!analyzer.hasTextAtIndex(COMMENT_LINE)) {
    return nothing;
  }

  const text = analyzer.resource.data.takeWhile((x) => !NL.equals(x), analyzer.position.index);
  const reference = analyzer.textReference(text);

  return commentLineNode(reference, text);
}
