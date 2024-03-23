import {Array2, Char, String2} from '../lib/core';
import {$Node} from './node/node';

export interface OperatorsOrder {
  operators: Array2<Array2<String2>>;
  operatorType: OperatorType;
  recursiveType: RecursiveType;
}

export enum OperatorType {
  MEMBER,
  RANGE,
  INVOKE,
  INFIX,
  PREFIX,
  POSTFIX,
}

export enum RecursiveType {
  LEFT = 0,
  RIGHT = 1,
}

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

export const IMPORT_CONTROL = 'import';
export const EXPORT_CONTROL = 'export';

export const MODEL_MODIFIER = 'model';
export const OBJECT_MODIFIER = 'object';

export const CONST_MODIFIER = 'const';
export const IDEM_MODIFIER = 'idem';
export const VAR_MODIFIER = 'var';

export const INFIX_MODIFIER = 'infix';
export const PREFIX_MODIFIER = 'prefix';
export const POSTFIX_MODIFIER = 'postfix';

export const TYPE_MODIFIERS = [MODEL_MODIFIER, OBJECT_MODIFIER];

export const VALUE_MODIFIERS = [CONST_MODIFIER, VAR_MODIFIER, PREFIX_MODIFIER, POSTFIX_MODIFIER, INFIX_MODIFIER];

export const OPERATOR_KEYWORDS = ['is', 'as', 'in'];

export const MODIFIER_KEYWORDS = [...TYPE_MODIFIERS, ...VALUE_MODIFIERS];

export const CONTROL_KEYWORDS = [
  'if',
  'then',
  'else',
  'for',
  'do',
  'while',
  'break',
  'continue',
  'export',
  'return',
  EXPORT_CONTROL,
  IMPORT_CONTROL,
];

export const operatorsOrders: Array2<OperatorsOrder> = [
  {
    operators: [`${MEMBER} ${META_MEMBER}`],
    operatorType: OperatorType.MEMBER,
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
    operators: ['^', '* / %', '+ -'],
    operatorType: OperatorType.INFIX,
    recursiveType: RecursiveType.LEFT,
  },
  {
    operators: [RANGE],
    operatorType: OperatorType.RANGE,
    recursiveType: RecursiveType.LEFT,
  },
  {
    operators: ['< <= >= >', '== !=', OPERATOR_KEYWORDS.join(' '), AND, OR],
    operatorType: OperatorType.INFIX,
    recursiveType: RecursiveType.LEFT,
  },
  {
    operators: [MODIFIER_KEYWORDS.join(' ')],
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
    operators: [CONTROL_KEYWORDS.join(' ')],
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
