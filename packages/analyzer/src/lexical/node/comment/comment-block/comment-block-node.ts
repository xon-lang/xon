import {
  $CommentNode,
  analyzerPackageType,
  CommentBlockCloseNode,
  CommentBlockContentNode,
  CommentBlockOpenNode,
  CommentNode,
  rangeFromNodes2,
} from '#analyzer';
import {newArrayData, Nothing} from '#common';
import {Brand} from '#typing';

export type CommentBlockNode = CommentNode &
  Brand<'Analyzer.CommentBlockNode'> & {
    openNode: CommentBlockOpenNode;
    contentNode?: CommentBlockContentNode | Nothing;
    closeNode?: CommentBlockCloseNode | Nothing;
  };

export const $CommentBlockNode = analyzerPackageType<CommentBlockNode>('CommentBlockNode', $CommentNode);

export function newCommentBlockNode(
  openNode: CommentBlockOpenNode,
  contentNode?: CommentBlockContentNode | Nothing,
  closeNode?: CommentBlockCloseNode | Nothing,
): CommentBlockNode {
  const children = newArrayData([openNode, contentNode, closeNode]).filter();
  const range = rangeFromNodes2(children);

  return {
    $: $CommentBlockNode,
    range,
    openNode,
    contentNode,
    closeNode,
    children,
  };
}
