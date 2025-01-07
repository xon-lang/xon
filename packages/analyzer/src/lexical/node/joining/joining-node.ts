import {$LexicalNode, analyzerPackageType, LexicalNode, lexicalNode} from '#analyzer';
import {Text, TextReference} from '#common';
import {Brand} from '#typing';

export type JoiningNode = LexicalNode & Brand<'Analyzer.JoiningNode'>;

export const $JoiningNode = analyzerPackageType<JoiningNode>('JoiningNode', $LexicalNode);

export function joiningNode(reference: TextReference, text: Text): JoiningNode {
  return lexicalNode({$: $JoiningNode, reference, text, isHidden: true});
}
