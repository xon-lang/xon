import {$, is, isSetOperatorTypeSemantic} from '../../../../../$';
import {Boolean2, Nothing} from '../../../../../../lib/types';
import {Node} from '../../../../node';
import {DeclarationScope, createDeclarationScope} from '../../../declaration-scope';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {NominalTypeDeclarationSemantic} from '../../declaration/type/nominal/nominal-type-declaration-semantic';
import {AttributeValueDeclarationSemantic} from '../../declaration/value/attribute/attribute-value-declaration-semantic';
import {isInSet} from '../set/set';
import {TypeSemantic} from '../type-semantic';

// todo use something instead of unknown ???
// todo one Unknown doesn't equals another
export type UnknownTypeSemantic = TypeSemantic & {
  $: $.UnknownTypeSemantic;
  declaration?: NominalTypeDeclarationSemantic | Nothing;
};

// todo use 'Anything' type as unknown
export function unknownTypeSemantic(analyzer: SemanticAnalyzer, nodeLink: Node): UnknownTypeSemantic {
  const {unknownTypeName} = analyzer.config.literalTypeNames;
  const declaration = analyzer.declarationManager.find($.NominalTypeDeclarationSemantic, unknownTypeName);

  if (declaration) {
    declaration.usages.push(nodeLink.reference);
  }

  return {
    $: $.UnknownTypeSemantic,
    nodeLink,
    declaration,

    is(other: TypeSemantic): Boolean2 {
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

    eq(other: TypeSemantic): Boolean2 {
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
      // todo review body of this function
      if (this.declaration) {
        return this.declaration.attributes?.clone() ?? createDeclarationScope(analyzer);
      }

      return createDeclarationScope(analyzer);
    },
  };
}
