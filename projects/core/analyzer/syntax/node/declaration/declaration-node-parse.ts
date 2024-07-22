import {$, is, isNonOperatorExpression} from '../../../../$';
import {Array2, Integer, Nothing, nothing} from '../../../../../lib/types';
import {ASSIGN, MODIFIER_KEYWORDS, TYPE, TYPE_MODIFIER} from '../../../lexical/lexical-analyzer-config';
import {IdNode} from '../../../lexical/node/id/id-node';
import {OperatorNode} from '../../../lexical/node/operator/operator-node';
import {ExpressionNode, Node, nodeFindMap} from '../../../node';
import {DocumentationNode} from '../../documentation/documentation-node';
import {GroupNode} from '../../group/group-node';
import {StatementNode} from '../../statement/statement-node';
import {SyntaxParseFn} from '../../statement/statement-node-collapse';
import {SyntaxAnalyzer} from '../../syntax-analyzer';
import {AssignNode, assignNode} from '../assign/assign-node';
import {TypeNode, typeNode} from '../type/type-node';
import {DeclarationNode, partialToDeclaration} from './declaration-node';

export function declarationNodeParse(): SyntaxParseFn {
  return (
    analyzer: SyntaxAnalyzer,
    nodes: Array2<Node>,
    _startIndex: Integer,
    parentStatement: StatementNode | Nothing,
  ) => {
    if (is(nodes[0], $.DeclarationNode)) {
      return nothing;
    }

    const parts = getDeclarationParts(analyzer, nodes, parentStatement);

    if (!parts) {
      return nothing;
    }

    if (parts.modifier) {
      parts.modifier.hiddenNodes = parts.modifierHiddenNodes;
    }

    if (parts.id) {
      parts.id.hiddenNodes = parts.idHiddenNodes;
    }

    return {
      index: parts.spliceIndex,
      deleteCount: parts.deleteCount,
      node: partialToDeclaration(analyzer, parts),
    };
  };
}

function getDeclarationParts(
  analyzer: SyntaxAnalyzer,
  nodes: Array2<Node>,
  parentStatement: StatementNode | Nothing,
):
  | {
      spliceIndex: Integer;
      deleteCount: Integer;
      modifierHiddenNodes?: Array2<Node> | Nothing;
      modifier?: OperatorNode | Nothing;
      idHiddenNodes?: Array2<Node> | Nothing;
      id: IdNode;
      generics?: GroupNode | Nothing;
      parameters?: GroupNode | Nothing;
      type?: TypeNode | Nothing;
      assign?: AssignNode | Nothing;
    }
  | Nothing {
  const header = getHeader(analyzer, nodes[0]);

  if (!header) {
    return nothing;
  }

  const typeOperatorFound = nodeFindMap(nodes, 0, true, (node, index, nodes) => {
    if (
      index - 1 === 0 &&
      is(node, $.OperatorNode) &&
      node.text === TYPE &&
      isNonOperatorExpression(nodes[index + 1])
    ) {
      return {node, index};
    }

    return nothing;
  });

  if (typeOperatorFound) {
    const typeValue = nodes[typeOperatorFound.index + 1] as ExpressionNode;
    const assignOperator = nodes[typeOperatorFound.index + 2];
    const assignValue = nodes[typeOperatorFound.index + 3];

    const type = typeNode(analyzer, typeOperatorFound.node, typeValue);

    if (
      is(assignOperator, $.OperatorNode) &&
      assignOperator.text === ASSIGN &&
      isNonOperatorExpression(assignValue)
    ) {
      const assign = assignNode(analyzer, assignOperator, assignValue);

      return {spliceIndex: typeOperatorFound.index - 1, deleteCount: 5, ...header, type, assign};
    }

    return {spliceIndex: typeOperatorFound.index - 1, deleteCount: 3, ...header, type};
  }

  if (!header.modifier && !isTypeDeclarationNode(parentStatement?.value)) {
    return nothing;
  }

  const assignOperatorFound = nodeFindMap(nodes, 0, true, (node, index, nodes) => {
    if (
      index - 1 === 0 &&
      is(node, $.OperatorNode) &&
      node.text === ASSIGN &&
      isNonOperatorExpression(nodes[index + 1])
    ) {
      return {node, index};
    }

    return nothing;
  });

  if (assignOperatorFound) {
    const assignValue = nodes[assignOperatorFound.index + 1] as ExpressionNode;
    const assign = assignNode(analyzer, assignOperatorFound.node, assignValue);

    return {spliceIndex: assignOperatorFound.index - 1, deleteCount: 3, ...header, assign};
  }

  return {spliceIndex: 0, deleteCount: 1, ...header};
}

function getHeader(
  analyzer: SyntaxAnalyzer,
  node: Node | Nothing,
):
  | {
      modifierHiddenNodes?: Array2<Node> | Nothing;
      documentation?: DocumentationNode | Nothing;
      modifier?: OperatorNode | Nothing;
      idHiddenNodes?: Array2<Node> | Nothing;
      id: IdNode;
      generics?: GroupNode | Nothing;
      parameters?: GroupNode | Nothing;
    }
  | Nothing {
  const documentation = node?.hiddenNodes?.last<DocumentationNode>((x) => is(x, $.DocumentationNode));

  if (is(node, $.PrefixNode) && MODIFIER_KEYWORDS.includes(node.operator.text)) {
    const underModifier = getUnderModifier(analyzer, node.value);

    if (!underModifier) {
      return nothing;
    }

    return {modifierHiddenNodes: node.hiddenNodes, documentation, modifier: node.operator, ...underModifier};
  }

  const underModifier = getUnderModifier(analyzer, node);

  return underModifier ? {documentation, ...underModifier} : nothing;
}

function getUnderModifier(
  analyzer: SyntaxAnalyzer,
  node: Node | Nothing,
):
  | {
      idHiddenNodes?: Array2<Node> | Nothing;
      id: IdNode;
      generics?: GroupNode | Nothing;
      parameters?: GroupNode | Nothing;
    }
  | Nothing {
  if (!node) {
    return nothing;
  }

  if (is(node, $.IdNode)) {
    return {idHiddenNodes: node.hiddenNodes, id: node};
  }

  if (is(node, $.InvokeNode)) {
    if (
      is(node.instance, $.InvokeNode) &&
      is(node.group, $.ParenGroupNode) &&
      is(node.instance.instance, $.IdNode) &&
      is(node.instance.group, $.BraceGroupNode)
    ) {
      parseDeclarations(analyzer, node.instance.group);
      parseDeclarations(analyzer, node.group);

      return {
        idHiddenNodes: node.hiddenNodes,
        id: node.instance.instance,
        generics: node.instance.group,
        parameters: node.group,
      };
    }

    if (is(node.instance, $.IdNode)) {
      parseDeclarations(analyzer, node.group);

      if (is(node.group, $.BraceGroupNode)) {
        return {idHiddenNodes: node.hiddenNodes, id: node.instance, generics: node.group};
      }

      if (is(node.group, $.ParenGroupNode)) {
        return {idHiddenNodes: node.hiddenNodes, id: node.instance, parameters: node.group};
      }
    }
  }

  return nothing;
}

function parseDeclarations(analyzer: SyntaxAnalyzer, group: GroupNode): void {
  for (const item of group.items) {
    if (is(item.value, $.IdNode)) {
      item.value = partialToDeclaration(analyzer, {id: item.value});
    }
  }
}

export function isTypeDeclarationNode(declarationNode: Node | Nothing): declarationNode is DeclarationNode {
  if (
    is(declarationNode, $.DeclarationNode) &&
    declarationNode.modifier?.text &&
    TYPE_MODIFIER === declarationNode.modifier.text
  ) {
    return true;
  }

  return false;
}
