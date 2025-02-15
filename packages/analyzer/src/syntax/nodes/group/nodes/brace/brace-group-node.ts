import {$AnalyzerType, $GroupNode, GroupNode} from '#analyzer';
import {Brand} from '#typing';

export type BraceGroupNode = GroupNode & Brand<'Analyzer.BraceGroupNode'>;

export const $BraceGroupNode = () => $AnalyzerType<BraceGroupNode>('BraceGroupNode', $GroupNode());
