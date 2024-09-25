import {Char, String2} from '#common';

// export function charData(charString: String2): CharData {
//   return {
//     _string: charString,
//   };
// }

export function stringToCharacters(string: String2): Char[] {
  const characters = string.match(/.|\s/gu)?.map((x) => x) ?? [];

  return characters;
}
