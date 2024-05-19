import {Array2, Integer, Nothing, nothing} from '../../../../lib/types';
import {ISSUE_MESSAGE} from '../../../issue/issue-message';
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
import {$Node, Node, is} from '../node';
import {assignmentNodeParse} from '../syntax/assignment/assignment-node-parse';
import {DeclarationNode} from '../syntax/declaration/declaration-node';
import {declarationNodeParse, isTypeDeclarationNode} from '../syntax/declaration/declaration-node-parse';
import {importNodeParse} from '../syntax/import/import-node-parse';
import {infixNodeParse} from '../syntax/infix/infix-node-parse';
import {invokeNodeParse} from '../syntax/invoke/invoke-node-parse';
import {lambdaNodeParse} from '../syntax/lambda/lambda-node-parse';
import {memberNodeParse} from '../syntax/member/member-node-parse';
import {postfixNodeParse} from '../syntax/postfix/postfix-node-parse';
import {prefixNodeParse} from '../syntax/prefix/prefix-node-parse';
import {SyntaxNode} from '../syntax/syntax-node';

export type SyntaxParseResult = {index: Integer; deleteCount?: Integer; node: SyntaxNode} | Nothing;
export type SyntaxParseFn = (context: SyntaxContext, startIndex: Integer) => SyntaxParseResult;

const parsers: Array2<{min: Integer; parse: SyntaxParseFn}> = [
  {min: 2, parse: importNodeParse()},
  {min: 2, parse: memberNodeParse([MEMBER, META_MEMBER])},
  {min: 2, parse: invokeNodeParse()},
  {min: 2, parse: prefixNodeParse([REST, PLUS, MINUS, PLUS, NOT], true)},
  {min: 2, parse: postfixNodeParse([OPTIONAL, PROMISE], true)},
  {min: 3, parse: infixNodeParse([POW], true)},
  {min: 3, parse: infixNodeParse([MULTIPLY, DIVIDE, MOD], true)},
  {min: 3, parse: infixNodeParse([PLUS, MINUS], true)},
  {min: 3, parse: infixNodeParse([RANGE], true)},
  {min: 3, parse: infixNodeParse([LESS, LESS_EQUALS, GREAT_EQUALS, GREAT], true)},
  {min: 3, parse: infixNodeParse([EQUALS, NOT_EQUALS], true)},
  {min: 3, parse: infixNodeParse(OPERATOR_KEYWORDS, true)},
  {min: 3, parse: infixNodeParse([INTERSECTION], true)},
  {min: 3, parse: infixNodeParse([UNION, COMPLEMENT], true)},
  {min: 2, parse: prefixNodeParse(MODIFIER_KEYWORDS, false)},
  {min: 2, parse: prefixNodeParse(CONTROL_KEYWORDS, false)},
  {min: 1, parse: lambdaNodeParse()},
  {min: 1, parse: declarationNodeParse()},
  {min: 3, parse: assignmentNodeParse()},
];

export function statementNodeCollapse(context: SyntaxContext): Nothing {
  if (context.nodes.length === 0) {
    return;
  }

  let result: SyntaxParseResult = nothing;

  for (const {min, parse} of parsers) {
    if (context.nodes.length < min) {
      continue;
    }

    let index = 0;

    while ((result = parse(context, index))) {
      context.nodes.splice(result.index, result.deleteCount ?? result.node.children.length, result.node);
      index = result.index + 1;

      validate(context, result.node);

      if (index >= context.nodes.length || context.nodes.length < min) {
        break;
      }
    }
  }
}

function validate(context: SyntaxContext, node: Node): Nothing {
  const parentDeclaration = context.parentStatement?.item;

  if (isTypeDeclarationNode(parentDeclaration)) {
    if (parentDeclaration.assign?.value) {
      context.issueManager.addError(node.range, ISSUE_MESSAGE.shouldNotBeBody());

      return;
    }

    if (!is<DeclarationNode>(node, $Node.DECLARATION)) {
      context.issueManager.addError(node.range, ISSUE_MESSAGE.shouldBeDeclarationStatement());

      return;
    }

    if (!parentDeclaration.attributes) {
      parentDeclaration.attributes = [];
    }

    parentDeclaration.attributes.push(node);
  }
}
