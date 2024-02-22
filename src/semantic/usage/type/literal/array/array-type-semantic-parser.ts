import { ISSUE_MESSAGE } from '../../../../../issue/issue-message';
import { Nothing, nothing } from '../../../../../lib/core';
import { ArrayNode } from '../../../../../syntax/node/array/array-node';
import { InvokeNode } from '../../../../../syntax/node/invoke/invoke-node';
import { $Node, Node } from '../../../../../syntax/node/node';
import { is } from '../../../../../syntax/util/is';
import { $Semantic, semanticIs } from '../../../../semantic';
import { SemanticContext } from '../../../../semantic-context';
import { typeSemanticParse } from '../../type-semantic-parser';
import { IntegerTypeSemantic } from '../integer/integer-type-semantic';
import { ArrayTypeSemantic, arrayTypeSemantic } from './array-type-semantic';

export function arrayTypeSemanticParse(context: SemanticContext, node: Node): ArrayTypeSemantic | Nothing {
  if (is<InvokeNode>(node, $Node.INVOKE) && is<ArrayNode>(node.group, $Node.ARRAY)) {
    const type = typeSemanticParse(context, node.instance);

    if (!type) {
      return nothing;
    }

    if (node.group.items.length > 1) {
      context.issueManager.addError(node.group, ISSUE_MESSAGE.shouldBeSingleItem());
      return nothing;
    }

    const size = node.group.items.length === 1 ? typeSemanticParse(context, node.group.items[0]) : nothing;

    if (size && !semanticIs<IntegerTypeSemantic>(size, $Semantic.INTEGER_TYPE)) {
      context.issueManager.addError(node.group, ISSUE_MESSAGE.shouldBeInteger());
      return;
    }

    const reference = context.createReference(node);
    const semantic = arrayTypeSemantic(reference, type, size);

    return semantic;
  }

  return nothing;
}
