import {$KeywordNode, KeywordNode, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type DeclarationKeywordNode = KeywordNode & Brand<'Analyzer.DeclarationKeywordNode'>;

export const $DeclarationKeywordNode = analyzerPackageType<DeclarationKeywordNode>(
  'DeclarationKeywordNode',
  $KeywordNode,
);
