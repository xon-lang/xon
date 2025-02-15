import {$AnalyzerType, $OperatorNode, OperatorNode} from '#analyzer';
import {Brand} from '#typing';

export type WordOperatorNode = OperatorNode & Brand<'Analyzer.WordOperatorNode'>;

export const $WordOperatorNode = () => $AnalyzerType<WordOperatorNode>('WordOperatorNode', $OperatorNode());
