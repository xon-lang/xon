import {$AnalyzerType, $SyntaxNode, LexicalNode, SyntaxNode} from '#analyzer';
import {Nothing} from '#core';
import {Brand} from '#typing';

export type CommentNode = SyntaxNode &
  Brand<'Analyzer.CommentNode'> & {
    contentNode?: LexicalNode | Nothing;
  };

export const $CommentNode = () => $AnalyzerType<CommentNode>('CommentNode', $SyntaxNode());
