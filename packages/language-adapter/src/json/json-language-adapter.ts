import {$LanguageAdapterType, LanguageAdapter} from '#language-adapter';
import {Brand} from '#typing';

export type JsonLanguageAdapter = LanguageAdapter & Brand<'LanguageAdapter.JsonLanguageAdapter'> & {};

export const $JsonLanguageAdapter = () => $LanguageAdapterType('JsonLanguageAdapter');
