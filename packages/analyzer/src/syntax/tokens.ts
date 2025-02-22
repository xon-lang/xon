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
export const CR = newChar('\r');
export const LF = newChar('\n');
export const CRLF = newText('\r\n');
export const COMMA = newChar(',');
export const JOINING = newChar('~');
export const SPACE = newChar(' ');
export const UNDERSCORE = newChar('_');

export const PAREN_OPEN = newText('(');
export const PAREN_CLOSE = newText(')');

export const BRACKET_OPEN = newText('[');
export const BRACKET_CLOSE = newText(']');

export const BRACE_OPEN = newText('{');
export const BRACE_CLOSE = newText('}');

export const ANGLE_OPEN = newText('<:');
export const ANGLE_CLOSE = newText(':>');

export const PREFIX = newText('prefix');
export const INFIX = newText('infix');
export const POSTFIX = newText('postfix');

export const TYPE_KEYWORDS = newArrayData([PREFIX, INFIX, POSTFIX]).sort((a, b) => a.count() - b.count());

export const PUBLIC = newText('public');

export const MODIFIER_KEYWORDS = newArrayData([PUBLIC]).sort((a, b) => a.count() - b.count());

export const IF = newText('if');
export const ELSE = newText('else');
export const LOOP = newText('loop');
export const BREAK = newText('break');
export const CONTINUE = newText('continue');
export const IMPORT = newText('import');
export const EXPORT = newText('export');
export const RETURN = newText('return');

export const CONTROL_KEYWORDS = newArrayData([IF, ELSE, BREAK, CONTINUE, IMPORT, RETURN, EXPORT]).sort(
  (a, b) => a.count() - b.count(),
);

export const COLON = newText(':');
export const ASSIGN = newText('=');
export const POINT = newText('.');
export const META = newText('::');
export const RANGE = newText('..');
export const AT = newText('@');
export const AND = newText('&');
export const OR = newText('|');
export const SLASH = newText('/');
export const BACKSLASH = newText('\\');
export const EXCLAMATION = newText('!');
export const REST = newText('...');
export const PLUS = newText('+');
export const MINUS = newText('-');
export const QUESTION = newText('?');
export const POW = newText('^');
export const ASTERISK = newText('*');
export const MOD = newText('%');
export const GREAT = newText('>');
export const GREAT_EQUALS = newText('>=');
export const LESS = newText('<');
export const LESS_EQUALS = newText('<=');
export const EQUALS = newText('==');
export const NOT_EQUALS = newText('!=');

export const SYMBOL_OPERATORS = newArrayData([
  COLON,
  ASSIGN,
  POINT,
  META,
  RANGE,
  AT,
  AND,
  OR,
  BACKSLASH,
  EXCLAMATION,
  REST,
  PLUS,
  MINUS,
  QUESTION,
  POW,
  ASTERISK,
  SLASH,
  MOD,
  GREAT,
  GREAT_EQUALS,
  LESS,
  LESS_EQUALS,
  EQUALS,
  NOT_EQUALS,
]);

export const IS = newText('is');
export const AS = newText('as');
export const IN = newText('in');

export const WORD_OPERATORS = newArrayData([IS, AS, IN]);
