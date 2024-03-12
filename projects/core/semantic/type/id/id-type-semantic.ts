import {Boolean2, Nothing, String2} from '../../../lib/core';
import {SourceReference} from '../../../source/source-reference';
import {DeclarationSemantic} from '../../declaration/declaration-semantic';
import {$Semantic} from '../../semantic';
import {TypeSemantic} from '../type-semantic';

export interface IdTypeSemantic extends TypeSemantic {
  $: $Semantic.ID_TYPE;
  declaration: DeclarationSemantic | Nothing;
  generics: TypeSemantic[] | Nothing;
}

export function idTypeSemantic(
  reference: SourceReference,
  declaration: DeclarationSemantic,
  generics: TypeSemantic[] | Nothing,
): IdTypeSemantic {
  const semantic: IdTypeSemantic = {
    $: $Semantic.ID_TYPE,
    reference,
    declaration,
    generics,

    eq(type: TypeSemantic): Boolean2 {
      return false;
    },

    is(type: TypeSemantic): Boolean2 {
      return this.eq(type);
    },

    attributes(): Record<String2, TypeSemantic[]> {
      return {};
    },
  };

  declaration.usages.push(semantic);

  return semantic;
}
