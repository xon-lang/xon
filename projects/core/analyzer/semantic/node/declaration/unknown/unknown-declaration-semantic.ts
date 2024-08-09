import {$} from '../../../../../$';
import {Boolean2} from '../../../../../../lib/types';
import {TextResourceRange} from '../../../../../util/resource/text/text-resource-range';
import {TypeSemantic} from '../../type/type-semantic';
import {DeclarationSemantic} from '../declaration-semantic';

export type UnknownDeclarationSemantic = DeclarationSemantic & {
  $: $.UnknownDeclarationSemantic;
};

export function unknownDeclarationSemantic(
  reference: TextResourceRange,
  type: TypeSemantic,
): UnknownDeclarationSemantic {
  return {
    $: $.UnknownDeclarationSemantic,
    reference,
    usages: [],
    name: '<unknown>',
    type,

    eq(other: DeclarationSemantic): Boolean2 {
      return false;
    },
  };
}
