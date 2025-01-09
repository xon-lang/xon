import {
  $CommentNode,
  analyzerPackageType,
  CommentLineContentNode,
  CommentLineOperatorNode,
  CommentNode,
  rangeFromNodes2,
} from '#analyzer';
import {newArrayData, Nothing} from '#common';
import {Brand} from '#typing';

export type CommentLineNode = CommentNode &
  Brand<'Analyzer.CommentLineNode'> & {
    operatorNode: CommentLineOperatorNode;
    contentNode?: CommentLineContentNode | Nothing;
  };

export const $CommentLineNode = analyzerPackageType<CommentLineNode>('CommentLineNode', $CommentNode);

export function newCommentLineNode(
  operatorNode: CommentLineOperatorNode,
  contentNode?: CommentLineContentNode | Nothing,
): CommentLineNode {
  const children = newArrayData([operatorNode, contentNode]).filter();
  const range = rangeFromNodes2(children);

  return {
    $: $CommentLineNode,
    range,
    operatorNode,
    contentNode,
    children,
  };
}
