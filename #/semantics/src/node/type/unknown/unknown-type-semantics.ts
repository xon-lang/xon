import {Boolean2, Nothing} from '#common';
import {
  $TypeSemantics,
  AttributeValueDeclarationSemantic,
  DeclarationScope,
  Node,
  NominalTypeDeclarationSemantic,
  SemanticAnalyzer,
  TypeSemantics,
  createDeclarationScope,
  isInSet,
  semanticsPackageType,
} from '#semantics';
import {$, is, isSetOperatorTypeSemantic} from '#typing';

// todo use something instead of unknown ???
// todo one Unknown doesn't equals other unknown
export type UnknownTypeSemantics = TypeSemantics & {
  $: $.UnknownTypeSemantic;
  declaration?: NominalTypeDeclarationSemantic | Nothing;
};

export const $UnknownTypeSemantics = semanticsPackageType<UnknownTypeSemantics>(
  'UnknownTypeSemantics',
  $TypeSemantics,
);

// todo use 'Anything' type as unknown
export function unknownTypeSemantic(analyzer: SemanticAnalyzer, nodeLink: Node): UnknownTypeSemantics {
  const {unknownTypeName} = analyzer.config.literalTypeNames;
  const declaration = analyzer.declarationManager.find($.NominalTypeDeclarationSemantic, unknownTypeName);

  if (declaration) {
    declaration.usages.push(nodeLink.reference);
  }

  return {
    $: $.UnknownTypeSemantic,
    nodeLink,
    declaration,

    is(other: TypeSemantics): Boolean2 {
      if (isSetOperatorTypeSemantic(other)) {
        return isInSet(this, other);
      }

      if (this.eq(other)) {
        return true;
      }

      if (is(this.declaration, $.NominalTypeDeclarationSemantic)) {
        return this.declaration.type?.is(other) ?? false;
      }

      return false;
    },

    eq(other: TypeSemantics): Boolean2 {
      // todo handle special 'unknown' type
      // 'unknown' not equals 'other' unknown
      return false;
    },

    attributes(): DeclarationScope<AttributeValueDeclarationSemantic> {
      // todo review body of this function
      if (this.declaration) {
        return this.declaration.attributes?.clone() ?? createDeclarationScope(analyzer);
      }

      return createDeclarationScope(analyzer);
    },
  };
}
