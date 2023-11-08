import { SyntacticNode } from '~/node/syntactic/syntactic-node';
import { collapseLineNodes } from './collapse-line-nodes';

export function getSyntacticNodes(nodes: SyntacticNode[]): SyntacticNode[] {
  collapseLineNodes(nodes);

  return nodes;
}
