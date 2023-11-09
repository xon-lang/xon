import { SyntacticNode } from '../node/node';
import { collapseLineNodes } from './collapse-line-nodes';

export function getSyntacticNodes(nodes: SyntacticNode[]): SyntacticNode[] {
  collapseLineNodes(nodes);
  // collapseDeclaration(nodes);

  return nodes;
}
