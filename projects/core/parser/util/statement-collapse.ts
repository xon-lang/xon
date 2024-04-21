import {Array2, Integer, Nothing, nothing} from '../../lib/core';
import {importNodeParse} from '../node/syntax/import/import-node-parse';
import {infixNodeParse} from '../node/syntax/infix/infix-node-parse';
import {invokeNodeParse} from '../node/syntax/invoke/invoke-node-parse';
import {memberNodeParse} from '../node/syntax/member/member-node-parse';
import {postfixNodeParse} from '../node/syntax/postfix/postfix-node-parse';
import {prefixNodeParse} from '../node/syntax/prefix/prefix-node-parse';
import {SyntaxNode} from '../node/syntax/syntax-node';
import {
  COMMA,
  COMPLEMENT,
  CONTROL_KEYWORDS,
  DIVIDE,
  EQUALS,
  GREAT,
  GREAT_EQUALS,
  IMPORT,
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
  POW,
  PROMISE,
  RANGE,
  REST,
  UNION,
} from '../parser-config';
import {SyntaxContext} from '../syntax-context';

export type SyntaxParseResult = {spliceIndex: Integer; node: SyntaxNode} | Nothing;
export type SyntaxParseFn = (context: SyntaxContext, index: Integer) => SyntaxParseResult;

const parsers: Array2<SyntaxParseFn> = [
  importNodeParse([IMPORT]),
  memberNodeParse([MEMBER, META_MEMBER]),
  invokeNodeParse(),
  prefixNodeParse([REST, PLUS, MINUS, NOT]),
  postfixNodeParse([OPTIONAL, PROMISE]),
  infixNodeParse([POW]),
  infixNodeParse([MULTIPLY, DIVIDE, MOD]),
  infixNodeParse([PLUS, MINUS]),
  infixNodeParse([RANGE]),
  infixNodeParse([LESS, LESS_EQUALS, GREAT_EQUALS, GREAT]),
  infixNodeParse([EQUALS, NOT_EQUALS]),
  infixNodeParse(OPERATOR_KEYWORDS),
  infixNodeParse([INTERSECTION]),
  infixNodeParse([UNION, COMPLEMENT]),
  prefixNodeParse(MODIFIER_KEYWORDS, false),
  prefixNodeParse(CONTROL_KEYWORDS, false),
  infixNodeParse([COMMA]),
];

export function statementCollapse(context: SyntaxContext): Nothing {
  let result: SyntaxParseResult = nothing;

  for (const parse of parsers) {
    let index = 0;

    while ((result = parse(context, index))) {
      index = result.spliceIndex;
      context.nodes.splice(result.spliceIndex, result.node.children.length, result.node);
    }
  }
}
