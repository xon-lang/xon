import { ISSUE_MESSAGE } from '../../issue/issue-message';
import { StatementNode } from '../node/node';
import { SyntaxContext } from '../syntax-context';
import { collapseOperators } from './collapse-operators';

export function getStatementNode(context: SyntaxContext): StatementNode {
  collapseOperators(context);

  context.nodes.slice(1).forEach((node) => context.addErrorIssue(node, ISSUE_MESSAGE.notImplemented()));

  return context.nodes[0] as StatementNode;
}
