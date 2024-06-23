import {TextResourceRange} from '../../../../../util/resource/text/text-resource-range';
import {DeclarationSemantic} from '../../declaration/declaration-semantic';
import {$Semantic} from '../../semantic-node';
import {ValueSemantic} from '../value-semantic';

export type IdValueSemantic = ValueSemantic<$Semantic.ID_VALUE> & {
  declaration: DeclarationSemantic;
};

export function idValueSemantic(
  reference: TextResourceRange,
  declaration: DeclarationSemantic,
): IdValueSemantic {
  declaration.usages.push(reference);

  return {
    $: $Semantic.ID_VALUE,
    reference,
    type: declaration.type,
    declaration,
  };
}
