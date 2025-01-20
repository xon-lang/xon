import {$OperatorNode, OperatorNode, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type ControlOperatorNode = OperatorNode & Brand<'Analyzer.ControlOperatorNode'>;

export const $ControlOperatorNode = analyzerPackageType<ControlOperatorNode>(
  'ControlOperatorNode',
  $OperatorNode,
);
