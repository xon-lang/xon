import {LexicalNode} from '#analyzer';
import {$CoreType, $Type, Boolean2, Brand, Character, Integer, Model, Nothing, Text} from '#core';

export type CharacterStream = Model &
  Brand<'Core.CharacterStream'> & {
    takeWhile<T extends $Type>(
      $type: $Type,
      predicate: (character: Character, index: Integer, chunk: Text) => Boolean2,
    ): (T['type'] & LexicalNode) | Nothing;

    takeText<T extends $Type>($type: T, text: Text): (T['type'] & LexicalNode) | Nothing;
    takeCharacter<T extends $Type>($type: T, character: Character): (T['type'] & LexicalNode) | Nothing;
    takeWord<T extends $Type>($type: T, word?: Text): (T['type'] & LexicalNode) | Nothing;
  };

export const $CharacterStream = () => $CoreType<CharacterStream>('CharacterStream');
