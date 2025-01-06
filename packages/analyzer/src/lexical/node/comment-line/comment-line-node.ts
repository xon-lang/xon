import {$LexicalNode, analyzerPackageType, LexicalNode, lexicalNode} from '#analyzer';
import {Text, TextReference} from '#common';
import {Brand} from '#typing';

export type CommentLineNode = LexicalNode & Brand<'Core.CommentLineNode'>;

export const $CommentLineNode = analyzerPackageType<CommentLineNode>('CommentLineNode', $LexicalNode);

export function commentLineNode(reference: TextReference, text: Text): CommentLineNode {
  return lexicalNode({$: $CommentLineNode, reference, text, isHidden: true});
}
