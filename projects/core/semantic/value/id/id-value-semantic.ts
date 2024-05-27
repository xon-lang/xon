import {TextResourceReference} from '../../../util/resource/resource-reference';
import {ValueDeclarationSemantic} from '../../declaration/value/value-declaration-semantic';
import {$Semantic} from '../../semantic';
import {ValueSemantic} from '../value-semantic';

export type IdValueSemantic = ValueSemantic<$Semantic.ID_VALUE> & {
  // todo perhaps we also need to add '| TypeDeclarationSemantic'
  declaration: ValueDeclarationSemantic;
};

export function idValueSemantic(
  reference: TextResourceReference,
  declaration: ValueDeclarationSemantic,
): IdValueSemantic {
  return {
    $: $Semantic.ID_VALUE,
    reference,
    type: declaration.type,
    declaration,
  };
}
