import {Array2, Boolean2, String2} from '../../../../lib/types';
import {TextResourceReference} from '../../../util/resource/resource-reference';
import {TypeDeclarationSemantic} from '../../declaration/type/type-declaration-semantic';
import {$Semantic, semanticIs} from '../../semantic';
import {IdTypeSemantic} from '../id/id-type-semantic';
import {isInSet, isSetOperatorTypeSemantic} from '../set/set';
import {TypeSemantic} from '../type-semantic';

export interface StringTypeSemantic extends TypeSemantic {
  $: $Semantic.STRING_TYPE;
  declaration: TypeDeclarationSemantic;
  value: String2;
}

export function stringTypeSemantic(
  reference: TextResourceReference,
  declaration: TypeDeclarationSemantic,
  value: StringTypeSemantic['value'],
): StringTypeSemantic {
  const semantic: StringTypeSemantic = {
    $: $Semantic.STRING_TYPE,
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

      if (semanticIs<IdTypeSemantic>(other, $Semantic.DECLARATION_TYPE)) {
        return this.declaration.eq(other.declaration) || (this.declaration.baseType?.is(other) ?? false);
      }

      return false;
    },

    eq(other: TypeSemantic): Boolean2 {
      if (semanticIs<StringTypeSemantic>(other, $Semantic.STRING_TYPE)) {
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
