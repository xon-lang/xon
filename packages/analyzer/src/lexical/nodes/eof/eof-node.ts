import {$LexicalNode2, analyzerPackageType, LexicalNode2} from '#analyzer';
import {newText, TextRange} from '#common';
import {Brand} from '#typing';

export type EofNode = LexicalNode2 & Brand<'Analyzer.EofNode'>;

export const $EofNode = analyzerPackageType<EofNode>('EofNode', $LexicalNode2);

export function newEofNode(range: TextRange): EofNode {
  return {
    $: $EofNode,
    text: newText(),
    range,
  };
}
