import {
  $LexicalNode,
  analyzerPackageType,
  COMMENT_BLOCK_CLOSE,
  COMMENT_BLOCK_OPEN,
  LexicalNode,
  lexicalNode,
} from '#analyzer';
import {nothing, Text, TextReference} from '#common';

export type CommentBlockNode = LexicalNode & {
  value: Text;
};

export const $CommentBlockNode = analyzerPackageType<CommentBlockNode>('CommentBlockNode', $LexicalNode);

export function commentBlockNode(reference: TextReference, text: Text): CommentBlockNode {
  let value: Text;
  const lastCloseIndex = text.firstItemsIndex(COMMENT_BLOCK_CLOSE);

  if (lastCloseIndex != nothing) {
    value = text.slice(COMMENT_BLOCK_OPEN.count(), lastCloseIndex);
  } else {
    value = text.slice(COMMENT_BLOCK_OPEN.count());
  }

  return lexicalNode({$: $CommentBlockNode, reference, text, isHidden: true, value});
}
