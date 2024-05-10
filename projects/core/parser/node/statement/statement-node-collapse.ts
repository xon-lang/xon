import {Array2, Integer, Nothing, nothing} from '../../../lib/core';
import {
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
} from '../../parser-config';
import {SyntaxContext} from '../../syntax-context';
import {declarationNodeParse} from '../syntax/declaration/declaration-node-parse';
import {importNodeParse} from '../syntax/import/import-node-parse';
import {infixNodeParse} from '../syntax/infix/infix-node-parse';
import {invokeNodeParse} from '../syntax/invoke/invoke-node-parse';
import {memberNodeParse} from '../syntax/member/member-node-parse';
import {postfixNodeParse} from '../syntax/postfix/postfix-node-parse';
import {prefixNodeParse} from '../syntax/prefix/prefix-node-parse';
import {SyntaxNode} from '../syntax/syntax-node';

export type SyntaxParseResult = {spliceIndex: Integer; node: SyntaxNode} | Nothing;
export type SyntaxParseFn = (context: SyntaxContext, index: Integer) => SyntaxParseResult;

const parsers: Array2<SyntaxParseFn> = [
  importNodeParse([IMPORT]),
  memberNodeParse([MEMBER, META_MEMBER]),
  invokeNodeParse(),
  prefixNodeParse([REST, PLUS, MINUS, NOT], true),
  postfixNodeParse([OPTIONAL, PROMISE], true),
  infixNodeParse([POW], true),
  infixNodeParse([MULTIPLY, DIVIDE, MOD], true),
  infixNodeParse([PLUS, MINUS], true),
  infixNodeParse([RANGE], true),
  infixNodeParse([LESS, LESS_EQUALS, GREAT_EQUALS, GREAT], true),
  infixNodeParse([EQUALS, NOT_EQUALS], true),
  infixNodeParse(OPERATOR_KEYWORDS, true),
  infixNodeParse([INTERSECTION], true),
  infixNodeParse([UNION, COMPLEMENT], true),
  prefixNodeParse(MODIFIER_KEYWORDS, false),
  prefixNodeParse(CONTROL_KEYWORDS, false),
  declarationNodeParse(),
];

export function statementNodeCollapse(context: SyntaxContext): Nothing {
  let result: SyntaxParseResult = nothing;

  for (const parse of parsers) {
    let index = 0;

    while ((result = parse(context, index))) {
      index = result.spliceIndex;
      context.nodes.splice(result.spliceIndex, result.node.children.length, result.node);
    }
  }
}
