import { CloseNode } from '../../../parser/node/close/close-node';
import { DeclarationNode } from '../../../parser/node/declaration/declaration-node';
import { GroupNode } from '../../../parser/node/group/group-node';
import { Node, addNodeParent } from '../../../parser/node/node';
import { OpenNode } from '../../../parser/node/open/open-node';
import { ParameterNode, parameterNodeFromDeclaration } from '../../../parser/node/parameter/parameter-node';
import { is } from '../../../parser/util/is';
import { rangeFromNodes } from '../../../source/source-range';
import { NodeType } from '../node-type';

export interface ParametersNode extends Node {
  $: NodeType.PARAMETERS;
  open: OpenNode;
  close: CloseNode | null;
  items: ParameterNode[];
}

export function parametersNode(open: OpenNode, close: CloseNode | null, items: ParameterNode[]): ParametersNode {
  const node: ParametersNode = {
    $: NodeType.PARAMETERS,
    range: rangeFromNodes(open, items.lastOrNull() ?? close ?? open),
    open,
    close,
    items,
  };

  addNodeParent(node, open, close, ...items);

  return node;
}

export function parametersNodeFromGroup(group: GroupNode): ParametersNode {
  const items = group.items
    .filter((x) => is<DeclarationNode>(x, NodeType.DECLARATION))
    .map((x) => parameterNodeFromDeclaration(x as DeclarationNode));

  return parametersNode(group.open, group.close, items);
}
