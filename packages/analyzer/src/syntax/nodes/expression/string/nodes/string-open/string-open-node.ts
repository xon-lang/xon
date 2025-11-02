import {$AnalyzerType, $LexicalNode, LexicalNode} from '#analyzer';
import {Brand} from '#core';

export type StringOpenNode = LexicalNode & Brand<'Analyzer.StringOpenNode'>;

export const $StringOpenNode = () => $AnalyzerType<StringOpenNode>('StringOpenNode', $LexicalNode());
