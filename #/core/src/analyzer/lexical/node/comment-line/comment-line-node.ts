import {Text, TextReference} from '#common';
import {$LexicalNode, corePackageType, LexicalNode, lexicalNode} from '#core';
import {Brand} from '#typing';

export type CommentLineNode = LexicalNode & Brand<'Core.CommentLineNode'>;

export const $CommentLineNode = corePackageType<CommentLineNode>('CommentLineNode', $LexicalNode);

export function commentLineNode(reference: TextReference, text: Text): CommentLineNode {
  return lexicalNode({$: $CommentLineNode, reference, text, isHidden: true});
}
