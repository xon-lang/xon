import {Text, TextReference} from '#common';
import {$LexicalNode, corePackageType, LexicalNode, lexicalNode} from '#core';

export type CommaNode = LexicalNode & {__branding?: null};

export const $CommaNode = corePackageType<CommaNode>('CommaNode', $LexicalNode);

export function commaNode(reference: TextReference, text: Text): CommaNode {
  return lexicalNode({$: $CommaNode, reference, text});
}
