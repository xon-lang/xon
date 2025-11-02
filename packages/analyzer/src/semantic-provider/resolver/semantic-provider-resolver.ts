import {$AnalyzerType, SemanticProvider} from '#analyzer';
import {Brand, Model, Uri} from '#core';

export type SemanticProviderResolver = Model &
  Brand<'Analyzer.SemanticProviderResolver'> & {
    resolve(uri: Uri): SemanticProvider;
  };

export const $SemanticProviderResolver = () =>
  $AnalyzerType<SemanticProviderResolver>('SemanticProviderResolver');
