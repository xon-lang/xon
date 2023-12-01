import { createErrorIssue } from '~/issue/issue';
import { issueMessage } from '~/issue/issue-message';
import { collapseDeclaration } from '~/parser/util/collapse-declaration';
import { Node } from '../node/node';
import { ParserContext } from '../parser-context';
import { collapseOperators } from './collapse-operators';

export function getSyntacticNode(context: ParserContext): Node {
  collapseOperators(context);
  collapseDeclaration(context);

  context.nodes.slice(1).forEach((node) => context.issues.push(createErrorIssue(node, issueMessage.unexpectedNode)));

  return context.nodes[0];
}
