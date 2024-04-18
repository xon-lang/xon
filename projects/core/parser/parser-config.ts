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

export const IMPORT = 'import';
export const EXPORT = 'export';

export const MODEL = 'model';
export const OBJECT = 'object';

export const CONST = 'const';
export const IDEM = 'idem';
export const VAR = 'var';

export const INFIX = 'infix';
export const PREFIX = 'prefix';
export const POSTFIX = 'postfix';

export const TYPE_MODIFIERS = [MODEL, OBJECT];

export const VALUE_MODIFIERS = [CONST, VAR, PREFIX, POSTFIX, INFIX];

export const OPERATOR_KEYWORDS = ['is', 'as', 'in'];

export const MODIFIER_KEYWORDS = [...TYPE_MODIFIERS, ...VALUE_MODIFIERS];

export const CONTROL_KEYWORDS = ['if', 'then', 'else', 'for', 'do', 'while', 'break', 'continue', 'return', EXPORT];

export const REST = '...';
export const PLUS = '+';
export const MINUS = '-';
export const OPTIONAL = '?';
export const PROMISE = '!';
export const POW = '^';
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
  IMPORT,
  MEMBER,
  META_MEMBER,
  REST,
  PLUS,
  MINUS,
  NOT,
  OPTIONAL,
  PROMISE,
  POW,
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
