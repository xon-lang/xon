import {$AnalyzerType, $SymbolOperatorNode, SymbolOperatorNode} from '#analyzer';
import {Brand} from '#core';

export type TypeOperatorNode = SymbolOperatorNode & Brand<'Analyzer.TypeOperatorNode'>;

export const $TypeOperatorNode = () =>
  $AnalyzerType<TypeOperatorNode>('TypeOperatorNode', $SymbolOperatorNode());
