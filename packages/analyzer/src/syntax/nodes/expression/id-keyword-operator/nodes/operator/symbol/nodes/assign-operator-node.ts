import {$AnalyzerType, $SymbolOperatorNode, SymbolOperatorNode} from '#analyzer';
import {Brand} from '#typing';

export type AssignOperatorNode = SymbolOperatorNode & Brand<'Analyzer.AssignOperatorNode'>;

export const $AssignOperatorNode = () =>
  $AnalyzerType<AssignOperatorNode>('AssignOperatorNode', $SymbolOperatorNode());
