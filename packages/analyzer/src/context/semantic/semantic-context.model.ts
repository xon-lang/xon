import {
  $AnalyzerType,
  DeclarationSemantic,
  DiagnosticService,
  Semantic,
  SemanticProviderResolver,
  SemanticScope,
} from '#analyzer';
import {Boolean2, Brand, Model, Nothing, Text, TextRange, TextReference, Uri} from '#core';

export type SemanticContext = Model &
  Brand<'Analyzer.SemanticContext'> & {
    uri: Uri;
    scope: SemanticScope;
    diagnostic: DiagnosticService;
    semanticProviderResolver: SemanticProviderResolver;

    literal: {
      stringDeclaration: DeclarationSemantic;
      arrayDeclaration: DeclarationSemantic;
    };

    pushScope(isType?: Boolean2): void;
    popScope(): void;
    getReference(range: TextRange): TextReference;
    provideSemantic(uri: Uri): Semantic | Nothing;
    addError(range: TextRange, message: Text): void;
  };

export const $SemanticContext = () => $AnalyzerType<SemanticContext>('SemanticContext');
