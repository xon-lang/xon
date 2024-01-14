import { ISSUE_MESSAGE } from '../../../issue/issue-message';
import { Node, addNodeParent } from '../../../parser/node/node';
import { OperatorNode } from '../../../parser/node/operator/operator-node';
import { rangeFromNodes } from '../../../source/source-range';
import { ParserContext } from '../../parser-context';
import { NodeType } from '../node-type';

export interface TypeNode extends Node {
  readonly $: NodeType.TYPE;
  readonly operator: OperatorNode;
  readonly value: Node | null;
}

export function typeNode(context: ParserContext, operator: OperatorNode, value: Node | null): TypeNode {
  const node: TypeNode = {
    $: NodeType.TYPE,
    range: rangeFromNodes(operator, value),
    operator,
    value,
  };

  validateTypeNode(context, node);
  addNodeParent(node, operator, value);

  return node;
}

export function validateTypeNode(context: ParserContext, node: TypeNode): void {
  if (!node.value) {
    context.addErrorIssue(node, ISSUE_MESSAGE.notImplemented());
  }
}
