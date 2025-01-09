import {$LexicalNode2, LexicalNode2, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type CharCloseNode = LexicalNode2 & Brand<'Analyzer.CharCloseNode'>;

export const $CharCloseNode = analyzerPackageType<CharCloseNode>('CharCloseNode', $LexicalNode2);
