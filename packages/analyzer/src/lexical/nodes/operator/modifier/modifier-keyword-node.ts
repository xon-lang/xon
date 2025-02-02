import {$OperatorNode, analyzerPackageType, OperatorNode} from '#analyzer';
import {Brand} from '#typing';

export type ModifierKeywordNode = OperatorNode & Brand<'Analyzer.ModifierKeywordNode'>;

export const $ModifierKeywordNode = analyzerPackageType<ModifierKeywordNode>(
  'ModifierKeywordNode',
  $OperatorNode,
);
