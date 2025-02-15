import {Text} from '#common';
import {$TranslatorType} from '#translator';
import {Model} from '#typing';

export type Translator = Model & {
  translate(): Text;
};

export const $Translator = () => $TranslatorType('Translator');
