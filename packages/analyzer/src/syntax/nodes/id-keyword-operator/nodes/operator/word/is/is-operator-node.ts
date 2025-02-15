import {$AnalyzerType, $WordOperatorNode, WordOperatorNode} from '#analyzer';
import {Brand} from '#typing';

export type IsOperatorNode = WordOperatorNode & Brand<'Analyzer.IsOperatorNode'>;

export const $IsOperatorNode = () => $AnalyzerType<IsOperatorNode>('IsOperatorNode', $WordOperatorNode());
