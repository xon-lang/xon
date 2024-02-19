import { ISSUE_MESSAGE } from '../../issue/issue-message';
import { Nothing } from '../../lib/core';
import { StatementNode, statementNode } from '../node/statement/statement-node';
import { SyntaxContext } from '../syntax-context';
import { collapseDeclarations } from './collapse-declarations';
import { collapseOperators } from './collapse-operators';

export function getStatementNode(context: SyntaxContext, parent: StatementNode | Nothing): StatementNode {
  collapseOperators(context);
  collapseDeclarations(context);

  context.nodes.slice(1).forEach((node) => context.addErrorIssue(node, ISSUE_MESSAGE.notImplemented()));

  return statementNode(context, context.nodes[0], parent);
}
