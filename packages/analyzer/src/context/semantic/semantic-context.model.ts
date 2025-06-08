import {
  $AnalyzerType,
  DiagnosticService,
  NominalTypeDeclarationSemantic,
  Semantic,
  SemanticProviderResolver,
  SemanticScope,
} from '#analyzer';
import {Boolean2, Nothing, Text, TextRange, TextReference, Uri} from '#common';
import {Brand, Model} from '#typing';

export type SemanticContext = Model &
  Brand<'Analyzer.SemanticContext'> & {
    uri: Uri;
    scope: SemanticScope;
    diagnostic: DiagnosticService;
    semanticProviderResolver: SemanticProviderResolver;

    literal: {
      stringDeclaration: NominalTypeDeclarationSemantic;
    };

    pushScope(isType?: Boolean2): void;
    popScope(): void;
    getReference(range: TextRange): TextReference;
    provideSemantic(uri: Uri): Semantic | Nothing;
    addError(range: TextRange, text: Text): void;
  };

export const $SemanticContext = () => $AnalyzerType<SemanticContext>('SemanticContext');
