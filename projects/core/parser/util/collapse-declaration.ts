import {Nothing, nothing} from '../../lib/core';
import {$Node, Node, is} from '../node/node';
import {AssignNode} from '../node/syntax/assign/assign-node';
import {DeclarationNode, declarationNode} from '../node/syntax/declaration/declaration-node';
import {GenericsNode, genericsNode} from '../node/syntax/generics/generics-node';
import {Group, GroupNode, isGroupNode} from '../node/syntax/group/group-node';
import {InvokeNode} from '../node/syntax/invoke/invoke-node';
import {ItemNode} from '../node/syntax/item/item-node';
import {ObjectNode} from '../node/syntax/object/object-node';
import {ParametersNode, parametersNode} from '../node/syntax/parameters/parameters-node';
import {PrefixNode} from '../node/syntax/prefix/prefix-node';
import {TypeNode} from '../node/syntax/type/type-node';
import {IdNode} from '../node/token/id/id-node';
import {OperatorNode} from '../node/token/operator/operator-node';
import {MODIFIER_KEYWORDS, TYPE_MODIFIERS} from '../parser-config';
import {SyntaxContext} from '../syntax-context';

export function parseDeclarationStatement(context: SyntaxContext, node: Node): DeclarationNode | Nothing {
  const parts = getDeclarationParts(context, node);

  if (!parts) {
    return nothing;
  }

  const parentDeclaration = context.parentStatement?.item;

  if (
    is<DeclarationNode>(parentDeclaration, $Node.DECLARATION) &&
    parentDeclaration.modifier?.text &&
    TYPE_MODIFIERS.includes(parentDeclaration.modifier.text)
  ) {
    const declaration = partsToDeclaration(parts);
    parentDeclaration.attributes.push(declaration);

    return declaration;
  }

  if (parts.modifier || parts.typeOperator || (parts.parameters && parts.assignOperator)) {
    return partsToDeclaration(parts);
  }

  return nothing;
}

function getDeclarationParts(context: SyntaxContext, node: Node | Nothing): Partial<DeclarationNode> | Nothing {
  if (!node) {
    return nothing;
  }

  const {header, typeOperator, type, assignOperator, assign} = getHeaderTypeAssign(context, node);

  if (is<PrefixNode>(header, $Node.PREFIX) && MODIFIER_KEYWORDS.includes(header.operator.text)) {
    const underModifier = getUnderModifier(context, header.value);

    if (!underModifier) {
      return nothing;
    }

    return {modifier: header.operator, ...underModifier, typeOperator, type, assignOperator, assign};
  }

  const underModifier = getUnderModifier(context, header);

  if (!underModifier) {
    return nothing;
  }

  return {...underModifier, typeOperator, type, assignOperator, assign};
}

function getHeaderTypeAssign(
  context: SyntaxContext,
  node: Node | Nothing,
): {
  header: Node | Nothing;
  typeOperator?: OperatorNode | Nothing;
  type?: Node | Nothing;
  assignOperator?: OperatorNode | Nothing;
  assign?: Node | Nothing;
} {
  if (is<TypeNode>(node, $Node.TYPE)) {
    return {header: node.left, typeOperator: node.operator, type: node.right};
  }

  if (is<AssignNode>(node, $Node.ASSIGN)) {
    const headerType = getHeaderTypeAssign(context, node.left);

    return {...headerType, assignOperator: node.operator, assign: node.right};
  }

  return {header: node};
}

function getUnderModifier(
  context: SyntaxContext,
  node: Node | Nothing,
):
  | {
      id?: IdNode;
      generics?: GenericsNode | Nothing;
      parameters?: ParametersNode | Nothing;
    }
  | Nothing {
  if (!node) {
    return nothing;
  }

  if (is<IdNode>(node, $Node.ID)) {
    return {id: node};
  }

  if (is<InvokeNode>(node, $Node.INVOKE)) {
    const instance = getUnderModifier(context, node.instance);

    if (!instance) {
      return nothing;
    }

    const group = parseGroup(context, node.group);
    return {...instance, ...group};
  }

  if (isGroupNode(node)) {
    return parseGroup(context, node);
  }

  return nothing;
}

function parseGroup(
  context: SyntaxContext,
  group: Group,
): {generics?: GenericsNode | Nothing; parameters?: ParametersNode | Nothing} {
  if (is<ObjectNode>(group, $Node.OBJECT)) {
    const items = group.items.map((x) => itemToDeclarations(context, x));
    const generics = genericsNode(group.open, items, group.close);

    return {generics};
  }

  if (is<GroupNode>(group, $Node.GROUP)) {
    const items = group.items.map((x) => itemToDeclarations(context, x));
    const parameters = parametersNode(group.open, items, group.close);

    return {parameters};
  }

  return {};
}

function itemToDeclarations(context: SyntaxContext, item: ItemNode): DeclarationNode | Nothing {
  if (!item) {
    return nothing;
  }

  if (is<DeclarationNode>(item.value, $Node.DECLARATION)) {
    return item.value;
  }

  const parts = getDeclarationParts(context, item.value);

  if (!parts) {
    return nothing;
  }

  return partsToDeclaration(parts);
}

function partsToDeclaration(params: Partial<DeclarationNode>) {
  return declarationNode({
    modifier: params.modifier,
    id: params.id,
    generics: params.generics,
    parameters: params.parameters,
    typeOperator: params.typeOperator,
    type: params.type,
    assignOperator: params.assignOperator,
    assign: params.assign,
  });
}
