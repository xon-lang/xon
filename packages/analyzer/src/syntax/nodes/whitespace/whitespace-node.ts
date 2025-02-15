import {$AnalyzerType, $LexicalNode, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type WhitespaceNode = LexicalNode & Brand<'Analyzer.WhitespaceNode'>;

export const $WhitespaceNode = () => $AnalyzerType<WhitespaceNode>('WhitespaceNode', $LexicalNode());
