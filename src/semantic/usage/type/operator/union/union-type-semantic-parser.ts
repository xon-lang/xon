import {Nothing, nothing} from '../../../../../lib/core';
import {$Node, Node, is} from '../../../../../parser/node/node';
import {InfixNode} from '../../../../../parser/node/syntax/infix/infix-node';
import {UNION} from '../../../../../parser/syntax-config';
import {SemanticContext} from '../../../../semantic-context';
import {typeSemanticParse} from '../../type-semantic-parser';
import {UnionTypeSemantic, unionTypeSemantic} from './union-type-semantic';

export function unionTypeSemanticParse(context: SemanticContext, node: Node): UnionTypeSemantic | Nothing {
  if (is<InfixNode>(node, $Node.INFIX) && node.operator.text === UNION) {
    const left = typeSemanticParse(context, node.left);
    const right = typeSemanticParse(context, node.right);

    if (!left || !right) {
      return nothing;
    }

    const reference = context.createReference(node);
    const semantic = unionTypeSemantic(reference, left, right);

    return semantic;
  }

  return nothing;
}
