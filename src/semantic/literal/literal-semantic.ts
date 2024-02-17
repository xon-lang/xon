import { Boolean2, Something } from '../../lib/core';
import { DeclarationSemantic } from '../declaration/declaration-semantic';
import { $Semantic } from '../semantic';
import { ValueSemantic } from '../value/value-semantic';

export interface LiteralSemantic extends ValueSemantic {
  value: Something;
}

export function literalSemantic(declaration: DeclarationSemantic, value: Something): LiteralSemantic {
  return {
    $: $Semantic.LITERAL,
    declaration,
    arguments: [],
    value,

    is(type: ValueSemantic): Boolean2 {
      return this.eq(type);
    },

    eq(type: ValueSemantic): Boolean2 {
      return this.value === (type as LiteralSemantic)?.value;
    },
  };
}
