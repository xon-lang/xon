import {Boolean2, Nothing, String2} from '#common';
import {
  $TypeSemantics,
  AttributeValueDeclarationSemantics,
  DeclarationScope,
  TypeDeclarationSemantics,
  TypeSemantics,
  isInSet,
  newDeclarationScope,
  semanticsPackageType,
} from '#semantics';
import {$, is, isSetOperatorTypeSemantic} from '#typing';

export type IdTypeSemantics = TypeSemantics & {
  name: String2;
};

export const $IdTypeSemantics = semanticsPackageType<IdTypeSemantics>(
  'IdTypeSemantics',
  $TypeSemantics,
);


// todo should we remove it ???
export function newIdTypeSemantics(
  name: String2,
  declaration: TypeDeclarationSemantics | Nothing,
): IdTypeSemantics {
  if (declaration) {
    declaration.usages.push(nodeLink.reference);
  }

  return {
    $: $IdTypeSemantics,
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

    equals(other: TypeSemantics): Boolean2 {
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

    attributes(): DeclarationScope<AttributeValueDeclarationSemantics> {
      if (is(this.declaration, $.NominalTypeDeclarationSemantic)) {
        return this.declaration.attributes;
      }

      return newDeclarationScope(analyzer);
    },
  };
}
