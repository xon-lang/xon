import {
  $CommentNode,
  analyzerPackageType,
  CommentBlockCloseNode,
  CommentBlockContentNode,
  CommentBlockOpenNode,
  CommentNode,
  newSyntaxNode,
} from '#analyzer';
import {Nothing} from '#common';
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
  return newSyntaxNode({$: $CommentBlockNode, openNode, contentNode, closeNode});
}
