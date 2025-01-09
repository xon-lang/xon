import {newArrayData, newChar, newText} from '#common';

export const COMMENT_LINE = newText('//');

export const COMMENT_BLOCK_OPEN = newText('---');
export const COMMENT_BLOCK_CLOSE = newText('---');

export const DOCUMENTATION_OPEN = newText('===');
export const DOCUMENTATION_CLOSE = newText('===');

export const STRING_OPEN = newText('"');
export const STRING_CLOSE = newText('"');

export const CHAR_OPEN = newText("'");
export const CHAR_CLOSE = newText("'");

export const NL = newText('\n');
export const COMMA = newText(',');
export const JOINING = newText('~');
export const SPACE = newText(' ');
export const UNDERSCORE = newChar('_');

export const PAREN_OPEN = newText('(');
export const PAREN_CLOSE = newText(')');

export const BRACKET_OPEN = newText('[');
export const BRACKET_CLOSE = newText(']');

export const BRACE_OPEN = newText('{');
export const BRACE_CLOSE = newText('}');

export const ANGLE_OPEN = newText('<:');
export const ANGLE_CLOSE = newText(':>');

export const IMPORT = newText('import');
export const EXPORT = newText('export');
export const RETURN = newText('return');

export const CONST = newText('const');
export const IDEM = newText('idem');
export const VAR = newText('var');

export const INFIX = newText('infix');
export const PREFIX = newText('prefix');
export const POSTFIX = newText('postfix');
export const AFFIX_MODIFIERS = newArrayData([PREFIX, INFIX, POSTFIX]);

export const TYPE_MODIFIER = newText('type');
export const VALUE_MODIFIERS = newArrayData([CONST, VAR, ...AFFIX_MODIFIERS]);

export const MODIFIER_KEYWORDS = newArrayData([TYPE_MODIFIER, ...VALUE_MODIFIERS]);
export const OPERATOR_KEYWORDS = newArrayData([newText('is'), newText('as'), newText('in')]);
export const CONTROL_KEYWORDS = newArrayData([
  newText('if'),
  newText('then'),
  newText('else'),
  newText('for'),
  newText('do'),
  newText('while'),
  newText('break'),
  newText('continue'),
  RETURN,
  EXPORT,
]);

export const TYPE = newText(':');
export const ASSIGN = newText('=');
export const MEMBER = newText('.');
export const RADIX_POINT = newText('.');
export const META_MEMBER = newText('::');
export const RANGE = newText('..');
export const AT = newText('@');
export const INTERSECTION = newText('&');
export const UNION = newText('|');
export const COMPLEMENT = newText('\\');
export const NOT = newText('!');
export const REST = newText('...');
export const PLUS = newText('+');
export const MINUS = newText('-');
export const OPTIONAL = newText('?');
export const PROMISE = newText('!');
export const POW = newText('^');
export const MULTIPLY = newText('*');
export const DIVIDE = newText('/');
export const MOD = newText('%');
export const GREAT = newText('>');
export const GREAT_EQUALS = newText('>=');
export const LESS = newText('<');
export const LESS_EQUALS = newText('<=');
export const EQUALS = newText('==');
export const NOT_EQUALS = newText('!=');

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
]).sort((a, b) => a.count() - b.count());
