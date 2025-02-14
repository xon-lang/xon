import {$OperatorNode, analyzerPackageType, OperatorNode} from '#analyzer';
import {Brand} from '#typing';

export type SymbolOperatorNode = OperatorNode & Brand<'Analyzer.SymbolOperatorNode'>;

export const $SymbolOperatorNode = analyzerPackageType<SymbolOperatorNode>(
  'SymbolOperatorNode',
  $OperatorNode,
);
