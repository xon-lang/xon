import { ISSUE_MESSAGE } from '../../issue/issue-message';
import { Node } from '../node/node';
import { ParserContext } from '../parser-context';
import { collapseOperators } from './collapse-operators';

export function getSyntacticNode(context: ParserContext): Node {
  collapseOperators(context);
  // collapseDeclaration(context);

  context.nodes.slice(1).forEach((node) => context.addErrorIssue(node, ISSUE_MESSAGE.notImplemented()));

  return context.nodes[0];
}
