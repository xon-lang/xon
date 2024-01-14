import { ISSUE_MESSAGE } from '../../../issue/issue-message';
import { Node, addNodeParent } from '../../../parser/node/node';
import { OperatorNode } from '../../../parser/node/operator/operator-node';
import { rangeFromNodes } from '../../../source/source-range';
import { ParserContext } from '../../parser-context';
import { NodeType } from '../node-type';

export interface AssignNode extends Node {
  $: NodeType.ASSIGN;
  operator: OperatorNode;
  value: Node | null;
}

export function assignNode(context: ParserContext, operator: OperatorNode, value: Node | null): AssignNode {
  const node: AssignNode = {
    $: NodeType.ASSIGN,
    range: rangeFromNodes(operator, value ?? operator),
    operator,
    value,
  };

  validateAssignNode(context, node);
  addNodeParent(node, operator, value);

  return node;
}

export function validateAssignNode(context: ParserContext, node: AssignNode): void {
  if (!node.value) {
    context.addErrorIssue(node, ISSUE_MESSAGE.notImplemented());
  }
}
