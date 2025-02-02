import {$KeywordNode, analyzerPackageType, KeywordNode} from '#analyzer';
import {Brand} from '#typing';

export type ModifierKeywordNode = KeywordNode & Brand<'Analyzer.ModifierKeywordNode'>;

export const $ModifierKeywordNode = analyzerPackageType<ModifierKeywordNode>(
  'ModifierKeywordNode',
  $KeywordNode,
);
