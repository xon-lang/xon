import {Nothing, nothing} from '../../../lib/core';
import {$Node, Node, is} from '../../../parser/node/node';
import {IntegerNode} from '../../../parser/node/token/integer/integer-node';
import {$Semantic} from '../../semantic';
import {SemanticContext} from '../../semantic-context';
import {integerTypeSemanticParse} from '../../type/literal/integer/integer-type-semantic-parser';
import {ValueSemantic} from '../value-semantic';

export interface IntegerValueSemantic extends ValueSemantic {
  $: $Semantic.ID_VALUE;
}

export function integerValueSemantic(context: SemanticContext, node: IntegerNode): IntegerValueSemantic {
  const reference = context.createReference(node);
  const type = integerTypeSemanticParse(context, node);

  const semantic: IntegerValueSemantic = {
    $: $Semantic.ID_VALUE,
    reference,
    type,
  };

  return semantic;
}

export function integerValueSemanticParse(context: SemanticContext, node: Node): IntegerValueSemantic | Nothing {
  if (is<IntegerNode>(node, $Node.INTEGER)) {
    return integerValueSemantic(context, node);
  }

  return nothing;
}
