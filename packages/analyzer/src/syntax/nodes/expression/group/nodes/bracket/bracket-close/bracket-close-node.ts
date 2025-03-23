import {$AnalyzerType, $GroupCloseNode, GroupCloseNode} from '#analyzer';
import {Brand} from '#typing';

export type BracketCloseNode = GroupCloseNode & Brand<'Analyzer.BracketCloseNode'>;

export const $BracketCloseNode = () => $AnalyzerType<BracketCloseNode>('BracketCloseNode', $GroupCloseNode());
