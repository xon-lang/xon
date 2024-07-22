import {$} from '../../../../../$';
import {TextResourceRange} from '../../../../../util/resource/text/text-resource-range';
import {ValueDeclarationSemantic} from '../../declaration/value/value-declaration-semantic';
import {ValueSemantic} from '../value-semantic';

export type IdValueSemantic = ValueSemantic<$.IdValueSemantic> & {
  declaration: ValueDeclarationSemantic;
};

export function idValueSemantic(
  reference: TextResourceRange,
  declaration: ValueDeclarationSemantic,
): IdValueSemantic {
  declaration.usages.push(reference);

  return {
    $: $.IdValueSemantic,
    reference,
    type: declaration.type,
    declaration,
  };
}
