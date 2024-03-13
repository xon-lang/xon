import {ISSUE_MESSAGE} from '../../../issue/issue-message';
import {Nothing, nothing} from '../../../lib/core';
import {$Node, Node, is} from '../../../parser/node/node';
import {ArrayNode} from '../../../parser/node/syntax/array/array-node';
import {InvokeNode} from '../../../parser/node/syntax/invoke/invoke-node';
import {IntegerLiteralSemantic} from '../../literal/integer/integer-literal-semantic';
import {$Semantic, semanticIs} from '../../semantic';
import {SemanticContext} from '../../semantic-context';
import {typeSemanticParse} from '../type-semantic-parser';
import {ArrayTypeSemantic, arrayTypeSemantic} from './array-type-semantic';

export function arrayTypeSemanticTryParse(context: SemanticContext, node: Node): ArrayTypeSemantic | Nothing {
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

    if (size && !semanticIs<IntegerLiteralSemantic>(size, $Semantic.INTEGER_TYPE)) {
      context.issueManager.addError(node.group, ISSUE_MESSAGE.shouldBeInteger());
      return;
    }

    const reference = context.createReference(node);
    const semantic = arrayTypeSemantic(reference, type, size);

    return semantic;
  }

  return nothing;
}
