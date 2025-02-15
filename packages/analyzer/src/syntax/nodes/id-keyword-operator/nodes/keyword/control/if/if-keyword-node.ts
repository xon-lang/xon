import {$AnalyzerType, $ControlKeywordNode, KeywordNode} from '#analyzer';
import {Brand} from '#typing';

export type IfKeywordNode = KeywordNode & Brand<'Analyzer.IfKeywordNode'>;

export const $IfKeywordNode = () => $AnalyzerType<IfKeywordNode>('IfKeywordNode', $ControlKeywordNode());
