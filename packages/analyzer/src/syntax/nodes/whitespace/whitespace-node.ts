import {$AnalyzerType, $LexicalNode, LexicalNode} from '#analyzer';
import {Brand} from '#core';

export type WhitespaceNode = LexicalNode & Brand<'Analyzer.WhitespaceNode'>;

export const $WhitespaceNode = () => $AnalyzerType<WhitespaceNode>('WhitespaceNode', $LexicalNode());
