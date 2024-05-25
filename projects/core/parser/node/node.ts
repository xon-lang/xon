import {Array2, Boolean2, Integer, Nothing, nothing} from '../../../lib/types';
import {Semantic} from '../../semantic/semantic';
import {TextRange} from '../../util/resource/text/text-range';
import {ArrayNode, Group, GroupNode, ObjectNode} from './group/group-node';
import {InfixNode} from './syntax/infix/infix-node';
import {InvokeNode} from './syntax/invoke/invoke-node';
import {MemberNode} from './syntax/member/member-node';
import {PostfixNode} from './syntax/postfix/postfix-node';
import {PrefixNode} from './syntax/prefix/prefix-node';
import {SyntaxNode} from './syntax/syntax-node';
import {CharNode} from './token/char/char-node';
import {IdNode} from './token/id/id-node';
import {IntegerNode} from './token/integer/integer-node';
import {StringNode} from './token/string/string-node';
import {TokenNode} from './token/token-node';

export type Node<T extends $Node = $Node> = {
  $: T;
  range: TextRange;
  parent?: Node | Nothing;
  hiddenNodes?: Array2<TokenNode> | Nothing;
};

export enum $Node {
  NODE = 'NODE',
  TOKEN = `TOKEN NODE`,
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
  COMMA = 'COMMA TOKEN NODE',
  UNKNOWN = 'UNKNOWN TOKEN NODE',

  SYNTAX = 'SYNTAX NODE',
  ITEM = 'ITEM SYNTAX NODE',
  OBJECT = 'OBJECT SYNTAX NODE',
  ARRAY = 'ARRAY SYNTAX NODE',
  GROUP = 'GROUP SYNTAX NODE',
  DECLARATION = 'DECLARATION SYNTAX NODE',
  LAMBDA = 'LAMBDA SYNTAX NODE',
  GENERICS = 'GENERICS SYNTAX NODE',
  PARAMETERS = 'PARAMETERS SYNTAX NODE',
  IMPORT = 'IMPORT SYNTAX NODE',
  ASSIGNMENT = 'ASSIGNMENT SYNTAX NODE',
  MEMBER = 'MEMBER SYNTAX NODE',
  INVOKE = 'INVOKE SYNTAX NODE',
  INFIX = 'INFIX SYNTAX NODE',
  PREFIX = 'PREFIX SYNTAX NODE',
  POSTFIX = 'POSTFIX SYNTAX NODE',
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

export type HasSemantic = {
  semantic?: Semantic | Nothing;
};

export function hasSemantic<T extends Node>(node: T | Nothing): node is T & HasSemantic {
  if (!node) {
    return false;
  }

  return 'semantic' in node;
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
  $Node.LAMBDA,
];

export type ExpressionNode =
  | CharNode
  | IdNode
  | IntegerNode
  | StringNode
  | ArrayNode
  | GroupNode
  | ObjectNode
  | InfixNode
  | PrefixNode
  | PostfixNode
  | InvokeNode
  | MemberNode;

export function isExpressionNode(node: Node | Nothing): node is ExpressionNode {
  if (!node) {
    return false;
  }

  return expressions.some((x) => node.$ === x);
}

export function isSyntaxNode(node: Node | Nothing): node is SyntaxNode {
  if (!node) {
    return false;
  }

  return node.$.split(' ').includes('SYNTAX');
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
