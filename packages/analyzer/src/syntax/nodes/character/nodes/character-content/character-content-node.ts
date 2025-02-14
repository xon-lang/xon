import {$LexicalNode, analyzerPackageType, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type CharacterContentNode = LexicalNode & Brand<'Analyzer.CharacterContentNode'>;

export const $CharacterContentNode = analyzerPackageType<CharacterContentNode>(
  'CharacterContentNode',
  $LexicalNode,
);
