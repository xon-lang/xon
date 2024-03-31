import {Array2, Nothing} from '../../lib/core';
import {Semantic} from '../../semantic/semantic';
import {TextResourceRange} from '../../util/resource/text/text-resource-range';
import {SyntaxNode} from './syntax/syntax-node';
import {TokenNode} from './token/token-node';

export interface Node {
  $: $Node;
  range: TextResourceRange;
  parent?: Node | Nothing;
  // todo make 'hiddenNodes' optional
  hiddenNodes: Array2<TokenNode>;
  semantic?: Semantic | Nothing;
}

export enum $Node {
  COMMENT_LINE = 'COMMENT_LINE',
  COMMENT_BLOCK = 'COMMENT_BLOCK',
  WHITESPACE = 'WHITESPACE',
  JOINING = 'JOINING',
  NL = 'NL',

  INTEGER = 'INTEGER',
  FLOAT = 'FLOAT',
  CHAR = 'CHAR',
  STRING = 'STRING',
  ID = 'ID',
  OPERATOR = 'OPERATOR',
  OPEN = 'OPEN',
  CLOSE = 'CLOSE',
  UNKNOWN = 'UNKNOWN',

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
  RANGE = 'RANGE SYNTAX NODE',
  INVOKE = 'INVOKE SYNTAX NODE',
  INFIX = 'INFIX SYNTAX NODE',
  PREFIX = 'PREFIX SYNTAX NODE',
  POSTFIX = 'POSTFIX SYNTAX NODE',
  TYPE = 'TYPE SYNTAX NODE',
  ASSIGN = 'ASSIGN SYNTAX NODE',
  STATEMENT = 'STATEMENT SYNTAX NODE',
}

export function is<T extends Node = Node>(node: {$?: $Node} | Nothing, nodeType: $Node): node is T {
  return node?.$ === nodeType;
}

export function isSyntaxNode(node: Node): node is SyntaxNode {
  return node.$.includes(' SYNTAX ');
}
