import {$AnalyzerType, $SyntaxNode, LexicalNode, SyntaxNode} from '#analyzer';
import {Brand, Nothing} from '#core';

export type CommentNode = SyntaxNode &
  Brand<'Analyzer.CommentNode'> & {
    contentNode?: LexicalNode | Nothing;
  };

export const $CommentNode = () => $AnalyzerType<CommentNode>('CommentNode', $SyntaxNode());
