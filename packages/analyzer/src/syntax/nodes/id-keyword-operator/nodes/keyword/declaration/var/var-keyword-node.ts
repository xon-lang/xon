import {$AnalyzerType, $DeclarationKeywordNode, DeclarationKeywordNode} from '#analyzer';
import {Brand} from '#typing';

export type VarKeywordNode = DeclarationKeywordNode & Brand<'Analyzer.VarKeywordNode'>;

export const $VarKeywordNode = () =>
  $AnalyzerType<VarKeywordNode>('VarKeywordNode', $DeclarationKeywordNode());
