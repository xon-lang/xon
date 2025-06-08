import {
  $SemanticContext,
  AnalyzerDiagnosticSeverity,
  AnalyzerDiagnosticType,
  DiagnosticService,
  newDiagnostic,
  newDiagnosticService,
  newNominalTypeDeclarationSemantic,
  newSemanticProviderResolver,
  newSemanticScope,
  Semantic,
  SemanticContext,
} from '#analyzer';
import {
  Boolean2,
  newText,
  newTextRange,
  newTextReference,
  newUri,
  nothing,
  Nothing,
  Text,
  TextRange,
  TextReference,
  Uri,
} from '#common';

export function newSemanticContext(
  sourceUri?: Uri | Nothing,
  diagnostic: DiagnosticService = newDiagnosticService(),
): SemanticContext {
  sourceUri ??= newUri(newText());

  return {
    $: $SemanticContext(),
    uri: sourceUri,
    scope: newSemanticScope(),
    diagnostic,
    semanticProviderResolver: newSemanticProviderResolver(),
    literal: {
      // todo get declaration from source code ???
      stringDeclaration: newNominalTypeDeclarationSemantic(
        newTextReference(sourceUri, newTextRange()),
        newText('String'),
      ),
    },

    pushScope(isType: Boolean2): void {
      this.scope = newSemanticScope(nothing, this.scope, isType);
    },

    popScope(): void {
      if (this.scope.parent) {
        this.scope = this.scope.parent;
      }
    },

    getReference(range: TextRange): TextReference {
      return newTextReference(this.uri, range);
    },

    provideSemantic(uri: Uri): Semantic | Nothing {
      const provider = this.semanticProviderResolver.resolve(uri);

      return provider.provideSemantic(this.uri, uri);
    },

    addError(range: TextRange, text: Text): void {
      const diagnostic = newDiagnostic(
        range,
        AnalyzerDiagnosticType.Semantic,
        AnalyzerDiagnosticSeverity.Error,
        text,
      );

      this.diagnostic.add(diagnostic);
    },
  };
}
