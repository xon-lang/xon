import {Char} from '#common';
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
import {Boolean2, Nothing, is} from '#typing';

export type CharTypeSemantics = TypeSemantics & {
  declaration?: NominalTypeDeclarationSemantics | Nothing;
  value: Char;
};

export const $CharTypeSemantics = semanticsPackageType<CharTypeSemantics>(
  'CharTypeSemantics',
  $TypeSemantics,
);

export function newCharTypeSemantics(value: Char): CharTypeSemantics {
  return {
    $: $CharTypeSemantics,
    declaration: analyzer.declarationManager.find(
      $.NominalTypeDeclarationSemantic,
      analyzer.config.literalTypeNames.charTypeName,
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
        return this.declaration?.equals(other.declaration) || (this.declaration?.type?.is(other) ?? false);
      }

      return false;
    },

    equals(other: TypeSemantics): Boolean2 {
      if (is(other, $.CharTypeSemantic)) {
        return this.value === other.value;
      }

      return false;
    },

    attributes(): DeclarationScope<AttributeValueDeclarationSemantics> {
      return this.declaration?.attributes?.clone() ?? newDeclarationScope();
    },
  };
}
