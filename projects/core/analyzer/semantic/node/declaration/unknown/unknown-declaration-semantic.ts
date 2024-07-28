import {$} from '../../../../../$';
import {Boolean2} from '../../../../../../lib/types';
import {TextResourceRange} from '../../../../../util/resource/text/text-resource-range';
import {DeclarationSemantic} from '../declaration-semantic';

export type UnknownDeclarationSemantic = DeclarationSemantic & {
  $: $.UnknownDeclarationSemantic;
};

export function unknownDeclarationSemantic(reference: TextResourceRange): UnknownDeclarationSemantic {
  return {
    $: $.UnknownDeclarationSemantic,
    reference,
    usages: [],
    name: '<unknown>',

    eq(other: DeclarationSemantic): Boolean2 {
      return false;
    },
  };
}
