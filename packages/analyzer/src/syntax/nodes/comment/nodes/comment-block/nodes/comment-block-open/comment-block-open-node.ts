import {LexicalNode, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type CommentBlockOpenNode = LexicalNode & Brand<'Analyzer.CommentBlockOpenNode'>;

export const $CommentBlockOpenNode = analyzerPackageType<CommentBlockOpenNode>(
  'CommentBlockOpenNode',
  LexicalNode,
);
