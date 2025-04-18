import {$TranslatorType} from '#translator';
import {Brand, Model} from '#typing';

export type Translator = Model & Brand<'Translator.Translator'> & {};

export const $Translator = () => $TranslatorType('Translator');
