import {$LexicalNode2, analyzerPackageType, LexicalNode2} from '#analyzer';
import {Brand} from '#typing';

export type CommentBlockContentNode = LexicalNode2 & Brand<'Analyzer.CommentBlockContentNode'>;

export const $CommentBlockContentNode = analyzerPackageType<CommentBlockContentNode>(
  'CommentBlockContentNode',
  $LexicalNode2,
);
