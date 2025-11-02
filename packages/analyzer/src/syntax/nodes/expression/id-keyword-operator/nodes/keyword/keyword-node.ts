import {$AnalyzerType, $LexicalNode, LexicalNode} from '#analyzer';
import {Brand} from '#core';

export type KeywordNode = LexicalNode & Brand<'Analyzer.KeywordNode'>;

export const $KeywordNode = () => $AnalyzerType<KeywordNode>('KeywordNode', $LexicalNode());
