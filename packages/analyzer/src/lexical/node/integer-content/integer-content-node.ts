import {$LexicalNode, analyzerPackageType, LexicalNode, lexicalNode} from '#analyzer';
import {Text, TextReference} from '#common';
import {Brand} from '#typing';

export type IntegerContentNode = LexicalNode & Brand<'Analyzer.IntegerContentNode'>;

export const $IntegerContentNode = analyzerPackageType<IntegerContentNode>(
  'IntegerContentNode',
  $LexicalNode,
);

export function integerContentNode(reference: TextReference, text: Text): IntegerContentNode {
  return lexicalNode({$: $IntegerContentNode, reference, text});
}
