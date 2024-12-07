import {Boolean2, Integer, Nothing} from '#common';
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
import {$, is, isSetOperatorTypeSemantic} from '#typing';

export type IntegerTypeSemantics = TypeSemantics & {
  declaration?: NominalTypeDeclarationSemantics | Nothing;
  value: Integer;
};

export const $IntegerTypeSemantics = semanticsPackageType<IntegerTypeSemantics>(
  'IntegerTypeSemantics',
  $TypeSemantics,
);

export function newIntegerTypeSemantics(value: Integer): IntegerTypeSemantics {
  return {
    $: $IntegerTypeSemantics,
    declaration: analyzer.declarationManager.find(
      $.NominalTypeDeclarationSemantic,
      analyzer.config.literalTypeNames.integerTypeName,
    ),
    value,

    is(other: TypeSemantics): Boolean2 {
      if (isSetOperatorTypeSemantic(other)) {
        return isInSet(this, other);
      }

      if (this.equals(other)) {
        return true;
      }

      if (is(other, $.IdTypeSemantic) && other.declaration) {
        return this.declaration?.eq(other.declaration) || (this.declaration?.type?.is(other) ?? false);
      }

      return false;
    },

    equals(other: TypeSemantics): Boolean2 {
      if (is(other, $.IntegerTypeSemantic)) {
        return this.value === other.value;
      }

      return false;
    },

    attributes(): DeclarationScope<AttributeValueDeclarationSemantics> {
      return this.declaration?.attributes?.clone() ?? newDeclarationScope(analyzer);
    },
  };
}
