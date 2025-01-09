import {$CommentLineNode, COMMENT_LINE, CommentLineNode, LexicalAnalyzer, NL} from '#analyzer';
import {Nothing, nothing} from '#common';

export function commentLineNodeParse(analyzer: LexicalAnalyzer): CommentLineNode | Nothing {
  if (!analyzer.hasTextAtIndex(COMMENT_LINE)) {
    return nothing;
  }

  const text = analyzer.resource.data.takeWhile((x) => !NL.equals(x), analyzer.position.index);
  const range = analyzer.textReference(text);

  return {$: $CommentLineNode, text, range};
}
