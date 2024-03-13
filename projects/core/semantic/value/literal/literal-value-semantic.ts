import {LiteralSemantic} from '../../literal/literal-semantic';
import {$Semantic} from '../../semantic';
import {literalTypeSemantic} from '../../type/literal/literal-type-semantic';
import {ValueSemantic} from '../value-semantic';

export interface LiteralValueSemantic extends ValueSemantic {
  $: $Semantic.LITERAL_VALUE;
  literal: LiteralSemantic;
}

export function literalValueSemantic(literal: LiteralSemantic): LiteralValueSemantic {
  const type = literalTypeSemantic(literal);

  const semantic: LiteralValueSemantic = {
    $: $Semantic.LITERAL_VALUE,
    reference: literal.reference,
    literal,
    type,
  };

  return semantic;
}
