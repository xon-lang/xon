import {$AnalyzerType, $KeywordNode, KeywordNode} from '#analyzer';
import {Brand} from '#typing';

export type DeclarationKeywordNode = KeywordNode & Brand<'Analyzer.DeclarationKeywordNode'>;

export const $DeclarationKeywordNode = () =>
  $AnalyzerType<DeclarationKeywordNode>('DeclarationKeywordNode', $KeywordNode());
