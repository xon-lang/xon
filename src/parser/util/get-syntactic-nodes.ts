import { SyntacticNode } from '~/parser/node/lexical-node';
import { collapseLineNodes } from './collapse-line-nodes';

export function getSyntacticNodes(nodes: SyntacticNode[]): SyntacticNode[] {
  collapseLineNodes(nodes);
  // collapseDeclaration(nodes);

  return nodes;
}
