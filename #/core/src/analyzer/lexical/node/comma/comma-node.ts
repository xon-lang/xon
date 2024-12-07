import {TextData, TextReference} from '#common';
import {$LexicalNode, corePackageType, LexicalNode, lexicalNode} from '#core';

export type CommaNode = LexicalNode;

export const $CommaNode = corePackageType<CommaNode>('CommaNode', $LexicalNode);

export function commaNode(reference: TextReference, text: TextData): CommaNode {
  return lexicalNode({$: $CommaNode, reference, text});
}
