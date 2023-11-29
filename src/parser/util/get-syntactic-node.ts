import { createErrorIssue } from '~/issue/issue';
import { issueMessage } from '~/issue/issue-message';
import { collapseDeclaration } from '~/parser/util/collapse-declaration';
import { Node } from '../node/node';
import { ParserContext } from '../parser-context';
import { collapseLineNodes } from './collapse-line-nodes';

export function getSyntacticNode(context: ParserContext): Node {
  collapseLineNodes(context);
  collapseDeclaration(context);

  context.nodes.slice(1).forEach((node) => context.issues.push(createErrorIssue(node, issueMessage.unexpectedNode)));

  const node = context.nodes[0];

  return node;
}
