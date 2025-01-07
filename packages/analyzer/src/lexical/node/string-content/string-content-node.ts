import {$LexicalNode, analyzerPackageType, LexicalNode, lexicalNode} from '#analyzer';
import {Text, TextReference} from '#common';
import {Brand} from '#typing';

// todo should we remove 'StringNode' and use 'StringContentNode' as 'StringNode'
export type StringContentNode = LexicalNode & Brand<'Analyzer.StringContentNode'>;

export const $StringContentNode = analyzerPackageType<StringContentNode>('StringContentNode', $LexicalNode);

export function stringContentNode(reference: TextReference, text: Text): StringContentNode {
  return lexicalNode({$: $StringContentNode, reference, text});
}
