import {$LexicalNode2, analyzerPackageType, LexicalNode2} from '#analyzer';
import {Brand} from '#typing';

export type CharacterContentNode = LexicalNode2 & Brand<'Analyzer.CharacterContentNode'>;

export const $CharacterContentNode = analyzerPackageType<CharacterContentNode>(
  'CharacterContentNode',
  $LexicalNode2,
);
