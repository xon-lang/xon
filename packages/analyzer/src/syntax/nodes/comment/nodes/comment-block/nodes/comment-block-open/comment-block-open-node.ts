import {$AnalyzerType, $LexicalNode, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type CommentBlockOpenNode = LexicalNode & Brand<'Analyzer.CommentBlockOpenNode'>;

export const $CommentBlockOpenNode = () =>
  $AnalyzerType<CommentBlockOpenNode>('CommentBlockOpenNode', $LexicalNode());
