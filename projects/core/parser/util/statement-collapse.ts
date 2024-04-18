import {Array2, Integer, Nothing, nothing} from '../../lib/core';
import {importSyntaxParse} from '../node/syntax/import/import-node';
import {infixSyntaxParse} from '../node/syntax/infix/infix-node';
import {invokeSyntaxParse} from '../node/syntax/invoke/invoke-node';
import {memberSyntaxParse} from '../node/syntax/member/member-node';
import {postfixSyntaxParse} from '../node/syntax/postfix/postfix-node';
import {prefixSyntaxParse} from '../node/syntax/prefix/prefix-node';
import {rangeSyntaxParse} from '../node/syntax/range/range-node';
import {SyntaxNode} from '../node/syntax/syntax-node';
import {
  COMMA,
  COMPLEMENT,
  CONTROL_KEYWORDS,
  DIVIDE,
  EQUALS,
  GREAT,
  GREAT_EQUALS,
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
export type SyntaxParseFn = (context: SyntaxContext, startIndex: Integer) => SyntaxParseResult;

const parsers: Array2<SyntaxParseFn> = [
  importSyntaxParse,
  memberSyntaxParse([MEMBER, META_MEMBER]),
  invokeSyntaxParse([]),
  prefixSyntaxParse([REST, PLUS, MINUS, NOT]),
  postfixSyntaxParse([OPTIONAL, PROMISE]),
  infixSyntaxParse([POW]),
  infixSyntaxParse([MULTIPLY, DIVIDE, MOD]),
  infixSyntaxParse([PLUS, MINUS]),
  rangeSyntaxParse([RANGE]),
  infixSyntaxParse([LESS, LESS_EQUALS, GREAT_EQUALS, GREAT]),
  infixSyntaxParse([EQUALS, NOT_EQUALS]),
  infixSyntaxParse(OPERATOR_KEYWORDS),
  infixSyntaxParse([INTERSECTION]),
  infixSyntaxParse([UNION, COMPLEMENT]),
  prefixSyntaxParse(MODIFIER_KEYWORDS, false),
  prefixSyntaxParse(CONTROL_KEYWORDS, false),
  infixSyntaxParse([COMMA]),
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
