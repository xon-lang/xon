import { Boolean2, Integer, String2 } from '../lib/core';
import { $Node } from './node/node';

export interface OperatorsOrder {
  operators: String2[][];
  operatorType: OperatorType;
  recursiveType: RecursiveType;
}

export enum OperatorType {
  PREFIX,
  POSTFIX,
  INFIX,
  INVOKE,
}

export enum RecursiveType {
  LEFT = 0,
  RIGHT = 1,
}
const a: number | string = 1 + 2 / 0;

export const COMMENT_LINE = '--';
export const COMMENT_LINE_CODE = COMMENT_LINE.charCodeAt(0);

export const NL = '\n';
export const NL_CODE = NL.charCodeAt(0);

export const COMMA = ',';
export const COMMA_CODE = COMMA.charCodeAt(0);

export const JOINING = '\\';
export const JOINING_CODE = JOINING.charCodeAt(0);

export const SPACE = ' ';
export const SPACE_CODE = SPACE.charCodeAt(0);

export const TAB = '\t';
export const TAB_CODE = TAB.charCodeAt(0);

export const UNDERSCORE = '_';
export const UNDERSCORE_CODE = UNDERSCORE.charCodeAt(0);

export const STRING_QUOTE = '"';
export const CHAR_QUOTE = "'";
export const TYPE_TOKEN = ':';
export const ASSIGN_TOKEN = '=';
export const MEMBER_TOKEN = '.';
export const META_MEMBER_TOKEN = '::';
export const MODEL_MODIFIER = 'model';
export const MODIFIERS_WITH_ATTRIBUTES = [MODEL_MODIFIER];
export const CONST_MODIFIER = 'const';
export const VAR_MODIFIER = 'var';
export const MODIFIERS = [...MODIFIERS_WITH_ATTRIBUTES, CONST_MODIFIER, VAR_MODIFIER, 'prefix', 'postfix', 'infix'];
export const KEYWORDS = ['if', 'then', 'else', 'for', 'do', 'while', 'break', 'continue', 'export', 'import', 'return'];
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

export interface SyntaxConfig {
  readonly throwErrorIssue: Boolean2;
}
