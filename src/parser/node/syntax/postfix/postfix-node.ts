import { ISSUE_MESSAGE } from '../../../../issue/issue-message';
import { SyntaxContext } from '../../../syntax-context';
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

  return node;
}

export function validatePostfixNode(context: SyntaxContext, node: PostfixNode): void {
  if (!node.value) {
    context.issueManager.addError(node, ISSUE_MESSAGE.notImplemented());
  }
}
