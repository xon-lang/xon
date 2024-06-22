import {Array2, Integer, Nothing, nothing} from '../../../../../lib/types';
import {ASSIGN, MODIFIER_KEYWORDS, TYPE, TYPE_MODIFIERS} from '../../../lexical/lexical-analyzer-config';
import {IdNode} from '../../../lexical/node/id/id-node';
import {OperatorNode} from '../../../lexical/node/operator/operator-node';
import {SyntaxContext} from '../../../syntax-context';
import {Group, GroupNode, ObjectNode} from '../../group/group-node';
import {$Node, ExpressionNode, Node, is, isNonOperatorExpression, nodeFindMap} from '../../node';
import {SyntaxParseFn} from '../../statement/statement-node-collapse';
import {AssignNode, assignNode} from '../assign/assign-node';
import {InvokeNode} from '../invoke/invoke-node';
import {PrefixNode} from '../prefix/prefix-node';
import {TypeNode, typeNode} from '../type/type-node';
import {DeclarationNode, partialToDeclaration} from './declaration-node';

export function declarationNodeParse(): SyntaxParseFn {
  return (context: SyntaxContext) => {
    if (is<DeclarationNode>(context.nodes[0], $Node.DECLARATION)) {
      return nothing;
    }

    const parts = getDeclarationParts(context);

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
      node: partialToDeclaration(context, parts),
    };
  };
}

function getDeclarationParts(context: SyntaxContext):
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
  const header = getHeader(context, context.nodes[0]);

  if (!header) {
    return nothing;
  }

  const typeOperatorFound = nodeFindMap(context.nodes, 0, true, (node, index, nodes) => {
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
    const typeValue = context.nodes[typeOperatorFound.index + 1] as ExpressionNode;
    const assignOperator = context.nodes[typeOperatorFound.index + 2];
    const assignValue = context.nodes[typeOperatorFound.index + 3];

    const type = typeNode(context, typeOperatorFound.node, typeValue);

    if (
      is<OperatorNode>(assignOperator, $Node.OPERATOR) &&
      assignOperator.text === ASSIGN &&
      isNonOperatorExpression(assignValue)
    ) {
      const assign = assignNode(context, assignOperator, assignValue);

      return {spliceIndex: typeOperatorFound.index - 1, deleteCount: 5, ...header, type, assign};
    }

    return {spliceIndex: typeOperatorFound.index - 1, deleteCount: 3, ...header, type};
  }

  if (!header.modifier && !isTypeDeclarationNode(context.parentStatement?.value)) {
    return nothing;
  }

  const assignOperatorFound = nodeFindMap(context.nodes, 0, true, (node, index, nodes) => {
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
    const assignValue = context.nodes[assignOperatorFound.index + 1] as ExpressionNode;
    const assign = assignNode(context, assignOperatorFound.node, assignValue);

    return {spliceIndex: assignOperatorFound.index - 1, deleteCount: 3, ...header, assign};
  }

  return {spliceIndex: 0, deleteCount: 1, ...header};
}

function getHeader(
  context: SyntaxContext,
  node: Node | Nothing,
):
  | {
      modifierHiddenNodes?: Array2<Node> | Nothing;
      modifier?: OperatorNode | Nothing;
      idHiddenNodes?: Array2<Node> | Nothing;
      id: IdNode;
      generics?: Group | Nothing;
      parameters?: Group | Nothing;
    }
  | Nothing {
  if (is<PrefixNode>(node, $Node.PREFIX) && MODIFIER_KEYWORDS.includes(node.operator.text)) {
    const underModifier = getUnderModifier(context, node.value);

    if (!underModifier) {
      return nothing;
    }

    return {modifierHiddenNodes: node.hiddenNodes, modifier: node.operator, ...underModifier};
  }

  return getUnderModifier(context, node);
}

function getUnderModifier(
  context: SyntaxContext,
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
      parseDeclarations(context, node.instance.group);
      parseDeclarations(context, node.group);

      return {
        idHiddenNodes: node.hiddenNodes,
        id: node.instance.instance,
        generics: node.instance.group,
        parameters: node.group,
      };
    }

    if (is<IdNode>(node.instance, $Node.ID)) {
      parseDeclarations(context, node.group);

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

function parseDeclarations(context: SyntaxContext, group: Group): void {
  for (const item of group.items) {
    if (is<IdNode>(item.value, $Node.ID)) {
      item.value = partialToDeclaration(context, {id: item.value});
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
