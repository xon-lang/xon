import {$ControlKeywordNode, KeywordNode, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type IfKeywordNode = KeywordNode & Brand<'Analyzer.IfKeywordNode'>;

export const $IfKeywordNode = analyzerPackageType<IfKeywordNode>('IfKeywordNode', $ControlKeywordNode);
