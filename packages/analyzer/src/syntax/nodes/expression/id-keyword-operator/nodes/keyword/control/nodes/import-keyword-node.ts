import {$AnalyzerType, $ControlKeywordNode, KeywordNode} from '#analyzer';
import {Brand} from '#typing';

export type ImportKeywordNode = KeywordNode & Brand<'Analyzer.ImportKeywordNode'>;

export const $ImportKeywordNode = () =>
  $AnalyzerType<ImportKeywordNode>('ImportKeywordNode', $ControlKeywordNode());
