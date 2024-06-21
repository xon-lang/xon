import {Array2, Boolean2, Nothing, String2} from '../../../../../lib/types';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-reference';
import {DeclarationSemantic, isTypeDeclarationSemantic} from '../../declaration/declaration-semantic';
import {$Semantic, semanticIs} from '../../semantic';
import {isInSet, isSetOperatorTypeSemantic} from '../set/set';
import {TypeSemantic} from '../type-semantic';

export interface ArrayTypeSemantic extends TypeSemantic {
  $: $Semantic.ARRAY_TYPE;
  declaration: DeclarationSemantic;
  items: (TypeSemantic | Nothing)[];
}

export function integerTypeSemantic(
  reference: TextResourceRange,
  declaration: DeclarationSemantic,
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

      if (isTypeDeclarationSemantic(other)) {
        return this.declaration.eq(other) || (this.declaration.type?.is(other) ?? false);
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
