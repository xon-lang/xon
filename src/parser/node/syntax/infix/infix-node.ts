import { ISSUE_MESSAGE } from '../../../../issue/issue-message';
import { Nothing } from '../../../../lib/core';
import { rangeFromNodes } from '../../../../source/source-range';
import { SyntaxContext } from '../../../syntax-context';
import { $Node, Node, addNodeParent } from '../../node';
import { OperatorNode } from '../../token/operator/operator-node';
import { SyntaxNode } from '../syntax-node';

export interface InfixNode extends SyntaxNode {
  readonly $: $Node.INFIX;
  readonly operator: OperatorNode;
  readonly left: Node | Nothing;
  readonly right: Node | Nothing;
}

export function infixNode(
  context: SyntaxContext,
  operator: OperatorNode,
  left: Node | Nothing,
  right: Node | Nothing,
): InfixNode {
  const node: InfixNode = {
    $: $Node.INFIX,
    range: rangeFromNodes(left ?? operator, right ?? operator),
    children: [],
    operator,
    left,
    right,
  };

  validateInfixNode(context, node);
  addNodeParent(node, operator, left, right);

  return node;
}

export function validateInfixNode(context: SyntaxContext, node: InfixNode): void {
  if (!node.left || !node.right) {
    context.issueManager.addError(node, ISSUE_MESSAGE.notImplemented());
  }
}
