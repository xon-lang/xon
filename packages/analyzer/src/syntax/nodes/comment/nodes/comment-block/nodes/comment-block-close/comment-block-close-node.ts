import {$AnalyzerType, $LexicalNode, LexicalNode} from '#analyzer';
import {Brand} from '#core';

export type CommentBlockCloseNode = LexicalNode & Brand<'Analyzer.CommentBlockCloseNode'>;

export const $CommentBlockCloseNode = () =>
  $AnalyzerType<CommentBlockCloseNode>('CommentBlockCloseNode', $LexicalNode());
