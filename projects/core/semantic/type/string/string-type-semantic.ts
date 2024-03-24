import {Array2, Boolean2, String2} from '../../../lib/core';
import {SourceReference} from '../../../source/source-reference';
import {TypeDeclarationSemantic} from '../../declaration/type/type-declaration-semantic';
import {$Semantic, semanticIs} from '../../semantic';
import {isInSet, isSetOperatorTypeSemantic} from '../set/set';
import {TypeSemantic} from '../type-semantic';

export interface StringTypeSemantic extends TypeSemantic {
  $: $Semantic.STRING_TYPE;
  declaration: TypeDeclarationSemantic;
  value: String2;
}

export function stringTypeSemantic(
  reference: SourceReference,
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

      if (semanticIs<TypeDeclarationSemantic>(other, $Semantic.TYPE_DECLARATION)) {
        return this.declaration.eq(other) || (this.declaration.baseType?.is(other) ?? false);
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
