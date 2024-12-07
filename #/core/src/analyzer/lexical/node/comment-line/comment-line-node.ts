import {TextData, TextReference} from '#common';
import {$LexicalNode, corePackageType, LexicalNode, lexicalNode} from '#core';

export type CommentLineNode = LexicalNode;

export const $CommentLineNode = corePackageType<CommentLineNode>('CommentLineNode', $LexicalNode);

export function commentLineNode(reference: TextReference, text: TextData): CommentLineNode {
  return lexicalNode({$: $CommentLineNode, reference, text, isHidden: true});
}
