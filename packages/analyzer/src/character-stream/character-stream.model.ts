import {LexicalNode} from '#analyzer';
import {$CoreType, Boolean2, Brand, Character, Integer, Model, Nothing, Text} from '#core';

export type CharacterStream = Model &
  Brand<'Core.CharacterStream'> & {
    takeWhile(
      predicate: (character: Character, index: Integer, chunk: Text) => Boolean2,
    ): LexicalNode | Nothing;
    takeText(text: Text): LexicalNode | Nothing;
    takeCharacter(character: Character): LexicalNode | Nothing;
    takeWord(exactWord?: Text): LexicalNode | Nothing;
  };

export const $CharacterStream = () => $CoreType<CharacterStream>('CharacterStream');
