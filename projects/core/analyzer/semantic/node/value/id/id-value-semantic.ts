import {$} from '../../../../../$';
import {Nothing, String2} from '../../../../../../lib/types';
import {TextResourceRange} from '../../../../../util/resource/text/text-resource-range';
import {ValueDeclarationSemantic} from '../../declaration/value/value-declaration-semantic';
import {TypeSemantic} from '../../type/type-semantic';
import {ValueSemantic} from '../value-semantic';

export type IdValueSemantic = ValueSemantic<$.IdValueSemantic> & {
  name: String2;
  declaration?: ValueDeclarationSemantic | Nothing;
};

export function idValueSemantic(
  reference: TextResourceRange,
  name: String2,
  declaration: ValueDeclarationSemantic | Nothing,
  type: TypeSemantic,
): IdValueSemantic {
  declaration?.usages.push(reference);

  return {
    $: $.IdValueSemantic,
    reference,
    name,
    type,
    declaration,
  };
}
