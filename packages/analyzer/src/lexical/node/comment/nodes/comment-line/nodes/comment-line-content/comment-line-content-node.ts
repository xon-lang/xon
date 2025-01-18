import {$LexicalNode2, analyzerPackageType, LexicalNode2} from '#analyzer';
import {Brand} from '#typing';

export type CommentLineContentNode = LexicalNode2 & Brand<'Analyzer.CommentLineContentNode'>;

export const $CommentLineContentNode = analyzerPackageType<CommentLineContentNode>(
  'CommentLineContentNode',
  $LexicalNode2,
);
