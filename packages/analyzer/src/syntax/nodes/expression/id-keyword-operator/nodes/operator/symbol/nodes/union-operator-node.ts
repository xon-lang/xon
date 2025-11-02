import {$AnalyzerType, $SymbolOperatorNode, SymbolOperatorNode} from '#analyzer';
import {Brand} from '#core';

export type UnionOperatorNode = SymbolOperatorNode & Brand<'Analyzer.UnionOperatorNode'>;

export const $UnionOperatorNode = () =>
  $AnalyzerType<UnionOperatorNode>('UnionOperatorNode', $SymbolOperatorNode());
