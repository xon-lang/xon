import { Boolean2, Nothing, String2 } from '../../../../lib/core';
import { SourceReference } from '../../../../source/source-reference';
import { DeclarationSemantic } from '../../../declaration/declaration-semantic';
import { $Semantic } from '../../../semantic';
import { TypeSemantic } from '../type-semantic';

export interface DeclarationTypeSemantic extends TypeSemantic {
  $: $Semantic.DECLARATION_TYPE;
  declaration: DeclarationSemantic;
  generics: TypeSemantic[] | Nothing;
  arguments: TypeSemantic[] | Nothing;
}

export function declarationTypeSemantic(
  reference: SourceReference,
  declaration: DeclarationSemantic,
  generics: TypeSemantic[] | Nothing,
  args: TypeSemantic[] | Nothing,
): DeclarationTypeSemantic {
  const semantic: DeclarationTypeSemantic = {
    $: $Semantic.DECLARATION_TYPE,
    reference,
    declaration,
    generics,
    arguments: args,

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
