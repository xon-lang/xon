import {$LexicalNode2, LexicalNode2, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type DocumentationDescriptionNode = LexicalNode2 & Brand<'Analyzer.DocumentationDescriptionNode'>;

export const $DocumentationDescriptionNode = analyzerPackageType<DocumentationDescriptionNode>(
  'DocumentationDescriptionNode',
  $LexicalNode2,
);
