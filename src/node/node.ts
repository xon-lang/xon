import { Integer, String2 } from '~/lib/core';

export enum NodeType {
  TOKEN = 'TOKEN',
  ID = 'ID-TOKEN',
  NL = 'NL-TOKEN',
  STRING = 'STRING-TOKEN',
  INTEGER = 'INTEGER-TOKEN',
  OPERATOR = 'OPERATOR-TOKEN',
  UNKNOWN = 'UNKNOWN-TOKEN',
  WHITESPACE = 'WHITESPACE-TOKEN',
  JOINING = 'JOINING-TOKEN',
  OPEN = 'OPEN-TOKEN',
  CLOSE = 'CLOSE-TOKEN',
  COMMA = 'COMMA-TOKEN',

  ARRAY = 'ARRAY',
  BODY = 'BODY',
  LADDER = 'LADDER',
  INFIX = 'INFIX',
  INVOKE = 'INVOKE',
  POSTFIX = 'POSTFIX',
  PREFIX = 'PREFIX',
  FLOAT = 'FLOAT',
  MEMBER = 'MEMBER',
}

export interface Node {
  type: NodeType | String2;
}

export interface TokenNode extends Node {
  start: Integer;
  stop: Integer;
  text: String2;
}
