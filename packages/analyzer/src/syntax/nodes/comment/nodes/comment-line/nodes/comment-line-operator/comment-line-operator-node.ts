import {$AnalyzerType, $LexicalNode, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type CommentLineOperatorNode = LexicalNode & Brand<'Analyzer.CommentLineOperatorNode'>;

export const $CommentLineOperatorNode = () =>
  $AnalyzerType<CommentLineOperatorNode>('CommentLineOperatorNode', $LexicalNode());
