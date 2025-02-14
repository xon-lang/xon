import {$LexicalNode2, LexicalNode2, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type DocumentationCloseNode = LexicalNode2 & Brand<'Analyzer.DocumentationCloseNode'>;

export const $DocumentationCloseNode = analyzerPackageType<DocumentationCloseNode>('DocumentationCloseNode', $LexicalNode2);
