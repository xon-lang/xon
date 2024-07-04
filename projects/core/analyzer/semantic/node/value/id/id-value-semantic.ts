import {$} from '../../../../../$';
import {TextResourceRange} from '../../../../../util/resource/text/text-resource-range';
import {DeclarationSemantic} from '../../declaration/declaration-semantic';
import {ValueSemantic} from '../value-semantic';

export type IdValueSemantic = ValueSemantic<$.IdValueSemantic> & {
  declaration: DeclarationSemantic;
};

export function idValueSemantic(
  reference: TextResourceRange,
  declaration: DeclarationSemantic,
): IdValueSemantic {
  declaration.usages.push(reference);

  return {
    $: $.IdValueSemantic,
    reference,
    type: declaration.type,
    declaration,
  };
}
