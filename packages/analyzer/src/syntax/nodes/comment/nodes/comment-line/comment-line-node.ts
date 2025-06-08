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
import {Nothing} from '#common';
import {Brand} from '#typing';

export type CommentLineNode = CommentNode &
  Brand<'Analyzer.CommentLineNode'> & {
    operatorNode: CommentLineOperatorNode;
    contentNode?: CommentLineContentNode | Nothing;
  };

export const $CommentLineNode = () => $AnalyzerType<CommentLineNode>('CommentLineNode', $CommentNode());

export function newCommentLineNode(
  operatorNode: CommentLineOperatorNode,
  contentNode?: CommentLineContentNode | Nothing,
): CommentLineNode {
  return newSyntaxNode({
    $: $CommentLineNode(),
    operatorNode,
    contentNode,

    semantify(context: SemanticContext): void {},
    format(context: FormatterContext): void {},
    highlight(context: HighlightContext): void {},
  });
}
