import {$KeywordNode, KeywordNode, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type ControlKeywordNode = KeywordNode & Brand<'Analyzer.ControlKeywordNode'>;

export const $ControlKeywordNode = analyzerPackageType<ControlKeywordNode>(
  'ControlKeywordNode',
  $KeywordNode,
);
