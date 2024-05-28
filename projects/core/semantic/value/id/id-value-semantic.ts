import {TextResourceReference} from '../../../util/resource/resource-reference';
import {DeclarationSemantic} from '../../declaration/declaration-semantic';
import {$Semantic} from '../../semantic';
import {ValueSemantic} from '../value-semantic';

export type IdValueSemantic = ValueSemantic<$Semantic.ID_VALUE> & {
  declaration: DeclarationSemantic;
};

export function idValueSemantic(reference: TextResourceReference, declaration: DeclarationSemantic): IdValueSemantic {
  return {
    $: $Semantic.ID_VALUE,
    reference,
    type: declaration.type,
    declaration,
  };
}
