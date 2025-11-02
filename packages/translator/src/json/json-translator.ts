import {ModuleNode} from '#analyzer';
import {newText, Text} from '#core';
import {$Translator, $TranslatorType, Translator} from '#translator';

export type JsonTranslator = Translator & {};

export const $JsonTranslator = () => $TranslatorType('JsonTranslator', $Translator());

export function newJsonTranslator(): JsonTranslator {
  return {
    $: $JsonTranslator(),

    translateModule(node: ModuleNode): Text {
      return newText(`${node.range.start.index}`);
    },
  };
}
