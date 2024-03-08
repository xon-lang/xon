import {Char, String2} from '../lib/core';
import {$Node} from './node/node';

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

export const COMMENT_LINE = '//';
export const COMMENT_BLOCK = '---';

export const NL = '\n';
export const COMMA = ',';
export const JOINING = '\\';
export const SPACE = ' ';
export const UNDERSCORE = '_';
export const STRING_QUOTE = '"';
export const CHAR_QUOTE = "'";
export const TYPE_TOKEN = ':';
export const ASSIGN = '=';
export const MEMBER = '.';
export const META_MEMBER = '::';
export const KEYWORDS = ['if', 'then', 'else', 'for', 'do', 'while', 'break', 'continue', 'export', 'import', 'return'];
export const RANGE = '..';
export const AND = '&';
export const OR = '|';

export const GROUP_NODE_OPEN = '(';
export const GROUP_NODE_CLOSE = ')';

export const ARRAY_NODE_OPEN = '[';
export const ARRAY_NODE_CLOSE = ']';

export const OBJECT_NODE_OPEN = '{';
export const OBJECT_NODE_CLOSE = '}';

export const OPEN_CLOSE_PAIR: Record<Char, Char> = {
  [GROUP_NODE_OPEN]: GROUP_NODE_CLOSE,
  [ARRAY_NODE_OPEN]: ARRAY_NODE_CLOSE,
  [OBJECT_NODE_OPEN]: OBJECT_NODE_CLOSE,
};

export const MODEL_MODIFIER = 'model';
export const CONSTANT_MODIFIER = 'const';
export const VARIABLE_MODIFIER = 'var';
export const PREFIX_MODIFIER = 'prefix';
export const POSTFIX_MODIFIER = 'postfix';
export const INFIX_MODIFIER = 'infix';
export const MODIFIERS_WITH_ATTRIBUTES = [MODEL_MODIFIER];

export const MODIFIERS = [
  MODEL_MODIFIER,
  CONSTANT_MODIFIER,
  VARIABLE_MODIFIER,
  PREFIX_MODIFIER,
  POSTFIX_MODIFIER,
  INFIX_MODIFIER,
];

export const operatorsOrders: OperatorsOrder[] = [
  {
    operators: [`${MEMBER} ${META_MEMBER}`],
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
    operators: ['^', '* / %', '+ -', RANGE, '< <= >= >', '== !=', 'is as in', AND, OR],
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
    operators: [ASSIGN],
    operatorType: OperatorType.INFIX,
    recursiveType: RecursiveType.RIGHT,
  },
  {
    operators: [KEYWORDS.join(' ')],
    operatorType: OperatorType.PREFIX,
    recursiveType: RecursiveType.RIGHT,
  },
  {
    operators: [COMMA],
    operatorType: OperatorType.INFIX,
    recursiveType: RecursiveType.LEFT,
  },
].map((x) => ({
  operators: x.operators.map((s) => s.split(' ')),
  operatorType: x.operatorType,
  recursiveType: x.recursiveType,
}));

export const ALLOW_ASSIGN_NODE_TYPES = [$Node.ID, $Node.GROUP, $Node.ARRAY, $Node.OBJECT];
