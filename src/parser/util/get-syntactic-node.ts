import { ISSUE_MESSAGE } from '../../issue/issue-message';
import { Node } from '../node/node';
import { ParserContext } from '../parser-context';
import { collapseOperators } from './collapse-operators';

export function getSyntacticNode(context: ParserContext): Node {
  collapseOperators(context);
  // collapseTypes(context);

  context.nodes.slice(1).forEach((node) => context.addErrorIssue(node, ISSUE_MESSAGE.notImplemented()));

  return context.nodes[0];
}

// function collapseTypes(context: ParserContext): void {
//   const node = context.nodes[0];

//   if (is<PrefixNode>(node, NodeType.PREFIX) &&  is<ModifierNode>(node.operator)) {

//   }
// }
