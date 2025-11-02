import {$AnalyzerType, $LexicalNode, LexicalNode} from '#analyzer';
import {Brand} from '#core';

export type GroupCloseNode = LexicalNode & Brand<'Analyzer.GroupCloseNode'>;

export const $GroupCloseNode = () => $AnalyzerType<GroupCloseNode>('GroupCloseNode', $LexicalNode());
