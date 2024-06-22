import {Array2, Boolean2, Integer, Nothing, nothing} from '../../../lib/types';
import {TextRange} from '../../util/resource/text/text-range';
import {OperatorNode} from '../lexical/node/operator/operator-node';
import {TokenNode} from '../lexical/node/token-node';
import {Semantic} from '../semantic/semantic';
import {Group} from './group/group-node';

export type Node<T extends $Node = $Node> = {
  $: T;
  range: TextRange;
  parent?: Node | Nothing;
  hiddenNodes?: Array2<TokenNode> | Nothing;
};

export type ExpressionNode = Node & {
  semantic?: Semantic | Nothing;
};

export enum $Node {
  NODE = 'NODE',
  TOKEN = `TOKEN`,
  HIDDEN = `HIDDEN`,
  SYNTAX = 'SYNTAX',
  EXPRESSION = 'EXPRESSION',

  DOCUMENTATION = 'DOCUMENTATION HIDDEN SYNTAX NODE',
  ITEM_DOCUMENTATION = 'ITEM_DOCUMENTATION SYNTAX NODE',
  DESCRIPTION_DOCUMENTATION = 'DESCRIPTION_DOCUMENTATION TOKEN NODE',
  LABEL_DOCUMENTATION = 'DOCUMENTATION_LABEL TOKEN NODE',
  OPEN_DOCUMENTATION = 'DOCUMENTATION_OPEN TOKEN NODE',
  CLOSE_DOCUMENTATION = 'DOCUMENTATION_CLOSE TOKEN NODE',

  COMMENT_LINE = 'COMMENT_LINE HIDDEN TOKEN NODE',
  COMMENT_BLOCK = 'COMMENT_BLOCK HIDDEN TOKEN NODE',
  WHITESPACE = 'WHITESPACE HIDDEN TOKEN NODE',
  JOINING = 'JOINING HIDDEN TOKEN NODE',
  NL = 'NL HIDDEN TOKEN NODE',
  INTEGER = 'INTEGER EXPRESSION TOKEN NODE',
  FLOAT = 'FLOAT EXPRESSION TOKEN NODE',
  CHAR = 'CHAR EXPRESSION TOKEN NODE',
  STRING = 'STRING EXPRESSION TOKEN NODE',
  ID = 'ID EXPRESSION TOKEN NODE',
  OPERATOR = 'OPERATOR EXPRESSION TOKEN NODE',
  OPEN = 'OPEN TOKEN NODE',
  CLOSE = 'CLOSE TOKEN NODE',
  COMMA = 'COMMA TOKEN NODE',
  UNKNOWN = 'UNKNOWN TOKEN NODE',

  ITEM = 'ITEM SYNTAX NODE',
  OBJECT = 'OBJECT EXPRESSION SYNTAX NODE',
  ARRAY = 'ARRAY EXPRESSION SYNTAX NODE',
  GROUP = 'GROUP EXPRESSION SYNTAX NODE',
  DECLARATION = 'DECLARATION SYNTAX NODE',
  LAMBDA = 'LAMBDA EXPRESSION SYNTAX NODE',
  GENERICS = 'GENERICS SYNTAX NODE',
  PARAMETERS = 'PARAMETERS SYNTAX NODE',
  IMPORT = 'IMPORT EXPRESSION SYNTAX NODE',
  ASSIGNMENT = 'ASSIGNMENT SYNTAX NODE',
  MEMBER = 'MEMBER EXPRESSION SYNTAX NODE',
  INVOKE = 'INVOKE EXPRESSION SYNTAX NODE',
  INFIX = 'INFIX EXPRESSION SYNTAX NODE',
  PREFIX = 'PREFIX EXPRESSION SYNTAX NODE',
  POSTFIX = 'POSTFIX EXPRESSION SYNTAX NODE',
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

export function isNonOperatorExpression(node: Node): node is ExpressionNode {
  return is<ExpressionNode>(node, $Node.EXPRESSION) && !is<OperatorNode>(node, $Node.OPERATOR);
}

export function hasSemantic<T extends Node>(node: T | Nothing): node is T & {semantic: Semantic} {
  return is<ExpressionNode>(node, $Node.EXPRESSION) && !!node.semantic;
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
