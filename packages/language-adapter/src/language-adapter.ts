import {SemanticProvider} from '#analyzer';
import {Brand, Model} from '#core';
import {$LanguageAdapterType} from '#language-adapter';
import {Translator} from '#translator';

export type LanguageAdapter = Model &
  Brand<'LanguageAdapter.LanguageAdapter'> & {
    semanticProvider: SemanticProvider;
    toXonTranslator: Translator;
    fromXonTranslator: Translator;
  };

export const $LanguageAdapter = () => $LanguageAdapterType('LanguageAdapter');
