import { StatementNode, statementNode } from '~/parser/node/statement/statement-node';
import { collapseDeclaration } from '~/parser/util/collapse-declaration';
import { Node } from '../node/node';
import { collapseLineNodes } from './collapse-line-nodes';

export function getSyntacticStatement(nodes: Node[], parent: StatementNode | null): StatementNode {
  collapseLineNodes(nodes);
  collapseDeclaration(nodes, parent);

  if (nodes.length > 1) {
    throw new Error('Not implemented');
  }

  const statement = statementNode(nodes[0], parent);

  return statement;
}
