import {$} from '../../../../../../$';
import {Boolean2, Nothing, String2} from '../../../../../../../lib/types';
import {Node} from '../../../../../node';
import {TypeSemantic} from '../../../type/type-semantic';
import {DeclarationSemantic} from '../../declaration-semantic';
import {ValueDeclarationSemantic} from '../value-declaration-semantic';

// todo rename 'AttributeValueDeclarationSemantic' to 'AttributeDeclarationSemantic' ???
export type AttributeValueDeclarationSemantic = ValueDeclarationSemantic & {
  $: $.AttributeValueDeclarationSemantic;
  // todo move it to new 'OperatorDeclarationSemantic'
  alternativeName: String2;
};

export function attributeValueDeclarationSemantic(
  nodeLink: Node | Nothing,
  documentation: String2 | Nothing,
  modifier: String2 | Nothing,
  name: String2,
  type: TypeSemantic,
): AttributeValueDeclarationSemantic {
  return {
    $: $.AttributeValueDeclarationSemantic,
    nodeLink,
    usages: [],

    documentation,
    modifier,
    name,
    alternativeName: alternativeName(name),
    type,

    eq(other: DeclarationSemantic): Boolean2 {
      // todo recheck 'eq' conditions
      if (this.nodeLink && other.nodeLink) {
        return this.nodeLink?.reference.equals(other.nodeLink?.reference);
      }

      return false;
    },
  };
}

// todo fix or remove it
function alternativeName(name: String2): String2 {
  if (name === '+') {
    return '__plus__';
  }

  return name;
}
