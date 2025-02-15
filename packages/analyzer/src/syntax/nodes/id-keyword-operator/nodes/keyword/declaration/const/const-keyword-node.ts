import {$AnalyzerType, $DeclarationKeywordNode, DeclarationKeywordNode} from '#analyzer';
import {Brand} from '#typing';

export type ConstKeywordNode = DeclarationKeywordNode & Brand<'Analyzer.ConstKeywordNode'>;

export const $ConstKeywordNode = () =>
  $AnalyzerType<ConstKeywordNode>('ConstKeywordNode', $DeclarationKeywordNode());
