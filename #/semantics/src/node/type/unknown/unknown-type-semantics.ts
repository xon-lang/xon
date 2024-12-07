import {Boolean2, is_v2, Nothing} from '#common';
import {
  $NominalTypeDeclarationSemantics,
  $TypeSemantics,
  AttributeValueDeclarationSemantics,
  DeclarationScope,
  isInSet,
  newDeclarationScope,
  NominalTypeDeclarationSemantics,
  semanticsPackageType,
  TypeSemantics,
} from '#semantics';

// todo use something instead of unknown ???
// todo one Unknown doesn't equals other unknown
export type UnknownTypeSemantics = TypeSemantics & {
  declaration?: NominalTypeDeclarationSemantics | Nothing;
};

export const $UnknownTypeSemantics = semanticsPackageType<UnknownTypeSemantics>(
  'UnknownTypeSemantics',
  $TypeSemantics,
);

// todo use 'Anything' type as unknown
export function newUnknownTypeSemantics(): UnknownTypeSemantics {
  const {unknownTypeName} = analyzer.config.literalTypeNames;
  const declaration = analyzer.declarationManager.find($.NominalTypeDeclarationSemantic, unknownTypeName);

  if (declaration) {
    declaration.usages.push(nodeLink.reference);
  }

  return {
    $: $UnknownTypeSemantics,
    declaration,

    is(other: TypeSemantics): Boolean2 {
      if (isSetOperatorTypeSemantic(other)) {
        return isInSet(this, other);
      }

      if (this.equals(other)) {
        return true;
      }

      if (is_v2(this.declaration, $NominalTypeDeclarationSemantics)) {
        return this.declaration.type?.is(other) ?? false;
      }

      return false;
    },

    equals(other: TypeSemantics): Boolean2 {
      // todo handle special 'unknown' type
      // 'unknown' not equals 'other' unknown
      return false;
    },

    attributes(): DeclarationScope<AttributeValueDeclarationSemantics> {
      // todo review body of this function
      if (this.declaration) {
        return this.declaration.attributes?.clone() ?? newDeclarationScope();
      }

      return newDeclarationScope();
    },
  };
}
