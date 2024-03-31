import {Char} from '../lib/core';

export const COMMENT_LINE = '//';
export const COMMENT_BLOCK = '---';

export const NL = '\n';
export const COMMA = ',';
export const JOINING = '~';
export const SPACE = ' ';
export const UNDERSCORE = '_';
export const STRING_QUOTE = '"';
export const CHAR_QUOTE = "'";
export const TYPE = ':';
export const ASSIGN = '=';
export const MEMBER = '.';
export const META_MEMBER = '::';
export const RANGE = '..';

export const INTERSECTION = '&';
export const UNION = '|';
export const COMPLEMENT = '\\';
export const NOT = '!';

export const GROUP_OPEN = '(';
export const GROUP_CLOSE = ')';

export const ARRAY_OPEN = '[';
export const ARRAY_CLOSE = ']';

export const OBJECT_OPEN = '{';
export const OBJECT_CLOSE = '}';

export const OPEN_CLOSE_PAIR: Record<Char, Char> = {
  [GROUP_OPEN]: GROUP_CLOSE,
  [ARRAY_OPEN]: ARRAY_CLOSE,
  [OBJECT_OPEN]: OBJECT_CLOSE,
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
];

export const REST = '...';
export const PLUS = '+';
export const MINUS = '-';
export const OPTIONAL = '?';
export const PROMISE = '!';
export const SQUARE = '^';
export const MULTIPLY = '*';
export const DIVIDE = '/';
export const MOD = '%';
export const GREAT = '>';
export const GREAT_EQUALS = '>=';
export const LESS = '<';
export const LESS_EQUALS = '<=';
export const EQUALS = '==';
export const NOT_EQUALS = '!=';

export const OPERATORS = [
  IMPORT_CONTROL,
  MEMBER,
  META_MEMBER,
  REST,
  PLUS,
  MINUS,
  NOT,
  OPTIONAL,
  PROMISE,
  SQUARE,
  MULTIPLY,
  DIVIDE,
  MOD,
  PLUS,
  MINUS,
  RANGE,
  LESS,
  LESS_EQUALS,
  GREAT_EQUALS,
  GREAT,
  EQUALS,
  NOT_EQUALS,
  INTERSECTION,
  UNION,
  COMPLEMENT,
  COMMA,
  ...MODIFIER_KEYWORDS,
  ...CONTROL_KEYWORDS,
  ...OPERATOR_KEYWORDS,
].sort((a, b) => a.length - b.length);
