import { ISSUE_MESSAGE } from '../../../issue/issue-message';
import { Node, SyntaxNode, addNodeParent } from '../../../parser/node/node';
import { OperatorNode } from '../../../parser/node/operator/operator-node';
import { rangeFromNodes } from '../../../source/source-range';
import { ParserContext } from '../../parser-context';
import { $Node } from '../node-type';

export interface PostfixNode extends SyntaxNode {
  readonly $: $Node.POSTFIX;
  readonly operator: OperatorNode;
  readonly value: Node;
}

export function postfixNode(context: ParserContext, operator: OperatorNode, value: Node): PostfixNode {
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

export function validatePostfixNode(context: ParserContext, node: PostfixNode): void {
  if (!node.value) {
    context.addErrorIssue(node, ISSUE_MESSAGE.notImplemented());
  }
}
