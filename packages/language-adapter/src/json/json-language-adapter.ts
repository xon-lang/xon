import {Brand} from '#core';
import {$LanguageAdapterType, LanguageAdapter} from '#language-adapter';

export type JsonLanguageAdapter = LanguageAdapter & Brand<'LanguageAdapter.JsonLanguageAdapter'> & {};

export const $JsonLanguageAdapter = () => $LanguageAdapterType('JsonLanguageAdapter');
