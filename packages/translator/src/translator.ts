import {ModuleNode} from '#analyzer';
import {Brand, Model, Text} from '#core';
import {$TranslatorType} from '#translator';

export type Translator = Model &
  Brand<'Translator.Translator'> & {
    translateModule(node: ModuleNode): Text;
  };

export const $Translator = () => $TranslatorType('Translator');
