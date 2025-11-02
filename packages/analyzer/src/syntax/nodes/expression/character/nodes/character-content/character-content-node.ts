import {$AnalyzerType, $LexicalNode, LexicalNode} from '#analyzer';
import {Brand} from '#core';

export type CharacterContentNode = LexicalNode & Brand<'Analyzer.CharacterContentNode'>;

export const $CharacterContentNode = () =>
  $AnalyzerType<CharacterContentNode>('CharacterContentNode', $LexicalNode());
