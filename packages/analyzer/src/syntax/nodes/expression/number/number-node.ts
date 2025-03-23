import {$AnalyzerType, $ExpressionNode, ExpressionNode} from '#analyzer';
import {Brand} from '#typing';

export type NumberNode = ExpressionNode & Brand<'Analyzer.NumberNode'>;

export const $NumberNode = () => $AnalyzerType<NumberNode>('NumberNode', $ExpressionNode());
