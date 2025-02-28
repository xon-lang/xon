import {
  $AnalyzerType,
  $IdTypeSemantic,
  $NominalTypeDeclarationSemantic,
  $SetTypeSemantic,
  $TypeSemantic,
  AttributeValueDeclarationSemantic,
  DeclarationScope,
  isInSet,
  newDeclarationScope,
  Node,
  NominalTypeDeclarationSemantic,
  SemanticAnalyzer,
  TypeSemantic,
} from '#analyzer';
import {Boolean2, Nothing} from '#common';
import {is} from '#typing';

// todo use something instead of unknown ???
// todo one Unknown doesn't equals other unknown
export type UnknownTypeSemantic = TypeSemantic & {
  declaration?: NominalTypeDeclarationSemantic | Nothing;
};

export const $UnknownTypeSemantic = () =>
  $AnalyzerType<UnknownTypeSemantic>('UnknownTypeSemantic', $TypeSemantic());

// todo use 'Anything' type as unknown
export function unknownTypeSemantic(analyzer: SemanticAnalyzer, nodeLink: Node): UnknownTypeSemantic {
  const {unknownTypeName} = analyzer.config.literalTypeNames;
  const declaration = analyzer.declarationManager.find($NominalTypeDeclarationSemantic(), unknownTypeName);

  if (declaration) {
    declaration.usages.addLastItem(nodeLink.reference);
  }

  return {
    $: $UnknownTypeSemantic(),
    nodeLink,
    declaration,

    is(other: TypeSemantic): Boolean2 {
      if (is(other, $SetTypeSemantic())) {
        return isInSet(this, other);
      }

      if (this.equals(other)) {
        return true;
      }

      if (is(this.declaration, $NominalTypeDeclarationSemantic())) {
        return this.declaration.type?.is(other) ?? false;
      }

      return false;
    },

    equals(other: TypeSemantic): Boolean2 {
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
      // todo review body of this function
      if (this.declaration) {
        return this.declaration.attributes?.clone() ?? newDeclarationScope();
      }

      return newDeclarationScope();
    },
  };
}
