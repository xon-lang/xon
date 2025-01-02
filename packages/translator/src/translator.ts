import {Text} from '#common';
import {translatorPackageType} from '#translator';
import {Model} from '#typing';

export type Translator = Model & {
  translate(): Text;
};

export const $Translator = translatorPackageType('Translator');
