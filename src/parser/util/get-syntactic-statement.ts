import { StatementNode, statementNode } from '~/parser/node/statement/statement-node';
import { collapseDeclaration } from '~/parser/util/collapse-declaration';
import { Node } from '../node/node';
import { collapseLineNodes } from './collapse-line-nodes';

export function getSyntacticStatement(nodes: Node[], parent: StatementNode | null): StatementNode {
  const statement = statementNode(nodes, parent);
  collapseLineNodes(statement.nodes);
  collapseDeclaration(statement);

  return statement;
}
