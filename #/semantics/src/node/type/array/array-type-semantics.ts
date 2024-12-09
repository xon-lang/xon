import {
  $SetTypeSemantics,
  $TypeSemantics,
  AttributeValueDeclarationSemantics,
  DeclarationScope,
  isInSet,
  NominalTypeDeclarationSemantics,
  semanticsPackageType,
  TypeSemantics,
} from '#semantics';
import {Boolean2, is, Nothing} from '#typing';

export type ArrayTypeSemantics = TypeSemantics & {
  declaration?: NominalTypeDeclarationSemantics | Nothing;
  items: TypeSemantics[];
};

export const $ArrayTypeSemantics = semanticsPackageType<ArrayTypeSemantics>(
  'ArrayTypeSemantics',
  $TypeSemantics,
);

export function newArrayTypeSemantics(items: TypeSemantics[]): ArrayTypeSemantics {
  return {
    $: $ArrayTypeSemantics,
    declaration: analyzer.declarationManager.find(
      $.NominalTypeDeclarationSemantic,
      analyzer.config.literalTypeNames.arrayTypeName,
    ),
    items,

    is(other: TypeSemantics): Boolean2 {
      if (is(other, $SetTypeSemantics)) {
        return isInSet(this, other);
      }

      if (this.equals(other)) {
        return true;
      }

      if (is(other, $.TypeDeclarationSemantic)) {
        return this.declaration?.equals(other) || (this.declaration?.type?.is(other) ?? false);
      }

      return false;
    },

    equals(other: TypeSemantics): Boolean2 {
      if (is(other, $ArrayTypeSemantics)) {
        return this.items === other.items;
      }

      return false;
    },

    attributes(): DeclarationScope<AttributeValueDeclarationSemantics> {
      throw new Error('Not implemented');
    },
  };
}
