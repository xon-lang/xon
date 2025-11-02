import {$AnalyzerType, $GroupNode, GroupNode} from '#analyzer';
import {Brand} from '#core';

export type BracketGroupNode = GroupNode & Brand<'Analyzer.BracketGroupNode'>;

export const $BracketGroupNode = () => $AnalyzerType<BracketGroupNode>('BracketGroupNode', $GroupNode());
