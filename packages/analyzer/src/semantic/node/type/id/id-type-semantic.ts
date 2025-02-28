import {
  $AnalyzerType,
  $NominalTypeDeclarationSemantic,
  $SetTypeSemantic,
  $TypeSemantic,
  AttributeValueDeclarationSemantic,
  DeclarationScope,
  isInSet,
  newDeclarationScope,
  Node,
  SemanticAnalyzer,
  TypeDeclarationSemantic,
  TypeSemantic,
} from '#analyzer';
import {Boolean2, Nothing, Text} from '#common';
import {is} from '#typing';

export type IdTypeSemantic = TypeSemantic & {
  name: Text;
};

export const $IdTypeSemantic = () => $AnalyzerType<IdTypeSemantic>('IdTypeSemantic', $TypeSemantic());

// todo should we remove it ???
export function idTypeSemantic(
  analyzer: SemanticAnalyzer,
  nodeLink: Node,
  name: Text,
  declaration: TypeDeclarationSemantic | Nothing,
): IdTypeSemantic {
  if (declaration) {
    declaration.usages.addLastItem(nodeLink.reference);
  }

  return {
    $: $IdTypeSemantic(),
    nodeLink,
    name: name,
    declaration,

    is(other: TypeSemantic): Boolean2 {
      if (is(other, $SetTypeSemantic())) {
        return isInSet(this, other);
      }

      if (this.equals(other)) {
        return true;
      }

      // todo use 'TypeDeclarationSemantic' instead of 'NominalTypeDeclarationSemantic'
      if (is(this.declaration, $NominalTypeDeclarationSemantic())) {
        return this.declaration.baseType?.is(other) ?? false;
      }

      return false;
    },

    equals(other: TypeSemantic): Boolean2 {
      // todo use 'TypeDeclarationSemantic' instead of 'NominalTypeDeclarationSemantic'
      if (
        is(this.declaration, $NominalTypeDeclarationSemantic()) &&
        is(other, $IdTypeSemantic()) &&
        is(other.declaration, $NominalTypeDeclarationSemantic())
      ) {
        return this.declaration.equals(other.declaration);
      }

      return false;
    },

    attributes(): DeclarationScope<AttributeValueDeclarationSemantic> {
      if (is(this.declaration, $NominalTypeDeclarationSemantic())) {
        return this.declaration.attributes;
      }

      return newDeclarationScope();
    },
  };
}
