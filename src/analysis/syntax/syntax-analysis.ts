import { Analysis } from '~/analysis/analysis';
import { is } from '~/analysis/is';
import { LexicalAnalysis } from '~/analysis/lexical/lexical-analysis';
import { LexicalNode } from '~/analysis/lexical/lexical-node';
import { CloseNode } from '~/analysis/lexical/node/close/close-node';
import { IdNode } from '~/analysis/lexical/node/id/id-node';
import { OpenNode } from '~/analysis/lexical/node/open/open-node';
import { OperatorNode } from '~/analysis/lexical/node/operator/operator-node';
import { Node, NodeType } from '~/analysis/node';
import { ArrayNode, arrayNode } from '~/analysis/syntax/node/array/array-node';
import { BodyNode, bodyNode } from '~/analysis/syntax/node/body/body-node';
import { InfixNode, infixNode } from '~/analysis/syntax/node/infix/infix-node';
import { invokeNode } from '~/analysis/syntax/node/invoke/invoke-node';
import { ladderNode } from '~/analysis/syntax/node/ladder/ladder-node';
import { MemberNode, memberNode } from '~/analysis/syntax/node/member/member-node';
import { postfixNode } from '~/analysis/syntax/node/postfix/postfix-node';
import { prefixNode } from '~/analysis/syntax/node/prefix/prefix-node';
import { OperatorType, RecursiveType, operatorsOrders } from '~/analysis/syntax/operators';
import '~/extensions';
import { Integer, String2 } from '~/lib/core';
import { Source } from '~/source/source';

export function parseBody(source: Source): BodyNode {
  const scanner = new LexicalAnalysis(source.text);
  const tokens = scanner.nodes();
  const parser = new SyntaxAnalysis(tokens);
  const body = parser.body();
  return body;
}

export function syntaxNode(source: Source): Node {
  const { nodes } = parseBody(source);
  if (nodes.length !== 1) {
    throw new Error('Not implemented');
  }
  return nodes[0];
}

export class SyntaxAnalysis implements Analysis {
  constructor(public lexicalNodes: LexicalNode[]) {}

  public body(): BodyNode {
    const filteredNodes = this.lexicalNodes.filter((node) => node.$ !== NodeType.JOINING);
    collapseArrays(filteredNodes);
    const splittedLines = splitLineNodes(filteredNodes);
    const result = collapseBody(splittedLines);

    return result;
  }
}

function collapseBody(lines: { indent: Integer; lineNodes: Node[] }[], parent?: Node): BodyNode {
  if (lines.length === 0) {
    throw new Error('Not implemented');
  }

  const bodyNodes: Node[] = [];
  const bodyIndent = lines[0].indent;

  for (let i = 0; i < lines.length; i++) {
    const { indent, lineNodes } = lines[i];
    if (indent === bodyIndent) {
      const result = collapseLineNodes(lineNodes);
      // collapseDeclarationNode(result, parent)
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

function collapseArrays(nodes: Node[]): void {
  const openNodes: OpenNode[] = nodes
    .filter((node) => is<OpenNode>(node, NodeType.OPEN))
    .reverse()
    .map((x) => x as OpenNode);

  for (const openNode of openNodes) {
    const closeNode = nodeAfter(nodes, openNode, NodeType.CLOSE);
    if (!closeNode || !is<CloseNode>(closeNode, NodeType.CLOSE)) {
      throw new Error('No close pair node');
    }

    const betweenNodes = nodesBetween(nodes, openNode, closeNode);
    const parameters = splitNodes(betweenNodes, NodeType.COMMA)
      .map((nodes) => {
        const lineNodes = splitLineNodes(nodes);
        return collapseBody(lineNodes);
      })
      .map((node) => {
        if (is<BodyNode>(node, NodeType.BODY)) {
          if (node.nodes.length === 1) {
            return node.nodes[0];
          }
        }
        throw new Error('Not implemented');
      });

    const result = arrayNode(openNode, closeNode, parameters);
    const startIndex = nodes.indexOf(openNode);
    const stopIndex = nodes.indexOf(closeNode);
    nodes.splice(startIndex, stopIndex - startIndex + 1, result);
  }
}

function collapseLineNodes(nodes: Node[]): Node[] {
  for (const operatorsOrder of operatorsOrders) {
    if (operatorsOrder.operatorType === OperatorType.INVOKE) {
      collapseInvoke(nodes);
    }
    for (const operators of operatorsOrder.operators) {
      const operatorIndex = findOperatorIndex(
        nodes,
        operators,
        operatorsOrder.operatorType,
        operatorsOrder.recursiveType,
      );
      if (operatorIndex >= 0) {
        collapseOperators(nodes, operatorsOrder.operatorType, operatorIndex);
        collapseLineNodes(nodes);
      }
    }
  }
  return nodes;
}

function collapseInvoke(nodes: Node[]): void {
  for (let i = 0; i < nodes.length; i++) {
    const element = nodes[i];
    if (is<ArrayNode>(element, NodeType.ARRAY) && i > 0) {
      const prev = nodes[i - 1];
      if (!is(prev, NodeType.OPERATOR)) {
        nodes[i] = invokeNode(prev, element);
        nodes.splice(i - 1, 1);
        collapseInvoke(nodes);

        return;
      }
    }
  }
}

function findOperatorIndex(
  nodes: Node[],
  operators: String2[],
  operatorType: OperatorType,
  recursiveType: RecursiveType,
): Integer {
  for (let i = 0; i < nodes.length; i++) {
    const index = recursiveType === RecursiveType.LEFT ? i : nodes.length - i - 1;

    const operator = nodes[index];

    if (is<OperatorNode>(operator, NodeType.OPERATOR) && operators.includes(operator.text)) {
      const left = nodes[index - 1];
      const right = nodes[index + 1];

      if (operatorType === OperatorType.PREFIX) {
        if (!is(right, NodeType.OPERATOR) && (index === 0 || is(left, NodeType.OPERATOR))) {
          return index;
        }
      } else if (operatorType === OperatorType.POSTFIX) {
        if (!is(left, NodeType.OPERATOR) && (index === nodes.length - 1 || is(right, NodeType.OPERATOR))) {
          return index;
        }
      } else if (operatorType === OperatorType.INFIX) {
        if (!is(left, NodeType.OPERATOR) && !is(right, NodeType.OPERATOR)) {
          return index;
        }
      }
    }
  }

  return -1;
}

function collapseOperators(nodes: Node[], operatorType: OperatorType, operatorIndex: Integer): void {
  if (operatorIndex < 0) return;
  const operator = nodes[operatorIndex];
  if (!is<OperatorNode>(operator, NodeType.OPERATOR)) {
    return;
  }

  if (operatorType === OperatorType.PREFIX) {
    const right = nodes[operatorIndex + 1];

    if (!right) {
      throw new Error('Not implemented');
    }

    const prefix = prefixNode(operator, right);
    nodes[operatorIndex] = prefix;
    nodes.splice(operatorIndex + 1, 1);

    return;
  }

  if (operatorType === OperatorType.POSTFIX) {
    const left = nodes[operatorIndex - 1];

    if (!left) {
      throw new Error('Not implemented');
    }

    const postfix = postfixNode(operator, left);
    nodes[operatorIndex] = postfix;
    nodes.splice(operatorIndex - 1, 1);

    return;
  }

  if (operatorType === OperatorType.INFIX) {
    const left = nodes[operatorIndex - 1] as Node;
    const right = nodes[operatorIndex + 1] as Node;

    if (!left || !right) {
      throw new Error('Not implemented');
    }

    const infix = handleInfix(operator, left, right);
    nodes[operatorIndex] = infix;
    nodes.splice(operatorIndex - 1, 1);
    nodes.splice(operatorIndex, 1);
  }
}

function splitLineNodes(nodes: Node[]): { indent: Integer; lineNodes: Node[] }[] {
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

function splitNodes(nodes: Node[], splitNodeType: NodeType): Node[][] {
  const result: Node[][] = [];
  let chunk: Node[] = [];

  for (const node of nodes) {
    if (is(node, splitNodeType)) {
      if (chunk.length > 0) {
        result.push(chunk);
        chunk = [];
      }
    } else {
      chunk.push(node);
    }
  }
  if (chunk.length > 0) {
    result.push(chunk);
  }

  return result;
}

function nodesBetween(nodes: Node[], start: Node, stop: Node): Node[] {
  const result: Node[] = [];

  const startIndex = nodes.indexOf(start);
  const stopIndex = nodes.indexOf(stop);

  for (let i = startIndex + 1; i < stopIndex; i++) {
    result.push(nodes[i]);
  }
  return result;
}

function nodeAfter(nodes: Node[], node: Node, nodeType: NodeType): Node | null {
  const nodeIndex = nodes.indexOf(node);

  for (let i = nodeIndex + 1; i < nodes.length; i++) {
    if (is(nodes[i], nodeType)) {
      return nodes[i];
    }
  }
  return null;
}

function handleInfix(operator: OperatorNode, left: Node, right: Node): InfixNode | MemberNode {
  if (operator.text === '.' || operator.text === '::') {
    if (is<IdNode>(right, NodeType.ID)) {
      return memberNode(operator, left, right);
    }
    throw new Error('Not implemented');
  }

  return infixNode(operator, left, right);
}

// function collapseDeclarationNode(lineNodes: Node[], parent?: Node):void {
//   let modifier: ModifierNode | null = null;
//   let name: IdNode | OperatorNode | null = null;
//   let parameters: DeclarationNode[] | null = null;
//   let type: Node | null = null;
//   let value: Node | null = null;

//   // model
//   if (is<ModifierNode>(lineNodes[0], NodeType.MODIFIER)) {
//     modifier = lineNodes[0];
//     lineNodes.splice(0, 1);
//   }

//   // model a // infix +
//   if (is<IdNode>(lineNodes[0], NodeType.ID)) {
//     name = lineNodes[0];
//     const declaration = declarationNode(modifier, name, null, null, null);
//     lineNodes.splice(0, 1, declaration);
//     if (lineNodes.length > 1) {
//       throw new Error('Not implemented');
//     }
//   }

//   //
//   if (is<PrefixNode>(node, NodeType.PREFIX) && is<IdNode>(node.value, NodeType.ID)) {
//     return idDeclarationNode(node.operator, node.value, null, null, null);
//   }

//   // prefix id
//   if (is<InfixNode>(node, NodeType.INFIX) && node.operator.text === ':') {
//     body.nodes[index] = idDeclarationNode(node.operator, node.value, null, null, null);
//     continue;
//   }
//   return null;
// }
