import {$AnalyzerType, $SyntaxNode, SyntaxNode} from '#analyzer';
import {Brand} from '#typing';

export type ExpressionNode = SyntaxNode & Brand<'Analyzer.ExpressionNode'> & {};

export const $ExpressionNode = () => $AnalyzerType<ExpressionNode>('ExpressionNode', $SyntaxNode());
