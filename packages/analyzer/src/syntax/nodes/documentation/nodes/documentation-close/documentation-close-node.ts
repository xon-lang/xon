import {$AnalyzerType, $LexicalNode, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type DocumentationCloseNode = LexicalNode & Brand<'Analyzer.DocumentationCloseNode'>;

export const $DocumentationCloseNode = () =>
  $AnalyzerType<DocumentationCloseNode>('DocumentationCloseNode', $LexicalNode());
