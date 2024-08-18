import {$, is, isSetOperatorTypeSemantic} from '../../../../../$';
import {Boolean2, Nothing, String2} from '../../../../../../lib/types';
import {Node} from '../../../../node';
import {DeclarationManager, createDeclarationManager} from '../../../declaration-manager';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {NominalTypeDeclarationSemantic} from '../../declaration/type/nominal/nominal-type-declaration-semantic';
import {AttributeValueDeclarationSemantic} from '../../declaration/value/attribute/attribute-value-declaration-semantic';
import {isInSet} from '../set/set';
import {TypeSemantic} from '../type-semantic';

export interface StringTypeSemantic extends TypeSemantic {
  $: $.StringTypeSemantic;
  declaration?: NominalTypeDeclarationSemantic | Nothing;
  value: String2;
}

export function stringTypeSemantic(
  analyzer: SemanticAnalyzer,
  nodeLink: Node,
  value: String2,
): StringTypeSemantic {
  return {
    $: $.StringTypeSemantic,
    nodeLink,
    declaration: analyzer.declarationManager.single(
      $.NominalTypeDeclarationSemantic,
      analyzer.config.literalTypeNames.stringTypeName,
    ),
    value,

    is(other: TypeSemantic): Boolean2 {
      if (isSetOperatorTypeSemantic(other)) {
        return isInSet(this, other);
      }

      if (this.eq(other)) {
        return true;
      }

      if (is(other, $.IdTypeSemantic) && other.declaration) {
        return this.declaration?.eq(other.declaration) || (this.declaration?.type?.is(other) ?? false);
      }

      return false;
    },

    eq(other: TypeSemantic): Boolean2 {
      if (is(other, $.StringTypeSemantic)) {
        return this.value === other.value;
      }

      return false;
    },

    attributes(): DeclarationManager<AttributeValueDeclarationSemantic> {
      return this.declaration?.attributes?.clone() ?? createDeclarationManager(analyzer);
    },
  };
}
