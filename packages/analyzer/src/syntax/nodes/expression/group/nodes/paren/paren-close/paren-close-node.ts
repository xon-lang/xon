import {$AnalyzerType, $GroupCloseNode, GroupCloseNode} from '#analyzer';
import {Brand} from '#typing';

export type ParenCloseNode = GroupCloseNode & Brand<'Analyzer.ParenCloseNode'>;

export const $ParenCloseNode = () => $AnalyzerType<ParenCloseNode>('ParenCloseNode', $GroupCloseNode());
