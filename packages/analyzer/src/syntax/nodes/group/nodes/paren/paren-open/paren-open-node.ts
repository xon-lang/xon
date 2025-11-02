import {$AnalyzerType, $GroupOpenNode, GroupOpenNode} from '#analyzer';
import {Brand} from '#core';

export type ParenOpenNode = GroupOpenNode & Brand<'Analyzer.ParenOpenNode'>;

export const $ParenOpenNode = () => $AnalyzerType<ParenOpenNode>('ParenOpenNode', $GroupOpenNode());
