import { SyntaxContext } from '../../../syntax-context';
import { formatHiddenNodes } from '../../../util/formatter';
import { $Node, Node } from '../../node';
import { OperatorNode } from '../../token/operator/operator-node';
import { SyntaxNode, getRangeAndChildren } from '../syntax-node';

export interface PostfixNode extends SyntaxNode {
  readonly $: $Node.POSTFIX;
  readonly operator: OperatorNode;
  readonly value: Node;
}

export function postfixNode(context: SyntaxContext, operator: OperatorNode, value: Node): PostfixNode {
  const node: PostfixNode = {
    $: $Node.POSTFIX,
    ...getRangeAndChildren(value, operator),
    operator,
    value,
  };

  validatePostfixNode(context, node);
  checkFormatting(context, node);

  return node;
}

function validatePostfixNode(context: SyntaxContext, node: PostfixNode): void {}

function checkFormatting(context: SyntaxContext, node: PostfixNode): void {
  node.hiddenNodes = node.operator.hiddenNodes;

  const keepSingleWhitespace = node.operator.text.some((x) => x.isLetterOrDigit(0));
  formatHiddenNodes(context, node.value, keepSingleWhitespace);
}
