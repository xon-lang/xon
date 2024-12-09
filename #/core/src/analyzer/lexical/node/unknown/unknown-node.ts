import {Text, TextReference} from '#common';
import {$LexicalNode, corePackageType, LexicalNode, lexicalNode} from '#core';

export type UnknownNode = LexicalNode;

export const $UnknownNode = corePackageType<UnknownNode>('UnknownNode', $LexicalNode);

export function unknownNode(reference: TextReference, text: Text): UnknownNode {
  return lexicalNode({$: $UnknownNode, reference, text});
}
