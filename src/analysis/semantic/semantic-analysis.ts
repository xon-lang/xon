import { Analysis } from '~/analysis/analysis';
import { Node } from '~/analysis/node';
import { SemanticNode } from '~/analysis/semantic/semantic-node';

export class SemanticAnalysis implements Analysis {
  public constructor(public syntaxNodes: Node[]) {}

  nodes(): SemanticNode[] {
    return [];
    // if ((operator.text === '.' || operator.text === '::') && is<IdNode>(right, NodeType.ID)) {
    //   return memberNode(operator, left, right);
    // }
  }
}
