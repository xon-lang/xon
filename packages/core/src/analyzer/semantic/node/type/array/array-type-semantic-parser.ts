import {$, is} from '../../../../../$';
import {Nothing, nothing} from '../../../../../../../lib/src/types';
import {Node} from '../../../../node';
import {BracketGroupNode} from '../../../../syntax/group/bracket/bracket-group-node';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {typeSemanticParse} from '../type-semantic-parser';
import {unknownTypeSemantic} from '../unknown/unknown-type-semantic';
import {ArrayTypeSemantic, arrayTypeSemantic} from './array-type-semantic';

export function arrayTypeSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): ArrayTypeSemantic | Nothing {
  if (!is(node, $.BracketGroupNode)) {
    return nothing;
  }

  return arrayTypeSemanticParse(analyzer, node);
}

export function arrayTypeSemanticParse(
  analyzer: SemanticAnalyzer,
  node: BracketGroupNode,
): ArrayTypeSemantic {
  const items = node.items.map((x) =>
    x.value ? typeSemanticParse(analyzer, x.value) : unknownTypeSemantic(analyzer, x),
  );
  const semantic = arrayTypeSemantic(analyzer, node, items);

  return semantic;
}
