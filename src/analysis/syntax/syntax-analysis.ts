import { is } from '~/analysis/is';
import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { LexicalNode } from '~/analysis/lexical/lexical-node';
import { BodyNode, bodyNode } from '~/analysis/lexical/node/body/body-node';
import { IdNode } from '~/analysis/lexical/node/id/id-node';
import { InfixNode, infixNode } from '~/analysis/lexical/node/infix/infix-node';
import { OperatorNode } from '~/analysis/lexical/node/operator/operator-node';
import { NodeType, Token } from '~/analysis/node';
import { ladderNode } from '~/analysis/syntax/node/ladder/ladder-node';
import { MemberNode, memberNode } from '~/analysis/syntax/node/member/member-node';
import '~/extensions';
import { Integer } from '~/lib/core';
import { Source } from '~/source/source';

export function parseBody(source: Source): BodyNode {
  const scanner = new LexicalAnalysis(source.text);
  const nodes = scanner.body();
  const parser = new SyntaxAnalysis(nodes);
  const body = parser.body();

  return body;
}

export function syntaxNode(source: Source): Token {
  const { nodes } = parseBody(source);
  if (nodes.length !== 1) {
    throw new Error('Not implemented');
  }

  return nodes[0];
}

export class SyntaxAnalysis {
  constructor(public nodes: Token[]) {}

  public body(): BodyNode {
    const filteredNodes = this.nodes.filter((node) => node.$ !== NodeType.JOINING);
    collapseArrays(filteredNodes);
    const splittedLines = splitLineNodes(filteredNodes);
    const result = collapseBody(splittedLines);

    return result;
  }
}

function collapseBody(lines: { indent: Integer; lineNodes: Token[] }[], parent?: Token): BodyNode {
  if (lines.length === 0) {
    throw new Error('Not implemented');
  }

  const bodyNodes: Token[] = [];
  const bodyIndent = lines[0].indent;

  for (let i = 0; i < lines.length; i++) {
    const { indent, lineNodes } = lines[i];
    if (indent === bodyIndent) {
      const result = collapseLineNodes(lineNodes);
      // const declaration = collapseDeclarationNode(result, parent);
      bodyNodes.push(result[0]);
      continue;
    }
    if (indent > bodyIndent) {
      const innerLines = lines.takeWhile((x) => x.indent > bodyIndent, i);

      const header = bodyNodes[bodyNodes.length - 1];
      const body = collapseBody(innerLines, header);
      bodyNodes[bodyNodes.length - 1] = ladderNode(header, body);
      i = i + innerLines.length - 1; // because of loop make i++
      continue;
    }
  }

  return bodyNode(bodyNodes);
}

// function collapseArrays(nodes: Node[]): void {
//   const openNodes: OpenNode[] = nodes
//     .filter((node) => is<OpenNode>(node, NodeType.OPEN))
//     .reverse()
//     .map((x) => x as OpenNode);

//   for (const openNode of openNodes) {
//     const closeNode = nodeAfter(nodes, openNode, NodeType.CLOSE);
//     if (!closeNode || !is<CloseNode>(closeNode, NodeType.CLOSE)) {
//       throw new Error('No close pair node');
//     }

//     const betweenNodes = nodesBetween(nodes, openNode, closeNode);
//     const parameters = splitNodes(betweenNodes, NodeType.COMMA)
//       .map((nodes) => {
//         const lineNodes = splitLineNodes(nodes);

//         return collapseBody(lineNodes);
//       })
//       .map((node) => {
//         if (is<BodyNode>(node, NodeType.BODY)) {
//           if (node.nodes.length === 1) {
//             return node.nodes[0];
//           }
//         }
//         throw new Error('Not implemented');
//       });

//     const result = arrayNode(openNode, closeNode, parameters);
//     const startIndex = nodes.indexOf(openNode);
//     const stopIndex = nodes.indexOf(closeNode);
//     nodes.splice(startIndex, stopIndex - startIndex + 1, result);
//   }
// }

function splitLineNodes(nodes: Token[]): { indent: Integer; lineNodes: Token[] }[] {
  const nlSplitted = splitNodes(nodes, NodeType.NL);

  if (nlSplitted.length === 0) {
    return [];
  }

  const firstNode = nlSplitted[0][0] as LexicalNode;
  const minIndent = is(firstNode, NodeType.WHITESPACE) ? firstNode.stop - firstNode.stop + 1 : 0;

  const result = nlSplitted
    .map((lineNodes) => {
      const firstNode = lineNodes[0] as LexicalNode;
      const indent = is(firstNode, NodeType.WHITESPACE) ? firstNode.stop - firstNode.stop + 1 : 0;

      return {
        indent: indent <= minIndent ? 0 : indent,
        lineNodes: lineNodes.filter((node) => node.$ !== NodeType.WHITESPACE),
      };
    })
    .filter((x) => x.lineNodes.length > 0);

  return result;
}

function nodesBetween(nodes: Token[], start: Token, stop: Token): Token[] {
  const result: Token[] = [];

  const startIndex = nodes.indexOf(start);
  const stopIndex = nodes.indexOf(stop);

  for (let i = startIndex + 1; i < stopIndex; i++) {
    result.push(nodes[i]);
  }

  return result;
}

function nodeAfter(nodes: Token[], node: Token, nodeType: NodeType): Token | null {
  const nodeIndex = nodes.indexOf(node);

  for (let i = nodeIndex + 1; i < nodes.length; i++) {
    if (is(nodes[i], nodeType)) {
      return nodes[i];
    }
  }

  return null;
}

function handleInfix(operator: OperatorNode, left: Token, right: Token): InfixNode | MemberNode {
  if (operator.text === '.' || operator.text === '::') {
    if (is<IdNode>(right, NodeType.ID)) {
      return memberNode(operator, left, right);
    }
    throw new Error('Not implemented');
  }

  return infixNode(operator, left, right);
}

// function collapseDeclarationNode(lineNodes: Node[], parent?: Node): DeclarationNode | null {
//   if (lineNodes.length === 0) {
//     return null;
//   }

//   if (lineNodes.length === 1) {
//     if (is<DeclarationNode>(lineNodes[0], NodeType.DECLARATION)) {
//       return lineNodes[0];
//     }
//     if (is<ModifierNode>(lineNodes[0], NodeType.MODIFIER)) {
//       return declarationNode(lineNodes[0], null, null, null, null);
//     }
//     return parseDeclaration(null, lineNodes[0]);
//   }

//   if (lineNodes.length === 2 && is<ModifierNode>(lineNodes[0], NodeType.MODIFIER)) {
//     return parseDeclaration(lineNodes[0], lineNodes[1]);
//   }
//   throw new Error('Not implemented');
// }

// function parseDeclaration(modifier: ModifierNode | null, node: Node, parent?: Node): DeclarationNode | null {
//   if (is<IdNode>(node, NodeType.ID)) {
//     return declarationNode(modifier, node, null, null, null);
//   }

//   if (is<InfixNode>(node, NodeType.INFIX) && node.operator.text === '=') {
//     return parseAssignLeftDeclaration(modifier, node.left, node.right, parent);
//   }
//   return parseAssignLeftDeclaration(modifier, node, null, parent);
// }

// function parseAssignLeftDeclaration(
//   modifier: ModifierNode | null,
//   node: Node,
//   value: Node | null,
//   parent?: Node,
// ): DeclarationNode | null {
//   if (is<InfixNode>(node, NodeType.INFIX) && node.operator.text === ':') {
//     if (is<InvokeNode>(node.left, NodeType.INVOKE) && is<IdNode>(node.left.instance, NodeType.ID)) {
//       const parameters = node.left.array.parameters.map((x) => collapseDeclarationNode([x], parent));
//       return declarationNode(modifier, node.left.instance, parameters, node.right, value);
//     }
//     if (is<IdNode>(node.left, NodeType.ID)) {
//       return declarationNode(modifier, node.left, null, node.right, value);
//     }
//   }

//   if (is<InvokeNode>(node, NodeType.INVOKE) && is<IdNode>(node.instance, NodeType.ID)) {
//     const parameters = node.array.parameters.map((x) => collapseDeclarationNode([x], parent));
//     return declarationNode(modifier, node.instance, parameters, null, value);
//   }
//   if (is<IdNode>(node, NodeType.ID)) {
//     return declarationNode(modifier, node, null, null, value);
//   }

//   return null;
// }
