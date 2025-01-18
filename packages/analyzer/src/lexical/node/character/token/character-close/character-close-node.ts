import {$LexicalNode2, LexicalNode2, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type CharacterCloseNode = LexicalNode2 & Brand<'Analyzer.CharacterCloseNode'>;

export const $CharacterCloseNode = analyzerPackageType<CharacterCloseNode>(
  'CharacterCloseNode',
  $LexicalNode2,
);
