import {$AnalyzerType, $DeclarationKeywordNode, DeclarationKeywordNode} from '#analyzer';
import {Brand} from '#core';

export type TypeKeywordNode = DeclarationKeywordNode & Brand<'Analyzer.TypeKeywordNode'>;

export const $TypeKeywordNode = () =>
  $AnalyzerType<TypeKeywordNode>('TypeKeywordNode', $DeclarationKeywordNode());
