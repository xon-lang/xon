import {$AnalyzerType, $LexicalNode, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type GroupOpenNode = LexicalNode & Brand<'Analyzer.GroupOpenNode'>;

export const $GroupOpenNode = () => $AnalyzerType<GroupOpenNode>('GroupOpenNode', $LexicalNode());
