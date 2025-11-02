import {$AnalyzerType, $ControlKeywordNode, KeywordNode} from '#analyzer';
import {Brand} from '#core';

export type ImportKeywordNode = KeywordNode & Brand<'Analyzer.ImportKeywordNode'>;

export const $ImportKeywordNode = () =>
  $AnalyzerType<ImportKeywordNode>('ImportKeywordNode', $ControlKeywordNode());
