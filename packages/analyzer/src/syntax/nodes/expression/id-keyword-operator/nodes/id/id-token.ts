import {$AnalyzerType, $LexicalNode, LexicalNode} from '#analyzer';
import {Brand} from '#core';

export type IdToken = LexicalNode & Brand<'Analyzer.IdNode'>;

export const $IdToken = () => $AnalyzerType<IdToken>('IdToken', $LexicalNode());
