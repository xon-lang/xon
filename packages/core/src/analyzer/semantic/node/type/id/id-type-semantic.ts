import {Boolean2, Nothing, String2} from '#common';
import {
  $NominalTypeDeclarationSemantic,
  $SetTypeSemantic,
  $TypeSemantic,
  AttributeValueDeclarationSemantic,
  DeclarationScope,
  Node,
  SemanticAnalyzer,
  TypeDeclarationSemantic,
  TypeSemantic,
  corePackageType,
  isInSet,
  newDeclarationScope,
} from '#core';
import {is} from '#typing';

export type IdTypeSemantic = TypeSemantic & {
  name: String2;
};

export const $IdTypeSemantic = corePackageType<IdTypeSemantic>('IdTypeSemantic', $TypeSemantic);

// todo should we remove it ???
export function idTypeSemantic(
  analyzer: SemanticAnalyzer,
  nodeLink: Node,
  name: String2,
  declaration: TypeDeclarationSemantic | Nothing,
): IdTypeSemantic {
  if (declaration) {
    declaration.usages.addLastItem(nodeLink.reference);
  }

  return {
    $: $IdTypeSemantic,
    nodeLink,
    name: name,
    declaration,

    is(other: TypeSemantic): Boolean2 {
      if (is(other, $SetTypeSemantic)) {
        return isInSet(this, other);
      }

      if (this.eq(other)) {
        return true;
      }

      // todo use 'TypeDeclarationSemantic' instead of 'NominalTypeDeclarationSemantic'
      if (is(this.declaration, $NominalTypeDeclarationSemantic)) {
        return this.declaration.baseType?.is(other) ?? false;
      }

      return false;
    },

    eq(other: TypeSemantic): Boolean2 {
      // todo use 'TypeDeclarationSemantic' instead of 'NominalTypeDeclarationSemantic'
      if (
        is(this.declaration, $NominalTypeDeclarationSemantic) &&
        is(other, $IdTypeSemantic) &&
        is(other.declaration, $NominalTypeDeclarationSemantic)
      ) {
        return this.declaration.eq(other.declaration);
      }

      return false;
    },

    attributes(): DeclarationScope<AttributeValueDeclarationSemantic> {
      if (is(this.declaration, $NominalTypeDeclarationSemantic)) {
        return this.declaration.attributes;
      }

      return newDeclarationScope();
    },
  };
}
