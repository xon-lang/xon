import { Nothing, String2 } from '../../../lib/core';
import { SourceReference } from '../../../source/source-reference';
import { DeclarationSemantic } from '../../declaration/declaration-semantic';
import { $Semantic } from '../../semantic';
import { UsageSemantic } from '../usage-semantic';

export interface TypeSemantic extends UsageSemantic {
  $: $Semantic.TYPE;
  generics: (UsageSemantic | Nothing)[] | Nothing;

  attributes(): Record<String2, TypeSemantic[]>;
}

export function typeSemantic(
  reference: SourceReference,
  declaration: DeclarationSemantic,
  generics: (UsageSemantic | Nothing)[] | Nothing,
): TypeSemantic {
  const semantic: TypeSemantic = {
    $: $Semantic.TYPE,
    reference,
    declaration,
    generics,

    attributes(): Record<String2, TypeSemantic[]> {
      return {};
    },
  };

  declaration.usages.push(semantic);

  return semantic;
}
