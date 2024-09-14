export const COMMENT_LINE = '//';

export const COMMENT_BLOCK_OPEN = '---';
export const COMMENT_BLOCK_CLOSE = '---';

export const DOCUMENTATION_OPEN = '===';
export const DOCUMENTATION_CLOSE = '===';

export const STRING_OPEN = '"';
export const STRING_CLOSE = '"';

export const CHAR_OPEN = "'";
export const CHAR_CLOSE = "'";

export const NL = '\n';
export const COMMA = ',';
export const JOINING = '~';
export const SPACE = ' ';
export const UNDERSCORE = '_';
export const TYPE = ':';
export const ASSIGN = '=';
export const MEMBER = '.';
export const META_MEMBER = '::';
export const RANGE = '..';

export const AT = '@';

export const INTERSECTION = '&';
export const UNION = '|';
export const COMPLEMENT = '\\';
export const NOT = '!';

export const PAREN_OPEN = '(';
export const PAREN_CLOSE = ')';

export const BRACKET_OPEN = '[';
export const BRACKET_CLOSE = ']';

export const BRACE_OPEN = '{';
export const BRACE_CLOSE = '}';

// todo should we use '()' generics instead of '<::>' ???
export const ANGLE_OPEN = '<:';
export const ANGLE_CLOSE = ':>';

export const IMPORT = 'import';
export const EXPORT = 'export';
export const RETURN = 'return';

export const CONST = 'const';
export const IDEM = 'idem';
export const VAR = 'var';

export const INFIX = 'infix';
export const PREFIX = 'prefix';
export const POSTFIX = 'postfix';
export const AFFIX_MODIFIERS = [PREFIX, INFIX, POSTFIX];

export const TYPE_MODIFIER = 'type';
export const VALUE_MODIFIERS = [CONST, VAR, ...AFFIX_MODIFIERS];

export const MODIFIER_KEYWORDS = [TYPE_MODIFIER, ...VALUE_MODIFIERS];
export const OPERATOR_KEYWORDS = ['is', 'as', 'in'];
export const CONTROL_KEYWORDS = [
  'if',
  'then',
  'else',
  'for',
  'do',
  'while',
  'break',
  'continue',
  RETURN,
  EXPORT,
];

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

export const OPERATORS_SORTED = [
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
  TYPE,
  ASSIGN,
  COMMA,
  ...MODIFIER_KEYWORDS,
  ...CONTROL_KEYWORDS,
  ...OPERATOR_KEYWORDS,
].sort((a, b) => a.length - b.length);
