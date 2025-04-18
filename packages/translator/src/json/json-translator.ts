import {$Translator, $TranslatorType, Translator} from '#translator';

export type JsonTranslator = Translator & {};

export const $JsonTranslator = () => $TranslatorType('JsonTranslator', $Translator());

export function newJsonTranslator(): JsonTranslator {
  return {
    $: $JsonTranslator(),
  };
}
