import {$, is, isSetOperatorTypeSemantic} from '../../../../../../$';
import {Boolean2, Nothing} from '../../../../../../../lib/types';
import {TextResourceRange} from '../../../../../../util/resource/text/text-resource-range';
import {Node} from '../../../../../node';
import {DeclarationManager, createDeclarationManager} from '../../../../declaration-manager';
import {SemanticAnalyzer} from '../../../../semantic-analyzer';
import {NominalTypeDeclarationSemantic} from '../../../declaration/type/nominal/nominal-type-declaration-semantic';
import {isInSet} from '../../set/set';
import {TypeSemantic} from '../../type-semantic';

// todo extend from 'IdTypeSemantic'
export type NothingIdTypeSemantic = TypeSemantic & {
  $: $.NothingIdTypeSemantic;
  declaration?: NominalTypeDeclarationSemantic | Nothing;
};

export function nothingIdTypeSemantic(
  analyzer: SemanticAnalyzer,
  reference: TextResourceRange,
  declaration?: NominalTypeDeclarationSemantic | Nothing,
): NothingIdTypeSemantic {
  declaration?.usages.push(reference);

  return {
    $: $.NothingIdTypeSemantic,
    reference,
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

    attributes(): DeclarationManager {
      // todo review body of this function
      if (this.declaration) {
        return this.declaration.attributes?.clone() ?? createDeclarationManager();
      }

      return createDeclarationManager();
    },
  };
}

// todo recheck function
export function nothingTypeFromNode(analyzer: SemanticAnalyzer, node: Node) {
  const nothingDeclaration = analyzer.declarationManager.single($.NominalTypeDeclarationSemantic, 'Nothing');

  return nothingIdTypeSemantic(analyzer, analyzer.createReference(node), nothingDeclaration);
}
