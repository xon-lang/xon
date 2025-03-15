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
  Nothing,
  Text,
  TextRange,
  TextReference,
} from '#common';

export function newSemanticContext(sourceLocation?: Text | Nothing): SemanticContext {
  sourceLocation ??= newText('');

  return {
    $: $SemanticContext(),
    sourceLocation,
    scope: newSemanticScope(),
    literal: {
      // todo get declaration from source code ???
      stringDeclaration: newNominalTypeDeclarationSemantic(
        newTextReference(sourceLocation, newTextRange()),
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

    reference(range: TextRange): TextReference {
      return newTextReference(this.sourceLocation, range);
    },
  };
}
