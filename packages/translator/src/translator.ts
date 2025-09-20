import {ModuleNode} from '#analyzer';
import {Text} from '#common';
import {$TranslatorType} from '#translator';
import {Brand, Model} from '#typing';

export type Translator = Model &
  Brand<'Translator.Translator'> & {
    translateModule(node: ModuleNode): Text;
  };

export const $Translator = () => $TranslatorType('Translator');
