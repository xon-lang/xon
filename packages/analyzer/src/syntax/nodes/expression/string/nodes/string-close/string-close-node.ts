import {$AnalyzerType, $LexicalNode, LexicalNode} from '#analyzer';
import {Brand} from '#core';

export type StringCloseNode = LexicalNode & Brand<'Analyzer.StringCloseNode'>;

export const $StringCloseNode = () => $AnalyzerType<StringCloseNode>('StringCloseNode', $LexicalNode());
