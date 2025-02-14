import {$LexicalNode, analyzerPackageType, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type DocumentationLabelOperatorNode = LexicalNode & Brand<'Analyzer.DocumentationLabelOperatorNode'>;

export const $DocumentationLabelOperatorNode = analyzerPackageType<DocumentationLabelOperatorNode>(
  'DocumentationLabelOperatorNode',
  $LexicalNode,
);
