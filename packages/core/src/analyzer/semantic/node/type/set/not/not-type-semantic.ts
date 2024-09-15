import {$} from '../../../../../../$';
import {Boolean2} from '../../../../../../../../lib/types';
import {Node} from '../../../../../node';
import {DeclarationScope} from '../../../../declaration-scope';
import {AttributeValueDeclarationSemantic} from '../../../declaration/value/attribute/attribute-value-declaration-semantic';
import {TypeSemantic} from '../../type-semantic';
import {SetTypeSemantic} from '../set';

export interface NotTypeSemantic extends SetTypeSemantic {
  $: $.NotTypeSemantic;
  value: TypeSemantic;
}

export function notTypeSemantic(nodeLink: Node, value: TypeSemantic): NotTypeSemantic {
  const semantic: NotTypeSemantic = {
    $: $.NotTypeSemantic,
    nodeLink,
    value,

    is(other: TypeSemantic): Boolean2 {
      return this.eq(other);
    },

    eq(_other: TypeSemantic): Boolean2 {
      return false;
    },

    attributes(): DeclarationScope<AttributeValueDeclarationSemantic> {
      // todo investigate
      throw new Error('Not implemented');
    },
  };

  return semantic;
}
