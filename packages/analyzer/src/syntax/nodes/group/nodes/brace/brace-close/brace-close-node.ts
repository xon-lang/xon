import {$AnalyzerType, $GroupCloseNode, GroupCloseNode} from '#analyzer';
import {Brand} from '#typing';

export type BraceCloseNode = GroupCloseNode & Brand<'Analyzer.BraceCloseNode'>;

export const $BraceCloseNode = () => $AnalyzerType<BraceCloseNode>('BraceCloseNode', $GroupCloseNode());
