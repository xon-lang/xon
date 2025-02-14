import {$ControlKeywordNode, KeywordNode, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type ReturnKeywordNode = KeywordNode & Brand<'Analyzer.ReturnKeywordNode'>;

export const $ReturnKeywordNode = analyzerPackageType<ReturnKeywordNode>(
  'ReturnKeywordNode',
  $ControlKeywordNode,
);
