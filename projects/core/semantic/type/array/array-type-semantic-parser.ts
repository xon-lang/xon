import {ISSUE_MESSAGE} from '../../../issue/issue-message';
import {Nothing, nothing} from '../../../lib/core';
import {$Node, Node, is} from '../../../parser/node/node';
import {ArrayNode} from '../../../parser/node/syntax/array/array-node';
import {InvokeNode} from '../../../parser/node/syntax/invoke/invoke-node';
import {IntegerLiteralSemantic} from '../../literal/integer/integer-literal-semantic';
import {$Semantic, semanticIs} from '../../semantic';
import {SemanticContext} from '../../semantic-context';
import {LiteralTypeSemantic} from '../literal/literal-type-semantic';
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

    const size = node.group.items.length === 1 ? getSizeSemantic(context, node.group.items[0]) : nothing;
    const reference = context.createReference(node);
    const semantic = arrayTypeSemantic(reference, type, size);

    return semantic;
  }

  return nothing;
}

function getSizeSemantic(context: SemanticContext, node: Node | Nothing): IntegerLiteralSemantic | Nothing {
  if (!node) {
    return nothing;
  }

  const sizeType = typeSemanticParse(context, node);

  if (!sizeType) {
    return nothing;
  }

  if (
    semanticIs<LiteralTypeSemantic>(sizeType, $Semantic.LITERAL_TYPE) &&
    semanticIs<IntegerLiteralSemantic>(sizeType.literal, $Semantic.INTEGER_LITERAL)
  ) {
    return sizeType.literal;
  }

  context.issueManager.addError(node, ISSUE_MESSAGE.shouldBeInteger());
}
