import {
  $SemanticContext,
  newNominalTypeDeclarationSemantic,
  newSemanticScope,
  SemanticContext,
} from '#analyzer';
import {
  Boolean2,
  newText,
  newTextRange,
  newTextReference,
  newUri,
  Nothing,
  TextRange,
  TextReference,
  Uri,
} from '#common';

export function newSemanticContext(sourceUri?: Uri | Nothing): SemanticContext {
  sourceUri ??= newUri(newText());

  return {
    $: $SemanticContext(),
    sourceUri,
    scope: newSemanticScope(),
    literal: {
      // todo get declaration from source code ???
      stringDeclaration: newNominalTypeDeclarationSemantic(
        newTextReference(sourceUri, newTextRange()),
        newText('String'),
      ),
    },

    pushScope(isType: Boolean2): void {
      this.scope = newSemanticScope(this.scope, isType);
    },

    popScope(): void {
      if (this.scope.parent) {
        this.scope = this.scope.parent;
      }
    },

    getReference(range: TextRange): TextReference {
      return newTextReference(this.sourceUri, range);
    },
  };
}
