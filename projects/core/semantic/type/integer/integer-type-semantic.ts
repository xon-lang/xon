import {Array2, Boolean2, Integer, String2} from '../../../lib/core';
import {TextResourceReference} from '../../../util/resource/resource-reference';
import {TypeDeclarationSemantic} from '../../declaration/type/type-declaration-semantic';
import {$Semantic, semanticIs} from '../../semantic';
import {DeclarationTypeSemantic} from '../declaration/declaration-type-semantic';
import {isInSet, isSetOperatorTypeSemantic} from '../set/set';
import {TypeSemantic} from '../type-semantic';

export interface IntegerTypeSemantic extends TypeSemantic {
  $: $Semantic.INTEGER_TYPE;
  declaration: TypeDeclarationSemantic;
  value: Integer;
}

export function integerTypeSemantic(
  reference: TextResourceReference,
  declaration: TypeDeclarationSemantic,
  value: IntegerTypeSemantic['value'],
): IntegerTypeSemantic {
  const semantic: IntegerTypeSemantic = {
    $: $Semantic.INTEGER_TYPE,
    reference,
    declaration,
    value,

    is(other: TypeSemantic): Boolean2 {
      if (isSetOperatorTypeSemantic(other)) {
        return isInSet(this, other);
      }

      if (this.eq(other)) {
        return true;
      }

      if (semanticIs<DeclarationTypeSemantic>(other, $Semantic.DECLARATION_TYPE)) {
        return this.declaration.eq(other.declaration) || (this.declaration.baseType?.is(other) ?? false);
      }

      return false;
    },

    eq(other: TypeSemantic): Boolean2 {
      if (semanticIs<IntegerTypeSemantic>(other, $Semantic.INTEGER_TYPE)) {
        return this.value === other.value;
      }

      return false;
    },

    attributes(): Record<String2, Array2<TypeSemantic>> {
      return {};
    },
  };

  return semantic;
}
