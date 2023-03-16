import { Integer, String2 } from '~/lib/core';

export enum NodeType {
  ID = 'ID',
  NL = 'NL',
  INDENT = 'INDENT',
  DEDENT = 'DEDENT',
  STRING = 'STRING',
  INTEGER = 'INTEGER',
  OPERATOR = 'OPERATOR',
  UNEXPECTED = 'UNEXPECTED',
  WHITESPACE = 'WHITESPACE',
  JOINING = 'LINE_JOINING',

  OPEN = 'OPEN',
  CLOSE = 'CLOSE',
  COMMA = 'COMMA',
  ARRAY = 'ARRAY',
  BODY = 'BODY',
  LADDER = 'LADDER',
  INFIX = 'INFIX',
  INVOKE = 'INVOKE',
  POSTFIX = 'POSTFIX',
  PREFIX = 'PREFIX',
  MODULE = 'MODULE',
}

export interface Node {
  type: NodeType | String2;
  start: Integer;
  stop: Integer;
  // text: String2
}
