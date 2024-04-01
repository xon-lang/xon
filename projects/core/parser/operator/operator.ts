import {Integer, Nothing, String2, nothing} from '../../lib/core';
import {$Node, Node, is} from '../node/node';
import {OperatorNode} from '../node/token/operator/operator-node';
import {SyntaxContext} from '../syntax-context';

export enum RecursiveType {
  LEFT = 0,
  RIGHT = 1,
}

export enum $Operator {
  GROUP = 'GROUP',
  IMPORT = 'IMPORT',
  MEMBER = 'MEMBER',
  RANGE = 'RANGE',
  INVOKE = 'INVOKE',
  // ASSIGN = 'ASSIGN',
  INFIX = 'INFIX',
  PREFIX = 'PREFIX',
  POSTFIX = 'POSTFIX',
}

export interface Operator {
  $: $Operator;
  recursiveType: RecursiveType;
  operators: String2[];

  collapse(context: SyntaxContext, startIndex: Integer): Nothing;

  findNode<T extends Node>(
    context: SyntaxContext,
    startIndex: Integer,
    nodeType: $Node,
  ): {index: Integer; node: T} | Nothing;

  findOperatorNode(
    context: SyntaxContext,
    startIndex: Integer,
    operators: String2[],
  ): {index: Integer; operator: OperatorNode} | Nothing;
}

export function operatorParams<T extends $Operator>(
  $: T,
  recursiveType: RecursiveType,
  operators: String2[],
): Omit<Operator, 'collapse'> & {$: T} {
  return {
    $,
    recursiveType,
    operators,

    findNode<T extends Node>(
      context: SyntaxContext,
      startIndex: Integer,
      nodeType: $Node,
    ): {index: Integer; node: T} | Nothing {
      for (let i = startIndex; i < context.nodes.length; i++) {
        const lastIndex = context.nodes.length - 1;
        const index = this.recursiveType === RecursiveType.LEFT ? i : lastIndex - i;

        const node = context.nodes[index];

        if (is<T>(node, nodeType)) {
          return {
            index,
            node,
          };
        }
      }

      return nothing;
    },

    findOperatorNode(
      context: SyntaxContext,
      startIndex: Integer,
      operators: String2[],
    ): {index: Integer; operator: OperatorNode} | Nothing {
      for (let i = startIndex; i < context.nodes.length; i++) {
        const lastIndex = context.nodes.length - 1;
        const index = this.recursiveType === RecursiveType.LEFT ? i : lastIndex - i;

        const operator = context.nodes[index];

        if (is<OperatorNode>(operator, $Node.OPERATOR) && operators.includes(operator.text)) {
          return {
            index,
            operator,
          };
        }
      }

      return nothing;
    },
  };
}
