import {$OperatorNode, analyzerPackageType, OperatorNode} from '#analyzer';
import {Brand} from '#typing';

export type KeywordOperatorNode = OperatorNode & Brand<'Analyzer.KeywordOperatorNode'>;

export const $KeywordOperatorNode = analyzerPackageType<KeywordOperatorNode>(
  'KeywordOperatorNode',
  $OperatorNode,
);
