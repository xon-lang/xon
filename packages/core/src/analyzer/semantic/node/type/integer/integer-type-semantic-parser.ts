import {$, is} from '../../../../../$';
import {Nothing, nothing} from '../../../../../../../lib/src/types';
import {Node} from '../../../../node';
import {IntegerNode} from '../../../../syntax/node/integer/integer-node';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {IntegerTypeSemantic, integerTypeSemantic} from './integer-type-semantic';

export function integerTypeSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): IntegerTypeSemantic | Nothing {
  if (!is(node, $.IntegerNode)) {
    return nothing;
  }

  return integerTypeSemanticParse(analyzer, node);
}

export function integerTypeSemanticParse(analyzer: SemanticAnalyzer, node: IntegerNode): IntegerTypeSemantic {
  return integerTypeSemantic(analyzer, node, node.value);
}
