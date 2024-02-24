import { Nothing } from '../../lib/core';
import { Semantic } from '../../semantic/semantic';
import { SourceRange } from '../../source/source-range';
import { TokenNode } from './token/token-node';

export interface Node {
  readonly $: $Node;
  range: SourceRange;
  hiddenNodes: TokenNode[];
  semantic?: Semantic | Nothing;
}

export enum $Node {
  COMMENT = 'COMMENT',
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

  INVOKE = 'INVOKE',
  INFIX = 'INFIX',
  POSTFIX = 'POSTFIX',
  PREFIX = 'PREFIX',

  DECLARATION = 'DECLARATION',
  DECLARATION_LIST = 'DECLARATION_LIST',
  STATEMENT = 'STATEMENT',
  UNKNOWN = 'UNKNOWN',
}

export function is<T extends Node = Node>(node: { $?: $Node } | Nothing, nodeType: $Node): node is T {
  return node?.$ === nodeType;
}
