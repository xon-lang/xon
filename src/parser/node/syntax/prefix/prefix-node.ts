import { SyntaxContext } from '../../../syntax-context';
import { formatHiddenNodes } from '../../../util/formatter';
import { $Node, Node } from '../../node';
import { OperatorNode } from '../../token/operator/operator-node';
import { SyntaxNode, getRangeAndChildren } from '../syntax-node';

export interface PrefixNode extends SyntaxNode {
  readonly $: $Node.PREFIX;
  readonly operator: OperatorNode;
  readonly value: Node;
}

export function prefixNode(context: SyntaxContext, operator: OperatorNode, value: Node): PrefixNode {
  const node: PrefixNode = {
    $: $Node.PREFIX,
    ...getRangeAndChildren(operator, value),
    operator,
    value,
  };

  validatePrefixNode(context, node);
  checkFormatting(context, node);

  return node;
}

// todo refactor it if value will be required
function validatePrefixNode(context: SyntaxContext, node: PrefixNode): void {}

function checkFormatting(context: SyntaxContext, node: PrefixNode): void {
  node.hiddenNodes = node.value.hiddenNodes;

  const keepSingleWhitespace = node.operator.text.some((x) => x.isLetterOrDigit(0));
  const formatter = formatHiddenNodes(node.operator, keepSingleWhitespace);

  if (formatter) {
    context.formatters.push(formatter);
  }
}
