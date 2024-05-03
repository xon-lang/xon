import {Array2, Boolean2, Integer, Nothing, nothing} from '../../lib/core';
import {Semantic} from '../../semantic/semantic';
import {TextResourceRange} from '../../util/resource/text/text-resource-range';
import {Group} from './syntax/group/group-node';
import {StatementNode} from './syntax/statement/statement-node';
import {TokenNode} from './token/token-node';

export interface Node {
  $: $Node;
  range: TextResourceRange;
  parent?: Node | Nothing;
  hiddenNodes?: Array2<TokenNode>;
  body?: Array2<StatementNode>;
  semantic?: Semantic | Nothing;
}

export enum $Node {
  NODE = 'NODE',
  TOKEN = 'TOKEN NODE',
  COMMENT_LINE = 'COMMENT_LINE TOKEN NODE',
  COMMENT_BLOCK = 'COMMENT_BLOCK TOKEN NODE',
  WHITESPACE = 'WHITESPACE TOKEN NODE',
  JOINING = 'JOINING TOKEN NODE',
  NL = 'NL TOKEN NODE',
  INTEGER = 'INTEGER TOKEN NODE',
  FLOAT = 'FLOAT TOKEN NODE',
  CHAR = 'CHAR TOKEN NODE',
  STRING = 'STRING TOKEN NODE',
  ID = 'ID TOKEN NODE',
  OPERATOR = 'OPERATOR TOKEN NODE',
  OPEN = 'OPEN TOKEN NODE',
  CLOSE = 'CLOSE TOKEN NODE',
  UNKNOWN = 'UNKNOWN TOKEN NODE',
  EOF = 'EOF TOKEN NODE',

  SYNTAX = 'SYNTAX NODE',
  ITEM = 'ITEM SYNTAX NODE',
  OBJECT = 'OBJECT SYNTAX NODE',
  ARRAY = 'ARRAY SYNTAX NODE',
  GROUP = 'GROUP SYNTAX NODE',
  DECLARATION = 'DECLARATION SYNTAX NODE',
  FUNCTION = 'FUNCTION SYNTAX NODE',
  GENERICS = 'GENERICS SYNTAX NODE',
  PARAMETERS = 'PARAMETERS SYNTAX NODE',
  IMPORT = 'IMPORT SYNTAX NODE',
  MEMBER = 'MEMBER SYNTAX NODE',
  INVOKE = 'INVOKE SYNTAX NODE',
  INFIX = 'INFIX SYNTAX NODE',
  PREFIX = 'PREFIX SYNTAX NODE',
  POSTFIX = 'POSTFIX SYNTAX NODE',
  TYPE = 'TYPE SYNTAX NODE',
  ASSIGN = 'ASSIGN SYNTAX NODE',
  STATEMENT = 'STATEMENT SYNTAX NODE',
}

export function is<T extends Node = Node>(node: {$?: $Node} | Nothing, type: $Node): node is T {
  if (!node?.$) {
    return false;
  }

  return node.$ === type || node.$.split(' ').includes(type);
}

const expressions = [
  $Node.CHAR,
  $Node.ID,
  $Node.INTEGER,
  $Node.STRING,
  $Node.ARRAY,
  $Node.GROUP,
  $Node.OBJECT,
  $Node.INFIX,
  $Node.PREFIX,
  $Node.POSTFIX,
  $Node.INVOKE,
  $Node.MEMBER,
];

export function isExpressionNode(node: Node | Nothing): node is Node {
  if (!node) {
    return false;
  }

  return expressions.some((x) => node.$ === x);
}

const groups = [$Node.GROUP, $Node.ARRAY, $Node.OBJECT];

export function isGroupNode(node: Node | Nothing): node is Group {
  if (!node) {
    return false;
  }

  return groups.some((x) => node.$ === x);
}

// todo refactor findNode function
export function findNode<T extends Node>(
  nodes: Node[],
  startIndex: Integer,
  isLeftRecursive: Boolean2,
  predicate: (node: Node, index, nodes: Node[]) => node is T,
): {index: Integer; node: T} | Nothing {
  for (let i = startIndex; i < nodes.length; i++) {
    const lastIndex = nodes.length - 1;
    const index = isLeftRecursive ? i : lastIndex - i;

    const node = nodes[index];

    if (predicate(node, index, nodes)) {
      return {
        index,
        node,
      };
    }
  }

  return nothing;
}
