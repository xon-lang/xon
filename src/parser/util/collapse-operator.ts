import { String2, nothing } from '../../lib/core';
import { Node } from '../../parser/node/node';
import { OperatorNode } from '../../parser/node/operator/operator-node';
import { postfixNode } from '../../parser/node/postfix/postfix-node';
import { PrefixNode, prefixNode } from '../../parser/node/prefix/prefix-node';
import { ParserContext } from '../../parser/parser-context';
import { $DeclarationMeta, DeclarationMeta, valueMeta } from '../meta/meta';
import { IdNode } from '../node/id/id-node';
import { InfixNode, infixNode } from '../node/infix/infix-node';
import { InvokeNode } from '../node/invoke/invoke-node';
import { $Node } from '../node/node';
import { MODEL_MODIFIER, OperatorType, RecursiveType, TYPE_TOKEN } from '../parser-config';
import { is } from './is';

export function collapseOperator(
  context: ParserContext,
  operators: String2[],
  operatorType: OperatorType,
  recursiveType: RecursiveType,
): void {
  for (let i = 0; i < context.nodes.length; i++) {
    const index = recursiveType === RecursiveType.LEFT ? i : context.nodes.length - i - 1;
    const operator = context.nodes[index];

    if (!is<OperatorNode>(operator, $Node.OPERATOR) || !operators.includes(operator.text)) {
      continue;
    }

    const left = context.nodes[index - 1];
    const right: Node | null = context.nodes[index + 1] ?? null;

    if (
      operatorType === OperatorType.PREFIX &&
      !is<OperatorNode>(right, $Node.OPERATOR) &&
      (index === 0 || is<OperatorNode>(left, $Node.OPERATOR))
    ) {
      const prefix = prefixNode(context, operator, right);
      context.nodes.splice(index, 2, prefix);
      handlePrefixNode(context, prefix);
      collapseOperator(context, operators, operatorType, recursiveType);

      return;
    }

    if (
      operatorType === OperatorType.POSTFIX &&
      !is<OperatorNode>(left, $Node.OPERATOR) &&
      (index === context.nodes.length - 1 || is<OperatorNode>(right, $Node.OPERATOR))
    ) {
      const postfix = postfixNode(context, operator, left);
      context.nodes.splice(index - 1, 2, postfix);

      collapseOperator(context, operators, operatorType, recursiveType);

      return;
    }

    if (
      operatorType === OperatorType.INFIX &&
      !is<OperatorNode>(left, $Node.OPERATOR) &&
      !is<OperatorNode>(right, $Node.OPERATOR)
    ) {
      const infix = infixNode(context, operator, left, right);
      // eslint-disable-next-line no-magic-numbers
      context.nodes.splice(index - 1, 3, infix);
      handleInfixNode(context, infix);
      collapseOperator(context, operators, operatorType, recursiveType);

      return;
    }
  }
}

function handlePrefixNode(context: ParserContext, node: PrefixNode): void {
  if (node.operator.text === MODEL_MODIFIER) {
    if (is<IdNode>(node.value, $Node.ID)) {
      addModelDeclaration(context, node.value);

      return;
    }

    if (is<InvokeNode>(node.value, $Node.INVOKE) && is<IdNode>(node.value.instance, $Node.ID)) {
      addModelDeclaration(context, node.value.instance);
    }
  }
}

function handleInfixNode(context: ParserContext, node: InfixNode): void {
  if (node.operator.text === TYPE_TOKEN) {
    if (
      is<PrefixNode>(node.left, $Node.PREFIX) &&
      node.left.operator.text === MODEL_MODIFIER &&
      is<IdNode>(node.left.value, $Node.ID)
    ) {
      const name = node.left.value.text;
      const type = context.declarations.findLast((x) => x.name === name);

      if (!type) {
        throw new Error('Not implemented');
      }

      // : Something
      if (is<IdNode>(node.right, $Node.ID)) {
        const baseName = node.right.text;
        const baseDeclaration = context.declarations.findLast((x) => x.name === baseName);

        if (!baseDeclaration) {
          throw new Error('Not implemented');
        }

        const baseType = valueMeta(baseDeclaration, []);

        if (!baseType) {
          throw new Error('Not implemented');
        }

        type.restriction = baseType;

        return;
      }

      // : Array{T}
      if (is<InvokeNode>(node.right, $Node.INVOKE) && is<IdNode>(node.right.instance, $Node.ID)) {
        const baseName = node.right.instance.text;
        const baseDeclaration = context.declarations.findLast((x) => x.name === baseName);

        if (!baseDeclaration) {
          throw new Error('Not implemented');
        }

        const baseType = valueMeta(baseDeclaration, []);

        baseType.arguments = node.right.group.items
          .filter<IdNode>((x): x is IdNode => is<IdNode>(x, $Node.ID))
          .map((x) => context.declarations.findLast((t) => t.name === x.text)!)
          .map((x) => valueMeta(x, []));

        if (baseType.arguments.some((x) => x === null)) {
          throw new Error('Not implemented');
        }

        type.restriction = baseType;
        type.attributes = mergeAttributes(baseType.declaration, type);

        return;
      }
    }

    // length: Integer
    if (
      is<IdNode>(node.left, $Node.ID) &&
      is<IdNode>(node.right, $Node.ID) &&
      context.parentStatement.modelDeclarationMeta
    ) {
      const name = node.left.text;
      const typeName = node.right.text;
      const type = context.declarations.findLast((x) => x.name === typeName);

      if (!type) {
        throw new Error('Not implemented');
      }

      context.parentStatement.modelDeclarationMeta.attributes[name] = [type];
    }
  }
}

function addModelDeclaration(context: ParserContext, idNode: IdNode): void {
  const declaration: DeclarationMeta = {
    $: $DeclarationMeta.MODEL,
    name: idNode.text,
    source: context.source,
    position: idNode.range.start,
    usages: [],
    restriction: nothing,
    parameters: [],
    attributes: {},
  };

  context.modelDeclarationType = declaration;
  context.declarations.push(declaration);
}

function mergeAttributes(base: DeclarationMeta, type: DeclarationMeta): Record<String2, DeclarationMeta[]> {
  return { ...base.attributes, ...type.attributes };
}
