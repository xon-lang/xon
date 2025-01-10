import {$LexicalNode2, LexicalNode2, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type CharOpenNode = LexicalNode2 & Brand<'Analyzer.CharOpenNode'>;

export const $CharOpenNode = analyzerPackageType<CharOpenNode>('CharOpenNode', $LexicalNode2);
