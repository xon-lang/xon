import { Boolean2, String2, nothing } from '../../lib/core';
import { Node } from '../../parser/node/node';
import { OperatorNode } from '../../parser/node/operator/operator-node';
import { postfixNode } from '../../parser/node/postfix/postfix-node';
import { PrefixNode, prefixNode } from '../../parser/node/prefix/prefix-node';
import { ParserContext } from '../../parser/parser-context';
import { IdNode } from '../node/id/id-node';
import { InfixNode, infixNode } from '../node/infix/infix-node';
import { NodeType } from '../node/node-type';
import { MODEL_MODIFIER, OperatorType, RecursiveType, TYPE_TOKEN } from '../parser-config';
import { Type } from '../type/type';
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

    if (!is<OperatorNode>(operator, NodeType.OPERATOR) || !operators.includes(operator.text)) {
      continue;
    }

    const left = context.nodes[index - 1];
    const right: Node | null = context.nodes[index + 1] ?? null;

    if (
      operatorType === OperatorType.PREFIX &&
      !is<OperatorNode>(right, NodeType.OPERATOR) &&
      (index === 0 || is<OperatorNode>(left, NodeType.OPERATOR))
    ) {
      const prefix = prefixNode(context, operator, right);
      context.nodes.splice(index, 2, prefix);
      handlePrefixNode(context, prefix);
      collapseOperator(context, operators, operatorType, recursiveType);

      return;
    }

    if (
      operatorType === OperatorType.POSTFIX &&
      !is<OperatorNode>(left, NodeType.OPERATOR) &&
      (index === context.nodes.length - 1 || is<OperatorNode>(right, NodeType.OPERATOR))
    ) {
      const postfix = postfixNode(context, operator, left);
      context.nodes.splice(index - 1, 2, postfix);

      collapseOperator(context, operators, operatorType, recursiveType);

      return;
    }

    if (
      operatorType === OperatorType.INFIX &&
      !is<OperatorNode>(left, NodeType.OPERATOR) &&
      !is<OperatorNode>(right, NodeType.OPERATOR)
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
    if (is<IdNode>(node.value, NodeType.ID)) {
      const type: Type = {
        name: node.value.text,
        base: nothing,
        data: nothing,
        parameters: [],
        attributes: {},

        is(type: Type): Boolean2 {
          return (this.name === type.name || this.base?.is(type)) ?? false;
        },

        eq(type: Type): Boolean2 {
          return this.name === type.name;
        },
      };

      context.types.push(type);
    }
  }
}

function handleInfixNode(context: ParserContext, node: InfixNode): void {
  if (
    node.operator.text === TYPE_TOKEN &&
    is<PrefixNode>(node.left, NodeType.PREFIX) &&
    node.left.operator.text === MODEL_MODIFIER
  ) {
    if (is<IdNode>(node.left.value, NodeType.ID) && is<IdNode>(node.right, NodeType.ID)) {
      const name = node.left.value.text;
      const type = context.types.findLast((x) => x.name === name);

      if (!type) {
        throw new Error('Not implemented');
      }

      const baseName = node.right.text;
      const baseType = context.types.findLast((x) => x.name === baseName);

      if (!baseType) {
        throw new Error('Not implemented');
      }

      type.base = baseType;
    }
  }
}
