import {$AnalyzerType, $SymbolOperatorNode, SymbolOperatorNode} from '#analyzer';
import {Brand} from '#core';

export type ExclamationOperatorNode = SymbolOperatorNode & Brand<'Analyzer.ExclamationOperatorNode'>;

export const $ExclamationOperatorNode = () =>
  $AnalyzerType<ExclamationOperatorNode>('ExclamationOperatorNode', $SymbolOperatorNode());
