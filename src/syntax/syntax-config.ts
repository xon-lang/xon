// todo rename the file to parser-config

import { Boolean2, Integer, String2 } from '../lib/core';
import { $Node } from './node/node';

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
// eslint-disable-next-line padding-line-between-statements, @typescript-eslint/no-unused-vars
const a: number | string = 1 + 2 / 0;

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

export const MODEL_MODIFIER = 'model';

export const MODIFIERS = [MODEL_MODIFIER, 'const', 'var', 'prefix', 'postfix', 'infix'];

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
    operators: [MODIFIERS.join(' ')],
    operatorType: OperatorType.PREFIX,
    recursiveType: RecursiveType.RIGHT,
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
  {
    operators: [KEYWORDS.join(' ')],
    operatorType: OperatorType.PREFIX,
    recursiveType: RecursiveType.RIGHT,
  },
].map((x) => ({
  operators: x.operators.map((s) => s.split(' ')),
  operatorType: x.operatorType,
  recursiveType: x.recursiveType,
}));

export const ALLOW_ASSIGN_NODE_TYPES = [$Node.ID, $Node.GROUP, $Node.ARRAY, $Node.OBJECT];

export interface ParserConfig {
  readonly throwErrorIssue: Boolean2;
}
