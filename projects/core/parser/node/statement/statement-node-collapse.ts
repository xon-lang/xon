import {Array2, Integer, Nothing, nothing} from '../../../lib/core';
import {
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
} from '../../parser-config';
import {SyntaxContext} from '../../syntax-context';
import {assignmentNodeParse} from '../syntax/assignment/assignment-node-parse';
import {declarationNodeParse} from '../syntax/declaration/declaration-node-parse';
import {importNodeParse} from '../syntax/import/import-node-parse';
import {infixNodeParse} from '../syntax/infix/infix-node-parse';
import {invokeNodeParse} from '../syntax/invoke/invoke-node-parse';
import {lambdaNodeParse} from '../syntax/lambda/lambda-node-parse';
import {memberNodeParse} from '../syntax/member/member-node-parse';
import {postfixNodeParse} from '../syntax/postfix/postfix-node-parse';
import {prefixNodeParse} from '../syntax/prefix/prefix-node-parse';
import {SyntaxNode} from '../syntax/syntax-node';

// todo rename spliceIndex to index
export type SyntaxParseResult = {index: Integer; deleteCount?: Integer; node: SyntaxNode} | Nothing;
export type SyntaxParseFn = (context: SyntaxContext, startIndex: Integer) => SyntaxParseResult;

const parsers: Array2<SyntaxParseFn> = [
  importNodeParse(),
  memberNodeParse([MEMBER, META_MEMBER]),
  invokeNodeParse(),
  prefixNodeParse([REST, PLUS, MINUS, PLUS, NOT], true),
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
  lambdaNodeParse(),
  declarationNodeParse(),
  assignmentNodeParse(),
];

export function statementNodeCollapse(context: SyntaxContext): Nothing {
  let result: SyntaxParseResult = nothing;

  for (const parse of parsers) {
    let index = 0;

    while ((result = parse(context, index))) {
      index = result.index;
      context.nodes.splice(result.index, result.deleteCount ?? result.node.children.length, result.node);
    }
  }
}
