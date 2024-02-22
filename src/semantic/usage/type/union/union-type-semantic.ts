import { String2 } from '../../../../lib/core';
import { SourceReference } from '../../../../source/source-reference';
import { DeclarationSemantic } from '../../../declaration/declaration-semantic';
import { $Semantic } from '../../../semantic';
import { TypeSemantic } from '../type-semantic';

export interface IdTypeSemantic extends TypeSemantic {
  $: $Semantic.ID_TYPE;
}

export function idTypeSemantic(reference: SourceReference, declaration: DeclarationSemantic): TypeSemantic {
  const semantic: TypeSemantic = {
    $: $Semantic.ID_TYPE,
    reference,
    declaration,

    attributes(): Record<String2, TypeSemantic[]> {
      return {};
    },
  };

  declaration.usages.push(semantic);

  return semantic;
}
