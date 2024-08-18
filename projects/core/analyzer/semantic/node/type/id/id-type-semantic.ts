import {$, is, isSetOperatorTypeSemantic} from '../../../../../$';
import {Boolean2, String2} from '../../../../../../lib/types';
import {Node} from '../../../../node';
import {createDeclarationManager, DeclarationManager} from '../../../declaration-manager';
import {TypeDeclarationSemantic} from '../../declaration/type/type-declaration-semantic';
import {AttributeValueDeclarationSemantic} from '../../declaration/value/attribute/attribute-value-declaration-semantic';
import {isInSet} from '../set/set';
import {TypeSemantic} from '../type-semantic';

export type IdTypeSemantic = TypeSemantic & {
  $: $.IdTypeSemantic;
  name: String2;
};

// todo should we remove it ???
export function idTypeSemantic(nodeLink: Node, declaration: TypeDeclarationSemantic): IdTypeSemantic {
  if (declaration) {
    declaration.usages.push(nodeLink.reference);
  }

  return {
    $: $.IdTypeSemantic,
    nodeLink,
    name: declaration.name,
    declaration,

    is(other: TypeSemantic): Boolean2 {
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

    eq(other: TypeSemantic): Boolean2 {
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

    attributes(): DeclarationManager<AttributeValueDeclarationSemantic> {
      if (is(this.declaration, $.NominalTypeDeclarationSemantic)) {
        return this.declaration.attributes;
      }

      return createDeclarationManager();
    },
  };
}
