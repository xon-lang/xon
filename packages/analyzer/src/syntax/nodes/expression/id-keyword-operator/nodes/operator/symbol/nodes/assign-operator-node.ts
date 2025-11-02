import {$AnalyzerType, $SymbolOperatorNode, SymbolOperatorNode} from '#analyzer';
import {Brand} from '#core';

export type AssignOperatorNode = SymbolOperatorNode & Brand<'Analyzer.AssignOperatorNode'>;

export const $AssignOperatorNode = () =>
  $AnalyzerType<AssignOperatorNode>('AssignOperatorNode', $SymbolOperatorNode());
