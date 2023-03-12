import { Integer, String2 } from '~/lib/core';

export interface Node {
  startIndex: Integer;
  stopIndex: Integer;
  // rename to type
  nodeType: NodeType | String2;
  // remove Later
  text: String2;
}

export enum NodeType {
  ID = 'ID',
  STRING = 'STRING',
  INTEGER = 'INTEGER',
  OPERATOR = 'OPERATOR',
  UNEXPECTED = 'UNEXPECTED',
  WHITESPACE = 'WHITESPACE',
  JOINING = 'LINE_JOINING',

  OPEN = 'OPEN',
  CLOSE = 'CLOSE',
  ARRAY = 'ARRAY',
  BODY = 'BODY',
  LADDER = 'LADDER',
  INFIX = 'INFIX',
  INVOKE = 'INVOKE',
  POSTFIX = 'POSTFIX',
  PREFIX = 'PREFIX',
  SOURCE = 'SOURCE',
  MODULE = 'MODULE',
}
