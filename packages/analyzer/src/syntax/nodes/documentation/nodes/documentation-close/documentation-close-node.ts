import {LexicalNode, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type DocumentationCloseNode = LexicalNode & Brand<'Analyzer.DocumentationCloseNode'>;

export const $DocumentationCloseNode = analyzerPackageType<DocumentationCloseNode>(
  'DocumentationCloseNode',
  LexicalNode,
);
