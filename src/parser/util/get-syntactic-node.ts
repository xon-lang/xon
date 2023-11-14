import { collapseDeclaration } from '~/parser/util/collapse-declaration';
import { Node } from '../node/node';
import { collapseLineNodes } from './collapse-line-nodes';

export function getSyntacticNode(nodes: Node[], parent: Node | null): Node {
  collapseLineNodes(nodes);
  collapseDeclaration(nodes, parent);

  // todo uncomment it
  // if (nodes.length !== 1) {
  //   throw new Error('Not implemented');
  // }

  const node = nodes[0];

  if (parent) {
    node.parent = parent;
    parent.children ||= [];
    parent.children.push(node);
  }

  return node;
}
