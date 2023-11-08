import { NodeType, is } from '~/node/node';
import { SyntacticNode } from '~/node/syntactic/syntactic-node';
import { collapseLineNodes } from './collapse-line-nodes';

export function getSyntaxNodes(nodes: SyntacticNode[]): SyntacticNode[] {
  const nonHidden = nodes.filter((x) => !is(x, NodeType.HIDDEN));
  collapseLineNodes(nonHidden);

  return nonHidden;
}
