import {$DeclarationKeywordNode, DeclarationKeywordNode, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type TypeKeywordNode = DeclarationKeywordNode & Brand<'Analyzer.TypeKeywordNode'>;

export const $TypeKeywordNode = analyzerPackageType<TypeKeywordNode>(
  'TypeKeywordNode',
  $DeclarationKeywordNode,
);
