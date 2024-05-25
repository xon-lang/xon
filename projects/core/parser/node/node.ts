import {Array2, Boolean2, Integer, Nothing, nothing} from '../../../lib/types';
import {Semantic} from '../../semantic/semantic';
import {TextRange} from '../../util/resource/text/text-range';
import {Group} from './group/group-node';
import {OperatorNode} from './token/operator/operator-node';
import {TokenNode} from './token/token-node';

export type Node<T extends $Node = $Node> = {
  $: T;
  range: TextRange;
  parent?: Node | Nothing;
  hiddenNodes?: Array2<TokenNode> | Nothing;
};

export enum $Node {
  NODE = 'NODE',
  TOKEN = `TOKEN`,
  SYNTAX = 'SYNTAX',
  EXPRESSION = 'EXPRESSION',
  SEMANTIC = 'SEMANTIC',

  COMMENT_LINE = 'COMMENT_LINE TOKEN NODE',
  COMMENT_BLOCK = 'COMMENT_BLOCK TOKEN NODE',
  WHITESPACE = 'WHITESPACE TOKEN NODE',
  JOINING = 'JOINING TOKEN NODE',
  NL = 'NL TOKEN NODE',
  INTEGER = 'EXPRESSION SEMANTIC INTEGER TOKEN NODE',
  FLOAT = 'EXPRESSION SEMANTIC FLOAT TOKEN NODE',
  CHAR = 'EXPRESSION SEMANTIC CHAR TOKEN NODE',
  STRING = 'EXPRESSION SEMANTIC STRING TOKEN NODE',
  ID = 'EXPRESSION SEMANTIC ID TOKEN NODE',
  OPERATOR = 'EXPRESSION SEMANTIC OPERATOR TOKEN NODE',
  OPEN = 'OPEN TOKEN NODE',
  CLOSE = 'CLOSE TOKEN NODE',
  COMMA = 'COMMA TOKEN NODE',
  UNKNOWN = 'UNKNOWN TOKEN NODE',

  ITEM = 'ITEM SYNTAX NODE',
  OBJECT = 'EXPRESSION SEMANTIC OBJECT SYNTAX NODE',
  ARRAY = 'EXPRESSION SEMANTIC ARRAY SYNTAX NODE',
  GROUP = 'EXPRESSION SEMANTIC GROUP SYNTAX NODE',
  DECLARATION = 'SEMANTIC DECLARATION SYNTAX NODE',
  LAMBDA = 'EXPRESSION SEMANTIC LAMBDA SYNTAX NODE',
  GENERICS = 'GENERICS SYNTAX NODE',
  PARAMETERS = 'PARAMETERS SYNTAX NODE',
  IMPORT = 'EXPRESSION SEMANTIC IMPORT SYNTAX NODE',
  ASSIGNMENT = 'ASSIGNMENT SYNTAX NODE',
  MEMBER = 'EXPRESSION SEMANTIC MEMBER SYNTAX NODE',
  INVOKE = 'EXPRESSION SEMANTIC INVOKE SYNTAX NODE',
  INFIX = 'EXPRESSION SEMANTIC INFIX SYNTAX NODE',
  PREFIX = 'EXPRESSION SEMANTIC PREFIX SYNTAX NODE',
  POSTFIX = 'EXPRESSION SEMANTIC POSTFIX SYNTAX NODE',
  ASSIGN = 'ASSIGN SYNTAX NODE',
  TYPE = 'TYPE SYNTAX NODE',
  STATEMENT = 'STATEMENT SYNTAX NODE',
}

export function is<T extends Node = Node>(node: {$?: $Node} | Nothing, type: $Node): node is T {
  if (!node?.$) {
    return false;
  }

  return node.$ === type || node.$.split(' ').includes(type);
}

export type SemanticNode = Node & {
  semantic?: Semantic | Nothing;
};

export type ExpressionNode = SemanticNode;

export function isNonOperatorExpression(node: Node): node is ExpressionNode {
  return is<ExpressionNode>(node, $Node.EXPRESSION) && !is<OperatorNode>(node, $Node.OPERATOR);
}

const groups = [$Node.GROUP, $Node.ARRAY, $Node.OBJECT];

export function isGroupNode(node: Node | Nothing): node is Group {
  if (!node) {
    return false;
  }

  return groups.some((x) => node.$ === x);
}

export function nodeFindMap<T>(
  nodes: Node[],
  startIndex: Integer,
  isLeftRecursive: Boolean2,
  predicateMap: (node: Node, index: Integer, nodes: Node[]) => T,
): T | Nothing {
  if (isLeftRecursive) {
    for (let i = startIndex; i < nodes.length; i++) {
      const result = predicateMap(nodes[i], i, nodes);

      if (result) {
        return result;
      }
    }

    return nothing;
  }

  for (let i = nodes.length - 1; i >= startIndex; i--) {
    const result = predicateMap(nodes[i], i, nodes);

    if (result) {
      return result;
    }
  }

  return nothing;
}
