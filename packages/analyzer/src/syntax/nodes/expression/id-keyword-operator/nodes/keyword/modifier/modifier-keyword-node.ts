import {$AnalyzerType, $KeywordNode, KeywordNode} from '#analyzer';
import {Brand} from '#typing';

export type ModifierKeywordNode = KeywordNode & Brand<'Analyzer.ModifierKeywordNode'>;

export const $ModifierKeywordNode = () =>
  $AnalyzerType<ModifierKeywordNode>('ModifierKeywordNode', $KeywordNode());
