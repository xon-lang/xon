import {$OperatorNode, OperatorNode, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type ControlKeywordNode = OperatorNode & Brand<'Analyzer.ControlKeywordNode'>;

export const $ControlKeywordNode = analyzerPackageType<ControlKeywordNode>(
  'ControlKeywordNode',
  $OperatorNode,
);
