import {Array2, Integer, Nothing, nothing} from '../../../../../lib/types';
import {ASSIGN, MODIFIER_KEYWORDS, TYPE, TYPE_MODIFIERS} from '../../../lexical/lexical-analyzer-config';
import {IdNode} from '../../../lexical/node/id/id-node';
import {OperatorNode} from '../../../lexical/node/operator/operator-node';
import {$Node, ExpressionNode, Node, is, isNonOperatorExpression, nodeFindMap} from '../../../node';
import {DocumentationNode} from '../../documentation/documentation-node';
import {Group, GroupNode, ObjectNode} from '../../group/group-node';
import {StatementNode} from '../../statement/statement-node';
import {SyntaxParseFn} from '../../statement/statement-node-collapse';
import {SyntaxAnalyzer} from '../../syntax-analyzer';
import {AssignNode, assignNode} from '../assign/assign-node';
import {InvokeNode} from '../invoke/invoke-node';
import {PrefixNode} from '../prefix/prefix-node';
import {TypeNode, typeNode} from '../type/type-node';
import {DeclarationNode, partialToDeclaration} from './declaration-node';

export function declarationNodeParse(): SyntaxParseFn {
  return (
    analyzer: SyntaxAnalyzer,
    nodes: Array2<Node>,
    _startIndex: Integer,
    parentStatement: StatementNode | Nothing,
  ) => {
    if (is<DeclarationNode>(nodes[0], $Node.DECLARATION)) {
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
      generics?: Group | Nothing;
      parameters?: Group | Nothing;
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
      is<OperatorNode>(node, $Node.OPERATOR) &&
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
      is<OperatorNode>(assignOperator, $Node.OPERATOR) &&
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
      is<OperatorNode>(node, $Node.OPERATOR) &&
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
      generics?: Group | Nothing;
      parameters?: Group | Nothing;
    }
  | Nothing {
  const documentation = node?.hiddenNodes?.last<DocumentationNode>((x) =>
    is<DocumentationNode>(x, $Node.DOCUMENTATION),
  );

  if (is<PrefixNode>(node, $Node.PREFIX) && MODIFIER_KEYWORDS.includes(node.operator.text)) {
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
      generics?: Group | Nothing;
      parameters?: Group | Nothing;
    }
  | Nothing {
  if (!node) {
    return nothing;
  }

  if (is<IdNode>(node, $Node.ID)) {
    return {idHiddenNodes: node.hiddenNodes, id: node};
  }

  if (is<InvokeNode>(node, $Node.INVOKE)) {
    if (
      is<InvokeNode>(node.instance, $Node.INVOKE) &&
      is<GroupNode>(node.group, $Node.GROUP) &&
      is<IdNode>(node.instance.instance, $Node.ID) &&
      is<ObjectNode>(node.instance.group, $Node.OBJECT)
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

    if (is<IdNode>(node.instance, $Node.ID)) {
      parseDeclarations(analyzer, node.group);

      if (is<ObjectNode>(node.group, $Node.OBJECT)) {
        return {idHiddenNodes: node.hiddenNodes, id: node.instance, generics: node.group};
      }

      if (is<GroupNode>(node.group, $Node.GROUP)) {
        return {idHiddenNodes: node.hiddenNodes, id: node.instance, parameters: node.group};
      }
    }
  }

  return nothing;
}

function parseDeclarations(analyzer: SyntaxAnalyzer, group: Group): void {
  for (const item of group.items) {
    if (is<IdNode>(item.value, $Node.ID)) {
      item.value = partialToDeclaration(analyzer, {id: item.value});
    }
  }
}

export function isTypeDeclarationNode(declarationNode: Node | Nothing): declarationNode is DeclarationNode {
  if (
    is<DeclarationNode>(declarationNode, $Node.DECLARATION) &&
    declarationNode.modifier?.text &&
    TYPE_MODIFIERS.includes(declarationNode.modifier.text)
  ) {
    return true;
  }

  return false;
}
