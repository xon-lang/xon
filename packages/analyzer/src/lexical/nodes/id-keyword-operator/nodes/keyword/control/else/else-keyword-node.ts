import {$ControlKeywordNode, KeywordNode, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type ElseKeywordNode = KeywordNode & Brand<'Analyzer.ElseKeywordNode'>;

export const $ElseKeywordNode = analyzerPackageType<ElseKeywordNode>('ElseKeywordNode', $ControlKeywordNode);
