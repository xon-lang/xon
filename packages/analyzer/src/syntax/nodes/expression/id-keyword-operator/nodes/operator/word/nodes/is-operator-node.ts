import {$AnalyzerType, $WordOperatorNode, WordOperatorNode} from '#analyzer';
import {Brand} from '#core';

export type IsOperatorNode = WordOperatorNode & Brand<'Analyzer.IsOperatorNode'>;

export const $IsOperatorNode = () => $AnalyzerType<IsOperatorNode>('IsOperatorNode', $WordOperatorNode());
