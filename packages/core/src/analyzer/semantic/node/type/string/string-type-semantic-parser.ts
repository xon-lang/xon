import {$, is} from '../../../../../$';
import {Nothing, nothing} from '../../../../../../../lib/src/types';
import {Node} from '../../../../node';
import {StringNode} from '../../../../syntax/node/string/string-node';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {StringTypeSemantic, stringTypeSemantic} from './string-type-semantic';

export function stringTypeSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): StringTypeSemantic | Nothing {
  if (!is(node, $.StringNode)) {
    return nothing;
  }

  return stringTypeSemanticParse(analyzer, node);
}

export function stringTypeSemanticParse(analyzer: SemanticAnalyzer, node: StringNode): StringTypeSemantic {
  return stringTypeSemantic(analyzer, node, node.value);
}
