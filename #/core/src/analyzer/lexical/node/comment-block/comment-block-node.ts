import {TextData, TextReference} from '#/common';
import {COMMENT_BLOCK_CLOSE, COMMENT_BLOCK_OPEN, LexicalNode, lexicalNode} from '#/core';
import {$} from '#/typing';

export type CommentBlockNode = LexicalNode<$.CommentBlockNode> & {
  value: TextData;
};

export function commentBlockNode(reference: TextReference, text: TextData): CommentBlockNode {
  let value: TextData;
  const lastCloseIndex = text.firstItemsIndex(COMMENT_BLOCK_CLOSE);

  if (lastCloseIndex > 0) {
    value = text.slice(COMMENT_BLOCK_OPEN.length(), lastCloseIndex);
  } else {
    value = text.slice(COMMENT_BLOCK_OPEN.length());
  }

  return lexicalNode($.CommentBlockNode, {reference, text, isHidden: true, value});
}
