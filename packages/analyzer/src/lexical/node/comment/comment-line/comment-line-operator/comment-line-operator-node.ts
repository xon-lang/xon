import {$LexicalNode2, analyzerPackageType, LexicalNode2} from '#analyzer';
import {Brand} from '#typing';

export type CommentLineOperatorNode = LexicalNode2 & Brand<'Analyzer.CommentLineOperatorNode'>;

export const $CommentLineOperatorNode = analyzerPackageType<CommentLineOperatorNode>(
  'CommentLineOperatorNode',
  $LexicalNode2,
);
