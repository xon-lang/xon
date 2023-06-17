import { Analysis } from '~/analysis/analysis';
import { is } from '~/analysis/is';
import { NodeType, Token } from '~/analysis/node';
import { DataType } from '~/analysis/semantic/data-type';
import { Scope } from '~/analysis/semantic/scope';
import { SemanticNode } from '~/analysis/semantic/semantic-node';
import { LadderNode } from '~/analysis/syntax/node/ladder/ladder-node';
import { SyntaxNode } from '~/analysis/syntax/syntax-node';

export class SemanticAnalysis implements Analysis {
  public constructor(public syntaxNodes: Token[]) {}

  body(): SemanticNode[] {
    const scope = new Scope(null);
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

function handleDeclaration(node: Token): Token {}

function dataType(node: Token): DataType {}
