import {$AnalyzerType, DeclarationScope} from '#analyzer';
import {Boolean2, Uri} from '#common';
import {Brand, Model} from '#typing';

export type DeclarationScopeProvider = Model &
  Brand<'Analyzer.DeclarationScopeProvider'> & {
    canProvide(uri: Uri): Boolean2;
    //  todo 'async' ???
    provideDeclarationScope(uri: Uri): DeclarationScope;
  };

export const $DeclarationScopeProvider = () =>
  $AnalyzerType<DeclarationScopeProvider>('DeclarationScopeProvider');
