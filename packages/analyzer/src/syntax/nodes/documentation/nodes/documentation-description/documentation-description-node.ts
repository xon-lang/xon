import {$AnalyzerType, $LexicalNode, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type DocumentationDescriptionNode = LexicalNode & Brand<'Analyzer.DocumentationDescriptionNode'>;

export const $DocumentationDescriptionNode = () =>
  $AnalyzerType<DocumentationDescriptionNode>('DocumentationDescriptionNode', $LexicalNode());
