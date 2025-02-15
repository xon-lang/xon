import {$AnalyzerType, $LexicalNode, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type GroupCloseNode = LexicalNode & Brand<'Analyzer.GroupCloseNode'>;

export const $GroupCloseNode = () => $AnalyzerType<GroupCloseNode>('GroupCloseNode', $LexicalNode());
