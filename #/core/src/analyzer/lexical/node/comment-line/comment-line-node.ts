import {Text, TextReference} from '#common';
import {$LexicalNode, corePackageType, LexicalNode, lexicalNode} from '#core';

export type CommentLineNode = LexicalNode & {__branding?: null};

export const $CommentLineNode = corePackageType<CommentLineNode>('CommentLineNode', $LexicalNode);

export function commentLineNode(reference: TextReference, text: Text): CommentLineNode {
  return lexicalNode({$: $CommentLineNode, reference, text, isHidden: true});
}
