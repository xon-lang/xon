import { Analysis } from '~/analysis/analysis';
import { is } from '~/analysis/is';
import { Node, NodeType } from '~/analysis/node';
import { SemanticNode } from '~/analysis/semantic/semantic-node';
import { LadderNode } from '~/analysis/syntax/node/ladder/ladder-node';
import { SyntaxNode } from '~/analysis/syntax/syntax-node';

export class SemanticAnalysis implements Analysis {
  public constructor(public syntaxNodes: Node[]) {}

  nodes(): SemanticNode[] {
    const result: SemanticNode[] = [];
    for (const node of this.syntaxNodes) {
      const semanticNode = handleSyntaxNode(node);
      result.push(semanticNode);
    }
    return result;
  }
}

function handleSyntaxNode(node: SyntaxNode): SemanticNode {
  if (is<LadderNode>(node, NodeType.LADDER)) {
    return handleLadder(node);
  }

  throw new Error('Not implemented');
}

function handleLadder(node: LadderNode): SemanticNode {
  const { header, body } = node;
}
