import {$} from '../../../../../../$';
import {Boolean2, Nothing, String2} from '../../../../../../../lib/types';
import {TextResourceRange} from '../../../../../../util/resource/text/text-resource-range';
import {TypeSemantic} from '../../../type/type-semantic';
import {DeclarationSemantic} from '../../declaration-semantic';
import {TypeDeclarationSemantic} from '../type-declaration-semantic';

export type StructuralTypeDeclarationSemantic = TypeDeclarationSemantic & {
  $: $.StructuralTypeDeclarationSemantic;
  typeValue: TypeSemantic;
};

export function structuralTypeDeclarationSemantic(
  reference: TextResourceRange,
  documentation: String2 | Nothing,
  // todo we always know 'type' modifier
  modifier: String2 | Nothing,
  name: String2,
  type: TypeSemantic,
  typeValue: TypeSemantic,
): StructuralTypeDeclarationSemantic {
  return {
    $: $.StructuralTypeDeclarationSemantic,
    reference,
    usages: [],
    documentation,

    modifier,
    name,
    type,
    typeValue: typeValue,

    eq(other: DeclarationSemantic): Boolean2 {
      return this.reference.equals(other.reference);
    },
  };
}
