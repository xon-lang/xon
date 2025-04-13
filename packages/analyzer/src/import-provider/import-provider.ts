import {$AnalyzerType, DeclarationScope} from '#analyzer';
import {Boolean2, Nothing, Uri} from '#common';
import {Brand, Model} from '#typing';

export type ImportProvider = Model &
  Brand<'Analyzer.ImportProvider'> & {
    canProvide(uri: Uri): Boolean2;
    //  todo 'async' ???
    provideDeclarationScope(uri: Uri): DeclarationScope | Nothing;
  };

export const $ImportProvider = () => $AnalyzerType<ImportProvider>('ImportProvider');
