import {$, is, isSetOperatorTypeSemantic} from '../../../../../$';
import {Boolean2, Nothing} from '../../../../../../lib/types';
import {Node} from '../../../../node';
import {DeclarationManager, createDeclarationManager} from '../../../declaration-manager';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {NominalTypeDeclarationSemantic} from '../../declaration/type/nominal/nominal-type-declaration-semantic';
import {ValueDeclarationSemantic} from '../../declaration/value/value-declaration-semantic';
import {isInSet} from '../set/set';
import {TypeSemantic} from '../type-semantic';

// todo one Unknown doesn't equals another
export type UnknownTypeSemantic = TypeSemantic & {
  $: $.UnknownTypeSemantic;
  declaration?: NominalTypeDeclarationSemantic | Nothing;
};

export function unknownTypeSemantic(
  nodeLink: Node | Nothing,
  declaration?: NominalTypeDeclarationSemantic | Nothing,
): UnknownTypeSemantic {
  if (nodeLink && declaration) {
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

    attributes(): DeclarationManager<ValueDeclarationSemantic> {
      // todo review body of this function
      if (this.declaration) {
        return this.declaration.attributes?.clone() ?? createDeclarationManager();
      }

      return createDeclarationManager();
    },
  };
}

export function unknownTypeFromNode(analyzer: SemanticAnalyzer, node: Node): UnknownTypeSemantic {
  const {unknownTypeName} = analyzer.config.literalTypeNames;
  const declaration = analyzer.declarationManager.single($.NominalTypeDeclarationSemantic, unknownTypeName);

  return unknownTypeSemantic(node, declaration);
}
