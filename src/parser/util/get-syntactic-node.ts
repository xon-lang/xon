import {ISSUE_MESSAGE} from '../../issue/issue-message';
import {Nothing} from '../../lib/core';
import {StatementNode, statementNode} from '../node/syntax/statement/statement-node';
import {SyntaxContext} from '../syntax-context';
import {collapseDeclaration} from './collapse-declaration';
import {collapseOperators} from './collapse-operators';

export function getStatementNode(context: SyntaxContext, parent: StatementNode | Nothing): StatementNode {
  collapseOperators(context);
  collapseDeclaration(context);

  context.nodes.slice(1).forEach((node) => context.issueManager.addError(node, ISSUE_MESSAGE.notImplemented()));

  return statementNode(context, context.nodes, parent);
}
