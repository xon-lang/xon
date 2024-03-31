import {
  COMMA,
  COMPLEMENT,
  CONTROL_KEYWORDS,
  DIVIDE,
  EQUALS,
  GREAT,
  GREAT_EQUALS,
  IMPORT_CONTROL,
  INTERSECTION,
  LESS,
  LESS_EQUALS,
  MEMBER,
  META_MEMBER,
  MINUS,
  MOD,
  MODIFIER_KEYWORDS,
  MULTIPLY,
  NOT,
  NOT_EQUALS,
  OPERATOR_KEYWORDS,
  OPTIONAL,
  PLUS,
  PROMISE,
  RANGE,
  REST,
  SQUARE,
  UNION,
} from '../parser-config';
import {importOperator} from './import/import-operator';
import {infixOperator} from './infix/infix-operator';
import {invokeOperator} from './invoke/invoke-operator';
import {memberOperator} from './member/member-operator';
import {RecursiveType} from './operator';
import {postfixOperator} from './postfix/postfix-operator';
import {prefixOperator} from './prefix/prefix-operator';
import {rangeOperator} from './range/range-operator';

export const OPERATOR_ORDERS = [
  importOperator([IMPORT_CONTROL]),
  memberOperator([MEMBER, META_MEMBER]),
  invokeOperator([]),
  prefixOperator([REST, PLUS, MINUS, NOT]),
  postfixOperator([OPTIONAL, PROMISE]),
  infixOperator([SQUARE]),
  infixOperator([MULTIPLY, DIVIDE, MOD]),
  infixOperator([PLUS, MINUS]),
  rangeOperator([RANGE]),
  infixOperator([LESS, LESS_EQUALS, GREAT_EQUALS, GREAT]),
  infixOperator([EQUALS, NOT_EQUALS]),
  infixOperator(OPERATOR_KEYWORDS),
  infixOperator([INTERSECTION]),
  infixOperator([UNION, COMPLEMENT]),
  // todo create modifier keyword node
  prefixOperator(MODIFIER_KEYWORDS, RecursiveType.RIGHT),
  prefixOperator(CONTROL_KEYWORDS, RecursiveType.RIGHT),
  infixOperator([COMMA]),
];
