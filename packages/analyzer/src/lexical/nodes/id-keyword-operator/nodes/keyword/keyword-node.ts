import {$LexicalNode2, analyzerPackageType, LexicalNode2} from '#analyzer';
import {Brand} from '#typing';

export type KeywordNode = LexicalNode2 & Brand<'Analyzer.KeywordNode'>;

export const $KeywordNode = analyzerPackageType<KeywordNode>('KeywordNode', $LexicalNode2);
