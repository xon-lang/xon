import {newArrayData, newTextData} from '#common';

export const COMMENT_LINE = newTextData('//');

export const COMMENT_BLOCK_OPEN = newTextData('---');
export const COMMENT_BLOCK_CLOSE = newTextData('---');

export const DOCUMENTATION_OPEN = newTextData('===');
export const DOCUMENTATION_CLOSE = newTextData('===');

export const STRING_OPEN = newTextData('"');
export const STRING_CLOSE = newTextData('"');

export const CHAR_OPEN = newTextData("'");
export const CHAR_CLOSE = newTextData("'");

export const NL = newTextData('\n');
export const COMMA = newTextData(',');
export const JOINING = newTextData('~');
export const SPACE = newTextData(' ');
export const UNDERSCORE = newTextData('_');
export const TYPE = newTextData(':');
export const ASSIGN = newTextData('=');
export const MEMBER = newTextData('.');
export const META_MEMBER = newTextData('::');
export const RANGE = newTextData('..');

export const AT = newTextData('@');

export const INTERSECTION = newTextData('&');
export const UNION = newTextData('|');
export const COMPLEMENT = newTextData('\\');
export const NOT = newTextData('!');

export const PAREN_OPEN = newTextData('(');
export const PAREN_CLOSE = newTextData(')');

export const BRACKET_OPEN = newTextData('[');
export const BRACKET_CLOSE = newTextData(']');

export const BRACE_OPEN = newTextData('{');
export const BRACE_CLOSE = newTextData('}');

// todo should we use '()' generics instead of '<::>' ???
export const ANGLE_OPEN = newTextData('<:');
export const ANGLE_CLOSE = newTextData(':>');

export const IMPORT = newTextData('import');
export const EXPORT = newTextData('export');
export const RETURN = newTextData('return');

export const CONST = newTextData('const');
export const IDEM = newTextData('idem');
export const VAR = newTextData('var');

export const INFIX = newTextData('infix');
export const PREFIX = newTextData('prefix');
export const POSTFIX = newTextData('postfix');
export const AFFIX_MODIFIERS = newArrayData([PREFIX, INFIX, POSTFIX]);

export const TYPE_MODIFIER = newTextData('type');
export const VALUE_MODIFIERS = newArrayData([CONST, VAR, ...AFFIX_MODIFIERS]);

export const MODIFIER_KEYWORDS = newArrayData([TYPE_MODIFIER, ...VALUE_MODIFIERS]);
export const OPERATOR_KEYWORDS = newArrayData([newTextData('is'), newTextData('as'), newTextData('in')]);
export const CONTROL_KEYWORDS = newArrayData([
  newTextData('if'),
  newTextData('then'),
  newTextData('else'),
  newTextData('for'),
  newTextData('do'),
  newTextData('while'),
  newTextData('break'),
  newTextData('continue'),
  RETURN,
  EXPORT,
]);

export const REST = newTextData('...');
export const PLUS = newTextData('+');
export const MINUS = newTextData('-');
export const OPTIONAL = newTextData('?');
export const PROMISE = newTextData('!');
export const POW = newTextData('^');
export const MULTIPLY = newTextData('*');
export const DIVIDE = newTextData('/');
export const MOD = newTextData('%');
export const GREAT = newTextData('>');
export const GREAT_EQUALS = newTextData('>=');
export const LESS = newTextData('<');
export const LESS_EQUALS = newTextData('<=');
export const EQUALS = newTextData('==');
export const NOT_EQUALS = newTextData('!=');

export const OPERATORS_SORTED = newArrayData([
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
]).sort((a, b) => a.length() - b.length());
