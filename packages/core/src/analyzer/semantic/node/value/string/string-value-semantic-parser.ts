import {$, is} from '../../../../../$';
import {Nothing, nothing} from '../../../../../../../lib/types';
import {Node} from '../../../../node';
import {StringNode} from '../../../../syntax/node/string/string-node';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {stringTypeSemanticParse} from '../../type/string/string-type-semantic-parser';
import {StringValueSemantic, stringValueSemantic} from './string-value-semantic';

export function stringValueSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): StringValueSemantic | Nothing {
  if (!is(node, $.StringNode)) {
    return nothing;
  }

  return stringValueSemanticParse(analyzer, node);
}

export function stringValueSemanticParse(
  analyzer: SemanticAnalyzer,
  node: StringNode,
): StringValueSemantic | Nothing {
  const type = stringTypeSemanticParse(analyzer, node);

  return stringValueSemantic(node, type);
}
