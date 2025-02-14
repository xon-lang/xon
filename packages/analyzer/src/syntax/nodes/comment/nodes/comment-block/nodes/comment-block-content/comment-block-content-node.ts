import {$LexicalNode, analyzerPackageType, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type CommentBlockContentNode = LexicalNode & Brand<'Analyzer.CommentBlockContentNode'>;

export const $CommentBlockContentNode = analyzerPackageType<CommentBlockContentNode>(
  'CommentBlockContentNode',
  $LexicalNode,
);
