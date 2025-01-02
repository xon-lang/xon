import {nothing, Text, TextReference} from '#common';
import {
  $LexicalNode,
  COMMENT_BLOCK_CLOSE,
  COMMENT_BLOCK_OPEN,
  corePackageType,
  LexicalNode,
  lexicalNode,
} from '#core';

export type CommentBlockNode = LexicalNode & {
  value: Text;
};

export const $CommentBlockNode = corePackageType<CommentBlockNode>('CommentBlockNode', $LexicalNode);

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
