import {$OperatorNode, analyzerPackageType, OperatorNode} from '#analyzer';
import {Brand} from '#typing';

export type ModifierOperatorNode = OperatorNode & Brand<'Analyzer.ModifierOperatorNode'>;

export const $ModifierOperatorNode = analyzerPackageType<ModifierOperatorNode>(
  'ModifierOperatorNode',
  $OperatorNode,
);
