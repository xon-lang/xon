import {$AnalyzerType, SemanticScope} from '#analyzer';
import {Boolean2, Nothing, Uri} from '#common';
import {Brand, Model} from '#typing';

export type SemanticProvider = Model &
  Brand<'Analyzer.SemanticProvider'> & {
    canProvide(uri: Uri): Boolean2;
    provideSemantic(uri: Uri): SemanticScope | Nothing;
  };

export const $SemanticProvider = () => $AnalyzerType<SemanticProvider>('SemanticProvider');
