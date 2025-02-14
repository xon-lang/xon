import {LexicalNode, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type DocumentationOpenNode = LexicalNode & Brand<'Analyzer.DocumentationOpenNode'>;

export const $DocumentationOpenNode = analyzerPackageType<DocumentationOpenNode>(
  'DocumentationOpenNode',
  LexicalNode,
);
