import {$LexicalNode, LexicalNode, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type CharacterOpenNode = LexicalNode & Brand<'Analyzer.CharacterOpenNode'>;

export const $CharacterOpenNode = analyzerPackageType<CharacterOpenNode>('CharacterOpenNode', $LexicalNode);
