import { ISSUE_MESSAGE } from '../../../../issue/issue-message';
import { Nothing } from '../../../../lib/core';
import { SyntaxContext } from '../../../syntax-context';
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

  return node;
}

export function validatePrefixNode(context: SyntaxContext, node: PrefixNode): void {
  if (!node.value) {
    context.issueManager.addError(node, ISSUE_MESSAGE.notImplemented());
  }
}
