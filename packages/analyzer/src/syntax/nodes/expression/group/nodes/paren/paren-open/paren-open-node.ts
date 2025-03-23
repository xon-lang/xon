import {$AnalyzerType, $GroupOpenNode, GroupOpenNode} from '#analyzer';
import {Brand} from '#typing';

export type ParenOpenNode = GroupOpenNode & Brand<'Analyzer.ParenOpenNode'>;

export const $ParenOpenNode = () => $AnalyzerType<ParenOpenNode>('ParenOpenNode', $GroupOpenNode());
