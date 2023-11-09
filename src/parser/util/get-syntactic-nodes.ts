import { StatementNode } from '~/parser/node/statement/statement-node';
import { Node } from '../node/node';
import { collapseLineNodes } from './collapse-line-nodes';

export function getSyntacticNodes(parentStatement: StatementNode | null, nodes: Node[]): Node[] {
  collapseLineNodes(nodes);
  // collapseDeclaration(nodes);

  return nodes;
}
