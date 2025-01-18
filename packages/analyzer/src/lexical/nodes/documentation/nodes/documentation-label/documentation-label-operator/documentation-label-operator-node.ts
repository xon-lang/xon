import {$LexicalNode2, analyzerPackageType, LexicalNode2} from '#analyzer';
import {Brand} from '#typing';

export type DocumentationLabelOperatorNode = LexicalNode2 & Brand<'Analyzer.DocumentationLabelOperatorNode'>;

export const $DocumentationLabelOperatorNode = analyzerPackageType<DocumentationLabelOperatorNode>(
  'DocumentationLabelOperatorNode',
  $LexicalNode2,
);
