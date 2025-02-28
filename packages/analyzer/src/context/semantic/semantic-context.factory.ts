import {
  $SemanticContext,
  newNominalTypeDeclarationSemantic,
  newSemanticScope,
  SemanticContext,
} from '#analyzer';
import {Boolean2, newText} from '#common';

export function newSemanticContext(): SemanticContext {
  return {
    $: $SemanticContext(),
    scope: newSemanticScope(),
    literal: {
      stringDeclaration: newNominalTypeDeclarationSemantic(newText('String')),
    },

    pushScope(isType: Boolean2): void {
      this.scope = newSemanticScope(this.scope, isType);
    },

    popScope(): void {
      if (this.scope.parent) {
        this.scope = this.scope.parent;
      }
    },
  };
}
