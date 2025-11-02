import {$AnalyzerType, $GroupNode, GroupNode} from '#analyzer';
import {Brand} from '#core';

export type BraceGroupNode = GroupNode & Brand<'Analyzer.BraceGroupNode'>;

export const $BraceGroupNode = () => $AnalyzerType<BraceGroupNode>('BraceGroupNode', $GroupNode());
