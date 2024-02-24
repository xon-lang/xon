import { ISSUE_MESSAGE } from '../../../../issue/issue-message';
import { Nothing } from '../../../../lib/core';
import { SyntaxContext } from '../../../syntax-context';
import { $Node, Node } from '../../node';
import { OperatorNode } from '../../token/operator/operator-node';
import { WhitespaceNode } from '../../token/whitespace/whitespace-node';
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
  if (node.value) {
    // todo should we move it to parent functions ???
    node.hiddenNodes = node.value.hiddenNodes;

    if (node.operator.hiddenNodes.length <= 0) {
      return;
    }

    // todo now we check only whitespace
    const hiddenNode = node.operator.hiddenNodes[0] as WhitespaceNode;

    if (node.operator.text.some((x) => x.isLetterOrDigit(0))) {
      if (hiddenNode.text.length != 1) {
        context.formatters.push({ range: hiddenNode.range, text: ' ' });
      }
    } else {
      if (hiddenNode.text.length != 0) {
        context.formatters.push({ range: hiddenNode.range, text: '' });
      }
    }
  }
}
