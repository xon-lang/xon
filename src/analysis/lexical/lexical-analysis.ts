/* eslint-disable max-lines */
import { OperatorType, RecursiveType, operatorsOrders } from '~/analysis/lexical/operators';
import { Boolean2, Integer, String2 } from '~/lib/core';
import { BodyNode, bodyNode } from '~/node/body/body-node';
import { GroupNode, scanGroupNode } from '~/node/group/group-node';
import { InfixNode, infixNode } from '~/node/infix/infix-node';
import { invokeNode } from '~/node/invoke/invoke-node';
import { scanCloseNode } from '~/node/lexical/close/close-node';
import { scanCommaNode } from '~/node/lexical/comma/comma-node';
import { IdNode, scanIdNode } from '~/node/lexical/id/id-node';
import { scanIntegerNode } from '~/node/lexical/integer/integer-node';
import { JoiningNode, scanJoiningNode } from '~/node/lexical/joining/joining-node';
import { ModifierNode } from '~/node/lexical/modifier/modifier-node';
import { NlNode, scanNlNode } from '~/node/lexical/nl/nl-node';
import { scanStringNode } from '~/node/lexical/string/string-node';
import { scanUnknownNode } from '~/node/lexical/unknown/unknown-node';
import { WhitespaceNode, scanWhitespaceNode } from '~/node/lexical/whitespace/whitespace-node';
import { MemberNode, memberNode } from '~/node/member/member-node';
import { modifierIdNode } from '~/node/modifier-id/modifier-id-node';
import { HiddenTokenNode, Node, NodeType, NonHiddenTokenNode, is } from '~/node/node';
import { OperatorNode, scanOperatorNode } from '~/node/operator/operator-node';
import { postfixNode } from '~/node/postfix/postfix-node';
import { prefixNode } from '~/node/prefix/prefix-node';
import { statementNode } from '~/node/statement/statement-node';

type NodeScanFunction = (analysis: LexicalAnalysis) => Node | null;

const nodeScanFunctions: NodeScanFunction[] = [
  scanNlNode,
  // scanBodyNode

  scanIntegerNode,
  scanStringNode,
  scanGroupNode,
  // scanOpenNode, this handle group
  // this can handle group if possible
  scanCloseNode,
  scanCommaNode,
  scanJoiningNode,
  scanWhitespaceNode,
  scanOperatorNode,
  scanIdNode,
  scanUnknownNode,
];

export class LexicalAnalysis {
  public index = 0;

  public constructor(public text: String2) {}

  public body(breakFn: ((node: Node) => Boolean2) | null = null): BodyNode & { breakNode?: Node } {
    const indentBody: { indent: Integer | null; body: BodyNode }[] = [];
    let nodes: NonHiddenTokenNode[] = [];
    let hidden: HiddenTokenNode[] = [];
    let breakNode: Node | undefined;

    while (this.index < this.text.length) {
      const node = this.nextNode();

      if (breakFn && breakFn(node)) {
        breakNode = node;
        break;
      }

      if (is<WhitespaceNode>(node, NodeType.WHITESPACE) || is<JoiningNode>(node, NodeType.JOINING)) {
        hidden.push(node);
        continue;
      }

      if (is<NlNode>(node, NodeType.NL)) {
        hidden.push(node);
        this.putStatement(indentBody, nodes, hidden);
        nodes = [];
        hidden = [];
        continue;
      }

      (node as NonHiddenTokenNode).hidden = hidden;
      hidden = [];
      nodes.push(node as NonHiddenTokenNode);
    }

    // if (nodes.length > 0 || hidden.length > 0) {
    this.putStatement(indentBody, nodes, hidden);
    // }

    return {
      breakNode,
      ...(indentBody[0]?.body ?? bodyNode([])),
    };
  }

  public nextNode(): Node {
    for (const nodeScan of nodeScanFunctions) {
      const node = nodeScan(this);
      if (node) {
        this.index = node.stop + 1;

        return node;
      }
    }

    throw new Error('Not implemented');
  }

  public putStatement(
    indentBody: { indent: Integer | null; body: BodyNode }[],
    nodes: NonHiddenTokenNode[],
    hidden: HiddenTokenNode[],
  ): void {
    const indent = getStatementIndent(nodes);
    const syntaxNodes = getSyntaxNodes(nodes);
    const statement = statementNode(syntaxNodes);
    statement.hidden = hidden;

    // if first statement
    if (indentBody.length === 0) {
      indentBody.push({ indent, body: bodyNode([statement]) });

      return;
    }

    const lastIndentBody = indentBody.last();

    // if no nodes
    if (indent === null) {
      lastIndentBody.body.statements.push(statement);

      return;
    }

    // new body
    if (lastIndentBody.indent !== null && indent > lastIndentBody.indent) {
      const body = bodyNode([statement]);
      indentBody.push({ indent, body });

      // add the body as the last statement
      lastIndentBody.body.statements.last().body = body;

      return;
    }

    // if should be added to existing body

    const foundIndentBodyIndex = indentBody.findLastIndex((x) => x.indent === null || x.indent <= indent);

    if (foundIndentBodyIndex < 0) {
      throw new Error('Not implemented');
    }

    // remove between current and parent bodies cuz we switch to existing body and never return to previous
    const foundIndentBody = indentBody[foundIndentBodyIndex];
    indentBody.splice(foundIndentBodyIndex + 1);
    foundIndentBody.indent = Math.min(foundIndentBody.indent ?? indent, indent);
    foundIndentBody.body.statements.push(statement);
  }
}

function getStatementIndent(nodes: NonHiddenTokenNode[]): Integer | null {
  const whitespaceTokens = nodes
    .firstOrNull()
    ?.hidden.takeWhile((x) => is(x, NodeType.WHITESPACE) || is(x, NodeType.COMMENT))
    .filter((x) => is(x, NodeType.WHITESPACE));

  return whitespaceTokens?.sum((x) => x.stop - x.start + 1) ?? null;
}

function getSyntaxNodes(nodes: Node[]): Node[] {
  const nonHidden = nodes.filter((x) => !is(x, NodeType.HIDDEN));
  collapseLineNodes(nonHidden);

  return nonHidden;
}

function collapseLineNodes(nodes: Node[]): void {
  if (nodes.length > 1 && is<ModifierNode>(nodes[0], NodeType.MODIFIER)) {
    if (is<IdNode>(nodes[1], NodeType.ID) || is<OperatorNode>(nodes[1], NodeType.OPERATOR)) {
      nodes.splice(0, 2, modifierIdNode(nodes[0], nodes[1]));
    }
  }

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
}

function collapseInvoke(nodes: Node[]): void {
  for (let i = 0; i < nodes.length; i++) {
    const element = nodes[i];
    if (is<GroupNode>(element, NodeType.GROUP) && i > 0) {
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

function handleInfix(operator: OperatorNode, left: Node, right: Node): InfixNode | MemberNode {
  // fix complex condition
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
