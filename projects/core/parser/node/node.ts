import {Array2, Nothing} from '../../lib/core';
import {Semantic} from '../../semantic/semantic';
import {TextResourceRange} from '../../util/resource/text/text-resource-range';
import {TokenNode} from './token/token-node';

export interface Node {
  $: $Node;
  range: TextResourceRange;
  parent?: Node | Nothing;
  children?: Array2<Node>;
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

  OPERATOR = 'OPERATOR',
  OPEN = 'OPEN',
  CLOSE = 'CLOSE',

  ID = 'ID',
  ITEM = 'ITEM',
  OBJECT = 'OBJECT',
  ARRAY = 'ARRAY',
  GROUP = 'GROUP',
  DECLARATION = 'DECLARATION',
  GENERICS = 'GENERICS',
  PARAMETERS = 'PARAMETERS',

  IMPORT = 'IMPORT',
  MEMBER = 'MEMBER',
  RANGE = 'RANGE',
  INVOKE = 'INVOKE',
  INFIX = 'INFIX',
  PREFIX = 'PREFIX',
  POSTFIX = 'POSTFIX',
  TYPE = 'TYPE',
  ASSIGN = 'ASSIGN',

  STATEMENT = 'STATEMENT',
  UNKNOWN = 'UNKNOWN',
}

export function is<T extends Node = Node>(node: {$?: $Node} | Nothing, nodeType: $Node): node is T {
  return node?.$ === nodeType;
}
