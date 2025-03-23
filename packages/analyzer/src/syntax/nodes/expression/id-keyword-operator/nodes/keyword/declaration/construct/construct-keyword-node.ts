import {$AnalyzerType, $DeclarationKeywordNode, DeclarationKeywordNode} from '#analyzer';
import {Brand} from '#typing';

export type ConstructKeywordNode = DeclarationKeywordNode & Brand<'Analyzer.ConstructKeywordNode'>;

export const $ConstructKeywordNode = () =>
  $AnalyzerType<ConstructKeywordNode>('ConstructKeywordNode', $DeclarationKeywordNode());
