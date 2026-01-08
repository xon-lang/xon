import {
  $AnalyzerType,
  $CommentNode,
  CommentLineContentNode,
  CommentLineOperatorNode,
  CommentNode,
  newSyntaxNode,
  nodesRange,
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
    isHidden: true,
    range: nodesRange(operator, content),

    operator,
    content,
  });
}
