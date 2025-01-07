import {$OpenNode, OpenNode, analyzerPackageType, lexicalNode} from '#analyzer';
import {Text, TextReference} from '#common';
import {Brand} from '#typing';

export type BracketOpenNode = OpenNode & Brand<'Analyzer.BracketOpenNode'>;

export const $BracketOpenNode = analyzerPackageType<BracketOpenNode>('BracketOpenNode', $OpenNode);

export function bracketOpenNode(reference: TextReference, text: Text): BracketOpenNode {
  return lexicalNode({$: $BracketOpenNode, reference, text});
}
