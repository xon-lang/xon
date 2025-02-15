import {$AnalyzerType, $DeclarationKeywordNode, DeclarationKeywordNode} from '#analyzer';
import {Brand} from '#typing';

export type TypeKeywordNode = DeclarationKeywordNode & Brand<'Analyzer.TypeKeywordNode'>;

export const $TypeKeywordNode = () =>
  $AnalyzerType<TypeKeywordNode>('TypeKeywordNode', $DeclarationKeywordNode());
