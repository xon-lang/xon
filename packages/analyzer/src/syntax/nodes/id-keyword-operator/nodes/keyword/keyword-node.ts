import {analyzerPackageType, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type KeywordNode = LexicalNode & Brand<'Analyzer.KeywordNode'>;

export const $KeywordNode = analyzerPackageType<KeywordNode>('KeywordNode', LexicalNode);
