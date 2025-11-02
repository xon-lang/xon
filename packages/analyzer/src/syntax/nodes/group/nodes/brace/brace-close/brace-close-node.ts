import {$AnalyzerType, $GroupCloseNode, GroupCloseNode} from '#analyzer';
import {Brand} from '#core';

export type BraceCloseNode = GroupCloseNode & Brand<'Analyzer.BraceCloseNode'>;

export const $BraceCloseNode = () => $AnalyzerType<BraceCloseNode>('BraceCloseNode', $GroupCloseNode());
