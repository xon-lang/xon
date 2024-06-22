import {TextResourceRange} from '../../../../util/resource/text/text-resource-reference';
import {DeclarationSemantic} from '../../declaration/declaration-semantic';
import {$Semantic} from '../../node/semantic-node';
import {ValueSemantic} from '../value-semantic';

export type IdValueSemantic = ValueSemantic<$Semantic.ID_VALUE> & {
  declaration: DeclarationSemantic;
};

export function idValueSemantic(
  reference: TextResourceRange,
  declaration: DeclarationSemantic,
): IdValueSemantic {
  return {
    $: $Semantic.ID_VALUE,
    reference,
    type: declaration.type,
    declaration,
  };
}
