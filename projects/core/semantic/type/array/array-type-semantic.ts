import {Array2, Boolean2, Nothing, String2} from '../../../lib/core';
import {SourceReference} from '../../../source/source-reference';
import {TypeDeclarationSemantic} from '../../declaration/type/type-declaration-semantic';
import {$Semantic, semanticIs} from '../../semantic';
import {isInSet, isSetOperatorTypeSemantic} from '../operator/operator-type-semantic';
import {TypeSemantic} from '../type-semantic';

export interface ArrayTypeSemantic extends TypeSemantic {
  $: $Semantic.ARRAY_TYPE;
  declaration: TypeDeclarationSemantic;
  items: (TypeSemantic | Nothing)[];
}

export function integerTypeSemantic(
  reference: SourceReference,
  declaration: TypeDeclarationSemantic,
  items: ArrayTypeSemantic['items'],
): ArrayTypeSemantic {
  const semantic: ArrayTypeSemantic = {
    $: $Semantic.ARRAY_TYPE,
    reference,
    declaration,
    items,

    is(other: TypeSemantic): Boolean2 {
      if (isSetOperatorTypeSemantic(other)) {
        return isInSet(this, other);
      }

      if (this.eq(other)) {
        return true;
      }

      if (semanticIs<TypeDeclarationSemantic>(other, $Semantic.TYPE_DECLARATION)) {
        return this.declaration.eq(other) || (this.declaration.baseType?.is(other) ?? false);
      }

      return false;
    },

    eq(other: TypeSemantic): Boolean2 {
      if (semanticIs<ArrayTypeSemantic>(other, $Semantic.INTEGER_TYPE)) {
        return this.items === other.items;
      }

      return false;
    },

    attributes(): Record<String2, Array2<TypeSemantic>> {
      return {};
    },
  };

  return semantic;
}
