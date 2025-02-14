import {$LexicalNode, analyzerPackageType, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type CommentLineContentNode = LexicalNode & Brand<'Analyzer.CommentLineContentNode'>;

export const $CommentLineContentNode = analyzerPackageType<CommentLineContentNode>(
  'CommentLineContentNode',
  $LexicalNode,
);
