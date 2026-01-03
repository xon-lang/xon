import {
  $AnalyzerType,
  $CommentNode,
  CommentLineContentNode,
  CommentLineOperatorNode,
  CommentNode,
  FormatterContext,
  HighlightContext,
  newSyntaxNode,
  SemanticContext,
} from '#analyzer';
import {Brand, Nothing} from '#core';

export type CommentLineNode = CommentNode &
  Brand<'Analyzer.CommentLineNode'> & {
    operator: CommentLineOperatorNode;
    content?: CommentLineContentNode | Nothing;
  };

export const $CommentLineNode = () => $AnalyzerType<CommentLineNode>('CommentLineNode', $CommentNode());

export function newCommentLineNode(
  operator: CommentLineOperatorNode,
  content?: CommentLineContentNode | Nothing,
): CommentLineNode {
  return newSyntaxNode({
    $: $CommentLineNode(),
    operator,
    content,

    semantify(context: SemanticContext): void {},
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}
