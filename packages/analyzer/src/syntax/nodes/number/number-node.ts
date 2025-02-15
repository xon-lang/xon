import {$AnalyzerType, $SyntaxNode, SyntaxNode} from '#analyzer';
import {Brand} from '#typing';

export type NumberNode = SyntaxNode & Brand<'Analyzer.NumberNode'>;

export const $NumberNode = () => $AnalyzerType<NumberNode>('NumberNode', $SyntaxNode());
