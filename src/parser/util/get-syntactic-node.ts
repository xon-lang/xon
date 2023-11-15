import { createErrorIssue } from '~/issue/issue';
import { issueMessage } from '~/issue/issue-message';
import { Parser } from '~/parser/parser';
import { collapseDeclaration } from '~/parser/util/collapse-declaration';
import { Node } from '../node/node';
import { collapseLineNodes } from './collapse-line-nodes';

export function getSyntacticNode(parser: Parser, nodes: Node[], parent: Node | null): Node {
  collapseLineNodes(nodes);
  collapseDeclaration(nodes, parent);

  nodes.slice(1).forEach((node) => parser.issues.push(createErrorIssue(node, issueMessage.unexpectedNode)));

  const node = nodes[0];

  if (parent) {
    node.parent = parent;
    parent.children ||= [];
    parent.children.push(node);
  }

  return node;
}
