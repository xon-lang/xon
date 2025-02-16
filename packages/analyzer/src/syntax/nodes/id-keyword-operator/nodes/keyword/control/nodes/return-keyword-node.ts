import {$AnalyzerType, $ControlKeywordNode, KeywordNode} from '#analyzer';
import {Brand} from '#typing';

export type ReturnKeywordNode = KeywordNode & Brand<'Analyzer.ReturnKeywordNode'>;

export const $ReturnKeywordNode = () =>
  $AnalyzerType<ReturnKeywordNode>('ReturnKeywordNode', $ControlKeywordNode());
