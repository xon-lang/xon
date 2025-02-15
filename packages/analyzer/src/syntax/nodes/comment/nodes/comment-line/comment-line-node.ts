import {
  $AnalyzerType,
  $CommentNode,
  CommentLineContentNode,
  CommentLineOperatorNode,
  CommentNode,
  newSyntaxNode,
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
  return newSyntaxNode({$: $CommentLineNode(), operatorNode, contentNode});
}
