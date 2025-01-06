import {$LexicalNode, corePackageType, LexicalNode, lexicalNode} from '#analyzer';
import {Text, TextReference} from '#common';
import {Brand} from '#typing';

export type CommaNode = LexicalNode & Brand<'Core.CommaNode'>;

export const $CommaNode = corePackageType<CommaNode>('CommaNode', $LexicalNode);

export function commaNode(reference: TextReference, text: Text): CommaNode {
  return lexicalNode({$: $CommaNode, reference, text});
}
