import {$AnalyzerType, $WordOperatorNode, WordOperatorNode} from '#analyzer';
import {Brand} from '#typing';

export type AsOperatorNode = WordOperatorNode & Brand<'Analyzer.AsOperatorNode'>;

export const $AsOperatorNode = () => $AnalyzerType<AsOperatorNode>('AsOperatorNode', $WordOperatorNode());
