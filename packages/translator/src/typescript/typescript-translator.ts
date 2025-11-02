import {ModuleNode} from '#analyzer';
import {Text} from '#core';
import {$Translator, $TranslatorType, translateTypescriptModule, Translator} from '#translator';
import {Brand} from '#typing';

export type TypescriptTranslator = Translator & Brand<'Translator.TypescriptTranslator'> & {};

export const $TypescriptTranslator = () => $TranslatorType('TypescriptTranslator', $Translator());

export function newTypescriptTranslator(): TypescriptTranslator {
  return {
    $: $TypescriptTranslator(),

    translateModule(node: ModuleNode): Text {
      return translateTypescriptModule(node);
    },
  };
}
