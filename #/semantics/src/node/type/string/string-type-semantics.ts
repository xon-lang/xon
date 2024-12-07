import {Boolean2, is_v2, Nothing, String2} from '#common';
import {
  $TypeSemantics,
  AttributeValueDeclarationSemantics,
  DeclarationScope,
  NominalTypeDeclarationSemantics,
  TypeSemantics,
  isInSet,
  newDeclarationScope,
  semanticsPackageType,
} from '#semantics';

export type StringTypeSemantics = TypeSemantics & {
  declaration?: NominalTypeDeclarationSemantics | Nothing;
  value: String2;
};

export const $StringTypeSemantics = semanticsPackageType<StringTypeSemantics>(
  'StringTypeSemantics',
  $TypeSemantics,
);

export function newStringTypeSemantics(value: String2): StringTypeSemantics {
  return {
    $: $StringTypeSemantics,

    declaration: analyzer.declarationManager.find(
      $.NominalTypeDeclarationSemantic,
      analyzer.config.literalTypeNames.stringTypeName,
    ),
    value,

    is(other: TypeSemantics): Boolean2 {
      if (isSetOperatorTypeSemantic(other)) {
        return isInSet(this, other);
      }

      if (this.equals(other)) {
        return true;
      }

      if (is_v2(other, $IdTypeSemantics) && other.declaration) {
        return this.declaration?.equals(other.declaration) || (this.declaration?.type?.is(other) ?? false);
      }

      return false;
    },

    equals(other: TypeSemantics): Boolean2 {
      if (is_v2(other, $StringTypeSemantics)) {
        return this.value === other.value;
      }

      return false;
    },

    attributes(): DeclarationScope<AttributeValueDeclarationSemantics> {
      return this.declaration?.attributes?.clone() ?? newDeclarationScope();
    },
  };
}
