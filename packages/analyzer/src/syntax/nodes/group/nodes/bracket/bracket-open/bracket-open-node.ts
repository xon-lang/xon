import {$AnalyzerType, $GroupOpenNode, GroupOpenNode} from '#analyzer';
import {Brand} from '#core';

export type BracketOpenNode = GroupOpenNode & Brand<'Analyzer.BracketOpenNode'>;

export const $BracketOpenNode = () => $AnalyzerType<BracketOpenNode>('BracketOpenNode', $GroupOpenNode());
