import {String2} from '#common';
import {translatorPackageType} from '#translator';
import {Model} from '#typing';

export type Translator = Model & {
  translate(): String2;
};

export const $Translator = translatorPackageType('Translator');
