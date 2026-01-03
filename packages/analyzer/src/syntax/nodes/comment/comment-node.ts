import {$AnalyzerType, $SyntaxNode, LexicalNode, SyntaxNode} from '#analyzer';
import {Brand, Nothing} from '#core';

export type CommentNode = SyntaxNode &
  Brand<'Analyzer.CommentNode'> & {
    content?: LexicalNode | Nothing;
  };

export const $CommentNode = () => $AnalyzerType<CommentNode>('CommentNode', $SyntaxNode());
