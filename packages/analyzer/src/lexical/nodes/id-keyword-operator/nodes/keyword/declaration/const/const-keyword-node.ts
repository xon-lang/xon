import {$DeclarationKeywordNode, DeclarationKeywordNode, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type ConstKeywordNode = DeclarationKeywordNode & Brand<'Analyzer.ConstKeywordNode'>;

export const $ConstKeywordNode = analyzerPackageType<ConstKeywordNode>(
  'ConstKeywordNode',
  $DeclarationKeywordNode,
);
