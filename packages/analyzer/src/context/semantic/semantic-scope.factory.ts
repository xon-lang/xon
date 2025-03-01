import {$SemanticScope, DeclarationSemantic, SemanticScope} from '#analyzer';
import {Boolean2, newArrayData, newDictionary, Nothing, Text} from '#common';

export function newSemanticScope(
  parent?: SemanticScope | Nothing,
  isTypeScope?: Boolean2 | Nothing,
): SemanticScope {
  return {
    $: $SemanticScope(),
    parent,
    isTypeScope,

    add(declaration: DeclarationSemantic): void {
      this._declarations ??= newDictionary();

      const overloads = this._declarations.get(declaration.name);

      if (overloads) {
        overloads.addFirstItem(declaration);
      } else {
        this._declarations.set(declaration.name, newArrayData([declaration]));
      }
    },

    find(name: Text): DeclarationSemantic | Nothing {
      return this._declarations?.get(name)?.first();
    },
  };
}
