import {$AnalyzerType, $LexicalNode, LexicalNode} from '#analyzer';
import {Brand} from '#core';

export type CommentLineContentNode = LexicalNode & Brand<'Analyzer.CommentLineContentNode'>;

export const $CommentLineContentNode = () =>
  $AnalyzerType<CommentLineContentNode>('CommentLineContentNode', $LexicalNode());
