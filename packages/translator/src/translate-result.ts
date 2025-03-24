// import {$Text, Boolean2, Text} from '#common';
// import {$TranslatorType} from '#translator';
// import {Brand, is, Model} from '#typing';

// export type TranslateResult = Model &
//   Brand<'Translator.TranslateResult'> & {
//     value: string;
//     isBody: Boolean2;

//     toString(): string;
//   };

// export const $TranslateResult = () => $TranslatorType('TranslateResult');

// export function newTranslateResult(value: Text | string, isBody = false): TranslateResult {
//   return {
//     $: $TranslateResult(),
//     value: is(value, $Text()) ? value.toNativeString() : value,
//     isBody,

//     toString(): string {
//       return this.value;
//     },
//   };
// }
