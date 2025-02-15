import {$AnalyzerType, $GroupOpenNode, GroupOpenNode} from '#analyzer';
import {Brand} from '#typing';

export type BracketOpenNode = GroupOpenNode & Brand<'Analyzer.BracketOpenNode'>;

export const $BracketOpenNode = () => $AnalyzerType<BracketOpenNode>('BracketOpenNode', $GroupOpenNode());
