import { Analysis } from '~/analysis/analysis';
import { LadderNode } from '~/analysis/syntax/node/ladder/ladder-node';
import { SyntaxNode } from '~/analysis/syntax/syntax-node';
import { LexicalNode } from '~/node/lexical/lexical-node';
import { NodeType, is } from '~/node/node';
import { DataType } from '~/node/semantic/data-type';
import { SemanticNode } from '~/node/semantic/semantic-node';
import { Scope } from '~/node/semantic/scope';

export class SemanticAnalysis implements Analysis {
  public constructor(public syntaxNodes: LexicalNode[]) {}

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

function handleDeclaration(node: LexicalNode): LexicalNode {}

function dataType(node: LexicalNode): DataType {}
