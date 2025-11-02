import {$AnalyzerType, $LexicalNode, LexicalNode} from '#analyzer';
import {Brand} from '#core';

export type StringContentNode = LexicalNode & Brand<'Analyzer.StringContentNode'>;

export const $StringContentNode = () => $AnalyzerType<StringContentNode>('StringContentNode', $LexicalNode());
