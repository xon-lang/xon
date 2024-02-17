import { ISSUE_MESSAGE } from '../../../issue/issue-message';
import { rangeFromNodes } from '../../../source/source-range';
import { SyntaxContext } from '../../syntax-context';
import { $Node, Node, SyntaxNode, addNodeParent } from '../node';
import { OperatorNode } from '../operator/operator-node';

export interface PrefixNode extends SyntaxNode {
  readonly $: $Node.PREFIX;
  readonly operator: OperatorNode;
  readonly value: Node | null;
}

export function prefixNode(context: SyntaxContext, operator: OperatorNode, value: Node | null): PrefixNode {
  const node: PrefixNode = {
    $: $Node.PREFIX,
    range: rangeFromNodes(operator, value),
    children: [],
    operator,
    value,
  };

  validatePrefixNode(context, node);
  addNodeParent(node, operator, value);

  return node;
}

export function validatePrefixNode(context: SyntaxContext, node: PrefixNode): void {
  if (!node.value) {
    context.addErrorIssue(node, ISSUE_MESSAGE.notImplemented());
  }
}
