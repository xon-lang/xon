import {$LexicalNode2, LexicalNode2, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type CommentBlockOpenNode = LexicalNode2 & Brand<'Analyzer.CommentBlockOpenNode'>;

export const $CommentBlockOpenNode = analyzerPackageType<CommentBlockOpenNode>(
  'CommentBlockOpenNode',
  $LexicalNode2,
);
