import {ISSUE_MESSAGE} from '../../../../issue/issue-message';
import {Integer, Nothing, nothing} from '../../../../lib/core';
import {ASSIGN, MODIFIER_KEYWORDS, TYPE, TYPE_MODIFIERS} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {Group, GroupNode} from '../../group/group-node';
import {$Node, Node, findNode, is, isExpressionNode, isGroupNode} from '../../node';
import {SyntaxParseFn} from '../../statement/statement-node-collapse';
import {IdNode} from '../../token/id/id-node';
import {OperatorNode} from '../../token/operator/operator-node';
import {ArrayNode} from '../array/array-node';
import {InvokeNode} from '../invoke/invoke-node';
import {LambdaNode, declarationToLambda} from '../lambda/lambda-node';
import {ObjectNode} from '../object/object-node';
import {PrefixNode, prefixNode} from '../prefix/prefix-node';
import {DeclarationNode, partialToDeclaration} from './declaration-node';

// todo create separate function for lambda parse
export function declarationNodeParse(): SyntaxParseFn {
  return (context: SyntaxContext, index: Integer) => {
    if (is<DeclarationNode>(context.nodes[0], $Node.DECLARATION)) {
      return nothing;
    }

    const node = parseDeclarationStatement(context);

    if (!node) {
      return nothing;
    }

    return {node, spliceIndex: 0};
  };
}

function parseDeclarationStatement(context: SyntaxContext): DeclarationNode | LambdaNode | Nothing {
  const parts = getDeclarationParts(context);

  if (!parts) {
    return nothing;
  }

  if (!parts.id && parts.parameters && (parts.type || parts.assign)) {
    return declarationToLambda(parts);
  }

  const parentDeclaration = context.parentStatement?.item;

  if (
    is<DeclarationNode>(parentDeclaration, $Node.DECLARATION) &&
    parentDeclaration.modifier?.text &&
    TYPE_MODIFIERS.includes(parentDeclaration.modifier.text)
  ) {
    const declaration = partialToDeclaration(context, parts);

    if (!declaration) {
      return nothing;
    }

    if (parentDeclaration.assign && !is<LambdaNode>(parentDeclaration.assign.value, $Node.LAMBDA)) {
      context.issueManager.addError(declaration.range, ISSUE_MESSAGE.unexpectedExpression());
    }

    return declaration;
  }

  if (parts.modifier || parts.type || parts.assign) {
    return partialToDeclaration(context, parts);
  }

  return nothing;
}

function getDeclarationParts(context: SyntaxContext): Partial<DeclarationNode> | Nothing {
  const headerTypeAssign = getHeaderTypeAssign(context);

  if (!headerTypeAssign) {
    return nothing;
  }

  const {header, type, assign} = headerTypeAssign;

  if (is<PrefixNode>(header, $Node.PREFIX) && MODIFIER_KEYWORDS.includes(header.operator.text)) {
    const underModifier = getUnderModifier(context, header.value);

    if (!underModifier) {
      return nothing;
    }

    return {modifier: header.operator, ...underModifier, type, assign};
  }

  const underModifier = getUnderModifier(context, header);

  if (!underModifier) {
    return {type, assign};
  }

  return {...underModifier, type, assign};
}

function getHeaderTypeAssign(context: SyntaxContext):
  | {
      header: Node | Nothing;
      type?: PrefixNode | Nothing;
      assign?: PrefixNode | Nothing;
    }
  | Nothing {
  const firstNode = context.nodes[0];

  if (!isExpressionNode(firstNode)) {
    return nothing;
  }

  const typeOperator = findNode(
    context.nodes,
    0,
    true,
    (x): x is OperatorNode => is<OperatorNode>(x, $Node.OPERATOR) && x.text === TYPE,
  );

  const assignOperator = findNode(
    context.nodes,
    0,
    true,
    (x): x is OperatorNode => is<OperatorNode>(x, $Node.OPERATOR) && x.text === ASSIGN,
  );

  // when no type but assign
  if (assignOperator && (!typeOperator || typeOperator.index > assignOperator.index)) {
    const left = context.nodes[assignOperator.index - 1];
    const right = context.nodes[assignOperator.index + 1];

    if (left !== firstNode || !isExpressionNode(left) || !isExpressionNode(right)) {
      return {header: firstNode};
    }

    const assign = prefixNode(context, assignOperator.node, right);

    return {header: firstNode, assign};
  }

  if (typeOperator) {
    const left = context.nodes[typeOperator.index - 1];
    const right = context.nodes[typeOperator.index + 1];

    if (left !== firstNode || !isExpressionNode(left) || !isExpressionNode(right)) {
      return {header: firstNode};
    }

    const type = prefixNode(context, typeOperator.node, right);

    // todo use node index (add property for nodes in statement children) ???
    if (assignOperator?.index === 3) {
      const assignValue = context.nodes[assignOperator.index + 1];

      if (!isExpressionNode(assignValue)) {
        return {header: firstNode, type};
      }

      const assign = prefixNode(context, assignOperator.node, assignValue);

      return {header: firstNode, type, assign};
    }

    return {header: firstNode, type};
  }

  return {header: firstNode};
}

function getUnderModifier(
  context: SyntaxContext,
  node: Node | Nothing,
):
  | {
      id?: IdNode;
      generics?: Group | Nothing;
      parameters?: Group | Nothing;
    }
  | Nothing {
  if (!node) {
    return nothing;
  }

  if (is<IdNode>(node, $Node.ID)) {
    return {id: node};
  }

  // for lambda
  if (isGroupNode(node)) {
    return parseGenericsOrParameters(context, node);
  }

  if (is<InvokeNode>(node, $Node.INVOKE)) {
    const instance = getUnderModifier(context, node.instance);

    if (!instance) {
      return nothing;
    }

    const group = parseGenericsOrParameters(context, node.group);

    if (!group) {
      return nothing;
    }

    if (group.parameters && instance.parameters) {
      context.issueManager.addError(group.parameters.range, ISSUE_MESSAGE.unexpectedExpression());
    }

    if (group.generics && instance.generics) {
      context.issueManager.addError(group.generics.range, ISSUE_MESSAGE.unexpectedExpression());
    }

    return {...group, ...instance};
  }

  return nothing;
}

function parseGenericsOrParameters(
  context: SyntaxContext,
  group: Group,
): {generics?: Group | Nothing; parameters?: Group | Nothing} | Nothing {
  for (const item of group.items) {
    if (is<IdNode>(item.value, $Node.ID)) {
      item.value = partialToDeclaration(context, {id: item.value});
    }
  }

  if (is<ObjectNode>(group, $Node.OBJECT)) {
    return {generics: group};

    // const items = group.items.map((x) => itemToDeclarations(context, x));
    // const generics = objectNode(group.open, items, group.close);

    // return {generics};
  }

  if (is<GroupNode>(group, $Node.GROUP) || is<ArrayNode>(group, $Node.ARRAY)) {
    return {parameters: group};

    // const items = group.items.map((x) => itemToDeclarations(context, x));
    // const parameters = parametersNode(group.open, items, group.close);

    // return {parameters};
  }

  return nothing;
}

// function itemToDeclarations(context: SyntaxContext, item: ItemNode): Node | Nothing {
//   if (!item) {
//     return nothing;
//   }

//   if (is<DeclarationNode>(item.value, $Node.DECLARATION)) {
//     return item.value;
//   }

//   const parts = getDeclarationParts(context, item.value);

//   if (!parts) {
//     return item.value;
//   }

//   return partialToDeclaration(parts);
// }
