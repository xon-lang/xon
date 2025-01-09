import {$LexicalNode2, LexicalNode2, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type DocumentationOpenNode = LexicalNode2 & Brand<'Analyzer.DocumentationOpenNode'>;

export const $DocumentationOpenNode = analyzerPackageType<DocumentationOpenNode>(
  'DocumentationOpenNode',
  $LexicalNode2,
);
