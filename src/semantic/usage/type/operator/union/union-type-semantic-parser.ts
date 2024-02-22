import { Nothing, nothing } from '../../../../../lib/core';
import { InfixNode } from '../../../../../syntax/node/infix/infix-node';
import { $Node, Node } from '../../../../../syntax/node/node';
import { UNION_TOKEN } from '../../../../../syntax/syntax-config';
import { is } from '../../../../../syntax/util/is';
import { SemanticContext } from '../../../../semantic-context';
import { typeSemanticParse } from '../../type-semantic-parser';
import { UnionTypeSemantic, unionTypeSemantic } from './union-type-semantic';

export function unionTypeSemanticParse(context: SemanticContext, node: Node): UnionTypeSemantic | Nothing {
  if (is<InfixNode>(node, $Node.INFIX) && node.operator.text === UNION_TOKEN) {
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
