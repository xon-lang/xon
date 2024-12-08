import {Model_V2, String2} from '#common';
import {translatorPackageType} from '#translator';

export type Translator = Model_V2 & {
  translate(): String2;
};

export const $Translator = translatorPackageType('Translator');
