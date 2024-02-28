import { ISSUE_MESSAGE } from '../../../../issue/issue-message';
import { Nothing } from '../../../../lib/core';
import { SyntaxContext } from '../../../syntax-context';
import { formatHiddenNodes } from '../../../util/formatter';
import { $Node, Node } from '../../node';
import { OperatorNode } from '../../token/operator/operator-node';
import { SyntaxNode, getRangeAndChildren } from '../syntax-node';

export interface PostfixNode extends SyntaxNode {
  readonly $: $Node.POSTFIX;
  readonly operator: OperatorNode;
  readonly value: Node | Nothing;
}

export function postfixNode(context: SyntaxContext, operator: OperatorNode, value: Node | Nothing): PostfixNode {
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

function validatePostfixNode(context: SyntaxContext, node: PostfixNode): void {
  if (!node.value) {
    context.issueManager.addError(node, ISSUE_MESSAGE.notImplemented());
  }
}

function checkFormatting(context: SyntaxContext, node: PostfixNode): void {
  if (!node.value) {
    node.hiddenNodes = node.operator.hiddenNodes;

    return;
  }

  node.hiddenNodes = node.operator.hiddenNodes;

  const keepSingleWhitespace = node.operator.text.some((x) => x.isLetterOrDigit(0));
  const formatter = formatHiddenNodes(node.value, keepSingleWhitespace);

  if (formatter) {
    context.formatters.push(formatter);
  }
}
