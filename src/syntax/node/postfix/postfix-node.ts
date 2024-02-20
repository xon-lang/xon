import { ISSUE_MESSAGE } from '../../../issue/issue-message';
import { rangeFromNodes } from '../../../source/source-range';
import { SyntaxContext } from '../../syntax-context';
import { $Node, Node, SyntaxNode, addNodeParent } from '../node';
import { OperatorNode } from '../operator/operator-node';

export interface PostfixNode extends SyntaxNode {
  readonly $: $Node.POSTFIX;
  readonly operator: OperatorNode;
  readonly value: Node;
}

export function postfixNode(context: SyntaxContext, operator: OperatorNode, value: Node): PostfixNode {
  const node: PostfixNode = {
    $: $Node.POSTFIX,
    range: rangeFromNodes(value, operator),
    children: [],
    operator,
    value,
  };

  validatePostfixNode(context, node);
  addNodeParent(node, operator, value);

  return node;
}

export function validatePostfixNode(context: SyntaxContext, node: PostfixNode): void {
  if (!node.value) {
    context.issueManager.addError(node, ISSUE_MESSAGE.notImplemented());
  }
}
