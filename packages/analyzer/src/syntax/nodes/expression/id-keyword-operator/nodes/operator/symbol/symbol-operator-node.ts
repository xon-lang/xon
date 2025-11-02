import {$AnalyzerType, $OperatorNode, OperatorNode} from '#analyzer';
import {Brand} from '#core';

export type SymbolOperatorNode = OperatorNode & Brand<'Analyzer.SymbolOperatorNode'>;

export const $SymbolOperatorNode = () =>
  $AnalyzerType<SymbolOperatorNode>('SymbolOperatorNode', $OperatorNode());
