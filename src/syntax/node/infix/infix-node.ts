import { ISSUE_MESSAGE } from '../../../issue/issue-message';
import { rangeFromNodes } from '../../../source/source-range';
import { SyntaxContext } from '../../syntax-context';
import { $Node, Node, SyntaxNode, addNodeParent } from '../node';
import { OperatorNode } from '../operator/operator-node';

export interface InfixNode extends SyntaxNode {
  readonly $: $Node.INFIX;
  readonly operator: OperatorNode;
  readonly left: Node | null;
  readonly right: Node | null;
}

export function infixNode(
  context: SyntaxContext,
  operator: OperatorNode,
  left: Node | null,
  right: Node | null,
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
    context.addErrorIssue(node, ISSUE_MESSAGE.notImplemented());
  }
}
