import {$AnalyzerType, $LexicalNode, $SyntaxNode, LexicalNode, newSyntaxNode, SyntaxNode} from '#analyzer';
import {Brand} from '#core';

export type JoiningStartNode = LexicalNode & Brand<'Analyzer.JoiningNode'> ;

export const $JoiningStartNode = () => $AnalyzerType<JoiningStartNode>('JoiningStartNode', $LexicalNode());

