import {SemanticProvider} from '#analyzer';
import {$LanguageAdapterType} from '#language-adapter';
import {Translator} from '#translator';
import {Brand, Model} from '#typing';

export type LanguageAdapter = Model &
  Brand<'LanguageAdapter.LanguageAdapter'> & {
    semanticProvider: SemanticProvider;
    toXonTranslator: Translator;
    fromXonTranslator: Translator;
  };

export const $LanguageAdapter = () => $LanguageAdapterType('LanguageAdapter');
