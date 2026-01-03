import {LexicalNode} from '#analyzer';
import {$CoreType, $Type, Boolean2, Brand, Character, Integer, Model, Nothing, Text} from '#core';

export type CharacterStream = Model &
  Brand<'Core.CharacterStream'> & {
    takeWhile(
      $type: $Type,
      predicate: (character: Character, index: Integer, chunk: Text) => Boolean2,
    ): LexicalNode | Nothing;

    takeText($type: $Type, text: Text): LexicalNode | Nothing;
    takeCharacter($type: $Type, character: Character): LexicalNode | Nothing;
  };

export const $CharacterStream = () => $CoreType<CharacterStream>('CharacterStream');
