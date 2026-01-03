import {$AnalyzerType, $LexicalNode, LexicalNode} from '#analyzer';
import {Brand} from '#core';

export type JoiningWhitespaceNode = LexicalNode & Brand<'Analyzer.JoiningNode'>;

export const $JoiningWhitespaceNode = () =>
  $AnalyzerType<JoiningWhitespaceNode>('JoiningWhitespaceNode', $LexicalNode());
