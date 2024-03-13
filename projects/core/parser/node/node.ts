import {Nothing} from '../../lib/core';
import {Semantic} from '../../semantic/semantic';
import {SourceRange} from '../../source/source-range';
import {TokenNode} from './token/token-node';

export interface Node {
  readonly $: $Node;
  readonly range: SourceRange;
  parent?: Node | Nothing;
  readonly children?: Node[];
  hiddenNodes: TokenNode[];
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
  OBJECT = 'OBJECT',
  ARRAY = 'ARRAY',
  GROUP = 'GROUP',

  MEMBER = 'MEMBER',
  INVOKE = 'INVOKE',
  INFIX = 'INFIX',
  PREFIX = 'PREFIX',
  POSTFIX = 'POSTFIX',

  DECLARATION = 'DECLARATION',
  DECLARATION_LIST = 'DECLARATION_LIST',
  STATEMENT = 'STATEMENT',
  UNKNOWN = 'UNKNOWN',
}

export function is<T extends Node = Node>(node: {$?: $Node} | Nothing, nodeType: $Node): node is T {
  return node?.$ === nodeType;
}
