import {$AnalyzerType, $LexicalNode, LexicalNode} from '#analyzer';
import {Brand} from '#core';

export type CommentBlockContentNode = LexicalNode & Brand<'Analyzer.CommentBlockContentNode'>;

export const $CommentBlockContentNode = () =>
  $AnalyzerType<CommentBlockContentNode>('CommentBlockContentNode', $LexicalNode());
