import {$AnalyzerType, $GroupNode, GroupNode} from '#analyzer';
import {Brand} from '#typing';

export type ParenGroupNode = GroupNode & Brand<'Analyzer.ParenGroupNode'>;

export const $ParenGroupNode = () => $AnalyzerType<ParenGroupNode>('ParenGroupNode', $GroupNode());
