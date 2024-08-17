import {$} from '../../../../../$';
import {Boolean2, Nothing} from '../../../../../../lib/types';
import {Node} from '../../../../node';
import {TypeSemantic} from '../../type/type-semantic';
import {DeclarationSemantic} from '../declaration-semantic';

export type UnknownDeclarationSemantic = DeclarationSemantic & {
  $: $.UnknownDeclarationSemantic;
};

// todo remove it
export function unknownDeclarationSemantic(
  nodeLink: Node | Nothing,
  type: TypeSemantic,
): UnknownDeclarationSemantic {
  return {
    $: $.UnknownDeclarationSemantic,
    nodeLink,
    usages: [],
    name: '<unknown>',
    type,

    eq(other: DeclarationSemantic): Boolean2 {
      return false;
    },
  };
}
