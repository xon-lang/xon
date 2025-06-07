import {$AnalyzerType, SemanticProvider} from '#analyzer';
import {Nothing, Uri} from '#common';
import {Brand, Model} from '#typing';

export type SemanticProviderResolver = Model &
  Brand<'Analyzer.SemanticProviderResolver'> & {
    resolve(uri: Uri): SemanticProvider | Nothing;
  };

export const $SemanticProviderResolver = () =>
  $AnalyzerType<SemanticProviderResolver>('SemanticProviderResolver');
