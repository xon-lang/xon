import {LexicalNode, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type CharacterCloseNode = LexicalNode & Brand<'Analyzer.CharacterCloseNode'>;

export const $CharacterCloseNode = analyzerPackageType<CharacterCloseNode>('CharacterCloseNode', LexicalNode);
