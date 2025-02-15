import {$AnalyzerType, $LexicalNode, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type CharacterCloseNode = LexicalNode & Brand<'Analyzer.CharacterCloseNode'>;

export const $CharacterCloseNode = () =>
  $AnalyzerType<CharacterCloseNode>('CharacterCloseNode', $LexicalNode());
