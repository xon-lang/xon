// todo rename the file to parser-config

import { Boolean2, Integer, String2 } from '../lib/core';
import { DeclarationType } from './node/declaration/declaration-node';
import { NodeType } from './node/node-type';

export interface OperatorsOrder {
  operators: String2[][];
  operatorType: OperatorType;
  recursiveType: RecursiveType;
}

export enum OperatorType {
  PREFIX = 0,
  POSTFIX = 1,
  INFIX = 2,
  // eslint-disable-next-line no-magic-numbers
  INVOKE = 3,
}

export enum RecursiveType {
  LEFT = 0,
  RIGHT = 1,
}

export const CR = '\r';

export const CR_CODE = CR.charCodeAt(0);

export const LF = '\n';

export const LF_CODE = LF.charCodeAt(0);

export const COMMA = ',';

export const COMMA_CODE = COMMA.charCodeAt(0);

export const JOINING = '\\';

export const JOINING_CODE = JOINING.charCodeAt(0);

export const SPACE = ' ';

export const SPACE_CODE = SPACE.charCodeAt(0);

export const TAB = '\t';

export const TAB_CODE = TAB.charCodeAt(0);

export const UPPER_A_CODE = 'A'.charCodeAt(0);

export const UPPER_Z_CODE = 'Z'.charCodeAt(0);

export const LOWER_A_CODE = 'a'.charCodeAt(0);

export const LOWER_Z_CODE = 'z'.charCodeAt(0);

export const DIGIT_0_CODE = '0'.charCodeAt(0);

export const DIGIT_9_CODE = '9'.charCodeAt(0);

export const UNDERSCORE_CODE = '_'.charCodeAt(0);

export const GROUP_NODE_OPEN_CODE = '('.charCodeAt(0);

export const GROUP_NODE_CLOSE_CODE = ')'.charCodeAt(0);

export const ARRAY_NODE_OPEN_CODE = '['.charCodeAt(0);

export const ARRAY_NODE_CLOSE_CODE = ']'.charCodeAt(0);

export const OBJECT_NODE_OPEN_CODE = '{'.charCodeAt(0);

export const OBJECT_NODE_CLOSE_CODE = '}'.charCodeAt(0);

export const OPEN_CLOSE_PAIR: Record<Integer, Integer> = {
  [GROUP_NODE_OPEN_CODE]: GROUP_NODE_CLOSE_CODE,
  [ARRAY_NODE_OPEN_CODE]: ARRAY_NODE_CLOSE_CODE,
  [OBJECT_NODE_OPEN_CODE]: OBJECT_NODE_CLOSE_CODE,
} as const;

export const STRING_QUOTE = '"';

export const CHAR_QUOTE = "'";

export const TYPE_TOKEN = ':';

export const ASSIGN_TOKEN = '=';

export const MEMBER_TOKEN = '.';

export const META_MEMBER_TOKEN = '::';

// todo here we have declaration modifiers, should we have another modifiers?
export const MODIFIERS: Record<String2, DeclarationType> = {
  model: DeclarationType.OBJECT,
  const: DeclarationType.VALUE,
  var: DeclarationType.VALUE,
  prefix: DeclarationType.METHOD,
  postfix: DeclarationType.METHOD,
  infix: DeclarationType.METHOD,
};

export const MODIFIERS_NAMES = Object.keys(MODIFIERS);

export const KEYWORDS = ['if', 'then', 'else', 'for', 'do', 'while', 'break', 'continue', 'export', 'import', 'return'];

export const operatorsOrders: OperatorsOrder[] = [
  {
    operators: [`${MEMBER_TOKEN} ${META_MEMBER_TOKEN}`],
    operatorType: OperatorType.INFIX,
    recursiveType: RecursiveType.LEFT,
  },
  {
    operators: [],
    operatorType: OperatorType.INVOKE,
    recursiveType: RecursiveType.LEFT,
  },
  {
    operators: ['... + - !'],
    operatorType: OperatorType.PREFIX,
    recursiveType: RecursiveType.LEFT,
  },
  {
    operators: ['? !'],
    operatorType: OperatorType.POSTFIX,
    recursiveType: RecursiveType.LEFT,
  },
  {
    operators: ['^', '* / %', '+ -', '..', '< <= >= >', '== !=', 'is as in', '&', '|'],
    operatorType: OperatorType.INFIX,
    recursiveType: RecursiveType.LEFT,
  },
  {
    operators: [TYPE_TOKEN],
    operatorType: OperatorType.INFIX,
    recursiveType: RecursiveType.RIGHT,
  },
  {
    operators: [ASSIGN_TOKEN],
    operatorType: OperatorType.INFIX,
    recursiveType: RecursiveType.RIGHT,
  },
].map((x) => ({
  operators: x.operators.map((s) => s.split(' ')),
  operatorType: x.operatorType,
  recursiveType: x.recursiveType,
}));

export const ALLOW_ASSIGN_NODE_TYPES = [NodeType.ID, NodeType.GROUP, NodeType.ARRAY, NodeType.OBJECT];

export interface ParserConfig {
  readonly throwErrorIssue: Boolean2;
}
