import { ISSUE_MESSAGE } from '../../../../issue/issue-message';
import { Nothing } from '../../../../lib/core';
import { SyntaxContext } from '../../../syntax-context';
import { formatHiddenNodes } from '../../../util/formatter';
import { $Node, Node } from '../../node';
import { OperatorNode } from '../../token/operator/operator-node';
import { SyntaxNode, getRangeAndChildren } from '../syntax-node';

export interface PrefixNode extends SyntaxNode {
  readonly $: $Node.PREFIX;
  readonly operator: OperatorNode;
  readonly value: Node | Nothing;
}

export function prefixNode(context: SyntaxContext, operator: OperatorNode, value: Node | Nothing): PrefixNode {
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

export function validatePrefixNode(context: SyntaxContext, node: PrefixNode): void {
  if (!node.value) {
    context.issueManager.addError(node, ISSUE_MESSAGE.notImplemented());
  }
}

export function checkFormatting(context: SyntaxContext, node: PrefixNode): void {
  if (!node.value) {
    node.hiddenNodes = node.operator.hiddenNodes;

    return;
  }

  node.hiddenNodes = node.value.hiddenNodes;

  if (node.operator.hiddenNodes.length === 0) {
    return;
  }

  const keepSingleWhitespace = node.operator.text.some((x) => x.isLetterOrDigit(0));
  const formatter = formatHiddenNodes(node.operator, keepSingleWhitespace);

  if (formatter) {
    context.formatters.push(formatter);
  }
}
