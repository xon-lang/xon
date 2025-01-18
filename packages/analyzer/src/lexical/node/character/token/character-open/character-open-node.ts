import {$LexicalNode2, LexicalNode2, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type CharacterOpenNode = LexicalNode2 & Brand<'Analyzer.CharacterOpenNode'>;

export const $CharacterOpenNode = analyzerPackageType<CharacterOpenNode>('CharacterOpenNode', $LexicalNode2);
