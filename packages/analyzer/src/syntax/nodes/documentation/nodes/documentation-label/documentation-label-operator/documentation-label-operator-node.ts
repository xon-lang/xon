import {$AnalyzerType, $LexicalNode, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type DocumentationLabelOperatorNode = LexicalNode & Brand<'Analyzer.DocumentationLabelOperatorNode'>;

export const $DocumentationLabelOperatorNode = () =>
  $AnalyzerType<DocumentationLabelOperatorNode>('DocumentationLabelOperatorNode', $LexicalNode());
