import {$AnalyzerType, $LexicalNode, LexicalNode} from '#analyzer';
import {Brand} from '#core';

export type RadixPointNode = LexicalNode & Brand<'Analyzer.RadixPointNode'>;

export const $RadixPointNode = () => $AnalyzerType<RadixPointNode>('RadixPointNode', $LexicalNode());
