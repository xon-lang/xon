import {$LexicalNode, LexicalNode, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type DocumentationDescriptionNode = LexicalNode & Brand<'Analyzer.DocumentationDescriptionNode'>;

export const $DocumentationDescriptionNode = analyzerPackageType<DocumentationDescriptionNode>(
  'DocumentationDescriptionNode',
  $LexicalNode,
);
