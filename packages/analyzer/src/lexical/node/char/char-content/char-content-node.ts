import {$LexicalNode2, analyzerPackageType, LexicalNode2} from '#analyzer';
import {Brand} from '#typing';

export type CharContentNode = LexicalNode2 & Brand<'Analyzer.CharContentNode'>;

export const $CharContentNode = analyzerPackageType<CharContentNode>('CharContentNode', $LexicalNode2);
