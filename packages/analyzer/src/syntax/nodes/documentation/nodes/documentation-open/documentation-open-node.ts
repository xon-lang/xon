import {$AnalyzerType, $LexicalNode, LexicalNode} from '#analyzer';
import {Brand} from '#core';

export type DocumentationOpenNode = LexicalNode & Brand<'Analyzer.DocumentationOpenNode'>;

export const $DocumentationOpenNode = () =>
  $AnalyzerType<DocumentationOpenNode>('DocumentationOpenNode', $LexicalNode());
