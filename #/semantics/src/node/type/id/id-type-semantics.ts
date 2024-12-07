import {Boolean2, Nothing, String2} from '#common';
import {
  AttributeValueDeclarationSemantic,
  DeclarationScope,
  Node,
  SemanticAnalyzer,
  TypeDeclarationSemantic,
  TypeSemantics,
  createDeclarationScope,
  isInSet,
} from '#semantics';
import {$, is, isSetOperatorTypeSemantic} from '#typing';

export type IdTypeSemantic = TypeSemantics & {
  $: $.IdTypeSemantic;
  name: String2;
};

// todo should we remove it ???
export function idTypeSemantic(
  analyzer: SemanticAnalyzer,
  nodeLink: Node,
  name: String2,
  declaration: TypeDeclarationSemantic | Nothing,
): IdTypeSemantic {
  if (declaration) {
    declaration.usages.push(nodeLink.reference);
  }

  return {
    $: $.IdTypeSemantic,
    nodeLink,
    name: name,
    declaration,

    is(other: TypeSemantics): Boolean2 {
      if (isSetOperatorTypeSemantic(other)) {
        return isInSet(this, other);
      }

      if (this.eq(other)) {
        return true;
      }

      // todo use 'TypeDeclarationSemantic' instead of 'NominalTypeDeclarationSemantic'
      if (is(this.declaration, $.NominalTypeDeclarationSemantic)) {
        return this.declaration.baseType?.is(other) ?? false;
      }

      return false;
    },

    eq(other: TypeSemantics): Boolean2 {
      // todo use 'TypeDeclarationSemantic' instead of 'NominalTypeDeclarationSemantic'
      if (
        is(this.declaration, $.NominalTypeDeclarationSemantic) &&
        is(other, $.IdTypeSemantic) &&
        is(other.declaration, $.NominalTypeDeclarationSemantic)
      ) {
        return this.declaration.eq(other.declaration);
      }

      return false;
    },

    attributes(): DeclarationScope<AttributeValueDeclarationSemantic> {
      if (is(this.declaration, $.NominalTypeDeclarationSemantic)) {
        return this.declaration.attributes;
      }

      return createDeclarationScope(analyzer);
    },
  };
}
