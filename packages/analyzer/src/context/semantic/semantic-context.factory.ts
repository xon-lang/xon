import {$SemanticContext, newSemanticScope, SemanticContext, SemanticToken} from '#analyzer';
import {Boolean2, newArrayData} from '#common';

export function newSemanticContext(): SemanticContext {
  return {
    $: $SemanticContext(),
    tokens: newArrayData(),
    scope: newSemanticScope(),

    addToken(token: SemanticToken): void {
      this.tokens.addLastItem(token);
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
