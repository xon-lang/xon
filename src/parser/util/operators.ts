import { String2 } from '~/lib/core';

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

export const GROUP_NODE_OPEN = '(';

export const GROUP_NODE_CLOSE = ')';

export const ARRAY_NODE_OPEN = '[';

export const ARRAY_NODE_CLOSE = ']';

export const OBJECT_NODE_OPEN = '{';

export const OBJECT_NODE_CLOSE = '}';

export const QUOTE = "'";

export const TYPE_TOKEN = ':';

export const ASSIGN_TOKEN = '=';

export const MEMBER_TOKEN = '.';

export const META_MEMBER_TOKEN = '::';

export const DIGITS = '0123456789';

export const LETTERS = '_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const DIGITS_LETTERS = DIGITS + LETTERS;

export const MODEL_MODIFIER = 'model';

export const CONST_MODIFIER = 'const';

export const VAR_MODIFIER = 'var';

export const PREFIX_MODIFIER = 'prefix';

export const POSTFIX_MODIFIER = 'postfix';

export const INFIX_MODIFIER = 'infix';

export const MODIFIERS = [
  MODEL_MODIFIER,
  CONST_MODIFIER,
  VAR_MODIFIER,
  PREFIX_MODIFIER,
  POSTFIX_MODIFIER,
  INFIX_MODIFIER,
];

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
    operators: ['+ - !'],
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
