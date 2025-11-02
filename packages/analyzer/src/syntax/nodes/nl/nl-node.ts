import {$AnalyzerType, $LexicalNode, LexicalNode} from '#analyzer';
import {Brand} from '#core';

export type NlNode = LexicalNode & Brand<'Analyzer.NlNode'>;

export const $NlNode = () => $AnalyzerType<NlNode>('NlNode', $LexicalNode());
