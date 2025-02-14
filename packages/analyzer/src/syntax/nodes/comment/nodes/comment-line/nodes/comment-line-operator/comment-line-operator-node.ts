import {analyzerPackageType, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type CommentLineOperatorNode = LexicalNode & Brand<'Analyzer.CommentLineOperatorNode'>;

export const $CommentLineOperatorNode = analyzerPackageType<CommentLineOperatorNode>(
  'CommentLineOperatorNode',
  LexicalNode,
);
