import { createErrorIssue } from '~/issue/issue';
import { issueMessage } from '~/issue/issue-message';
import { collapseDeclaration } from '~/parser/util/collapse-declaration';
import { Node } from '../node/node';
import { ParserContext } from '../parser-context';
import { collapseLineNodes } from './collapse-line-nodes';

export function getSyntacticNode(context: ParserContext, parent: Node | null): Node {
  collapseLineNodes(context.lastStatementNodes);
  collapseDeclaration(context, context.lastStatementNodes, parent);

  context.lastStatementNodes
    .slice(1)
    .forEach((node) => context.issues.push(createErrorIssue(node, issueMessage.unexpectedNode)));

  const node = context.lastStatementNodes[0];

  return node;
}
