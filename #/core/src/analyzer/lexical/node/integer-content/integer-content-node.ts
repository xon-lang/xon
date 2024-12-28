import {Text, TextReference} from '#common';
import {$LexicalNode, corePackageType, LexicalNode, lexicalNode} from '#core';
import {Brand} from '#typing';

export type IntegerContentNode = LexicalNode & Brand<'Core.IntegerContentNode'>;

export const $IntegerContentNode = corePackageType<IntegerContentNode>('IntegerContentNode', $LexicalNode);

export function integerContentNode(reference: TextReference, text: Text): IntegerContentNode {
  return lexicalNode({$: $IntegerContentNode, reference, text});
}
