import {$AnalyzerType, $SymbolOperatorNode, SymbolOperatorNode} from '#analyzer';
import {Brand} from '#core';

export type PlusOperatorNode = SymbolOperatorNode & Brand<'Analyzer.PlusOperatorNode'>;

export const $PlusOperatorNode = () =>
  $AnalyzerType<PlusOperatorNode>('PlusOperatorNode', $SymbolOperatorNode());
