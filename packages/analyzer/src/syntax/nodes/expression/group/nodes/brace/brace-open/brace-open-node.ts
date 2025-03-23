import {$AnalyzerType, $GroupOpenNode, GroupOpenNode} from '#analyzer';
import {Brand} from '#typing';

export type BraceOpenNode = GroupOpenNode & Brand<'Analyzer.BraceOpenNode'>;

export const $BraceOpenNode = () => $AnalyzerType<BraceOpenNode>('BraceOpenNode', $GroupOpenNode());
