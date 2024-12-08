import {Model_V2, String2} from '#common';
import {corePackageType} from '#core';

export type Translator = Model_V2 & {
  translate(): String2;
};

export const $Translator = translatorPackageType('Translator');
