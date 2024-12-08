import {Model, String2} from '#common';
import {translatorPackageType} from '#translator';

export type Translator = Model & {
  translate(): String2;
};

export const $Translator = translatorPackageType('Translator');
