import { Node } from '../node/node';
import { collapseLineNodes } from './collapse-line-nodes';

export function getSyntacticNodes(nodes: Node[]): Node[] {
  collapseLineNodes(nodes);
  // collapseDeclaration(nodes);

  return nodes;
}
