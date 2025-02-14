import {$LexicalNode, LexicalNode, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type CommentBlockCloseNode = LexicalNode & Brand<'Analyzer.CommentBlockCloseNode'>;

export const $CommentBlockCloseNode = analyzerPackageType<CommentBlockCloseNode>(
  'CommentBlockCloseNode',
  $LexicalNode,
);
