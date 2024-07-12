import {$, is} from '../../../$';
import {Array2, Integer, Nothing, nothing} from '../../../../lib/types';
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
} from '../../lexical/lexical-analyzer-config';
import {Node} from '../../node';
import {assignmentNodeParse} from '../node/assignment/assignment-node-parse';
import {declarationNodeParse, isTypeDeclarationNode} from '../node/declaration/declaration-node-parse';
import {importNodeParse} from '../node/import/import-node-parse';
import {infixNodeParse} from '../node/infix/infix-node-parse';
import {invokeNodeParse} from '../node/invoke/invoke-node-parse';
import {lambdaNodeParse} from '../node/lambda/lambda-node-parse';
import {memberNodeParse} from '../node/member/member-node-parse';
import {postfixNodeParse} from '../node/postfix/postfix-node-parse';
import {prefixNodeParse} from '../node/prefix/prefix-node-parse';
import {SyntaxNode} from '../node/syntax-node';
import {SyntaxAnalyzer} from '../syntax-analyzer';
import {StatementNode} from './statement-node';

export type SyntaxParseResult = {index: Integer; deleteCount?: Integer; node: SyntaxNode} | Nothing;
export type SyntaxParseFn = (
  analyzer: SyntaxAnalyzer,
  nodes: Array2<Node>,
  startIndex: Integer,
  parentStatement: StatementNode | Nothing,
) => SyntaxParseResult;

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

export function statementNodeCollapse(
  analyzer: SyntaxAnalyzer,
  parentStatement: StatementNode | Nothing,
  nodes: Node[],
): void {
  if (nodes.length === 0) {
    return;
  }

  let result: SyntaxParseResult = nothing;

  for (const {min, parse} of parsers) {
    if (nodes.length < min) {
      continue;
    }

    let index = 0;

    while ((result = parse(analyzer, nodes, index, parentStatement))) {
      nodes.splice(result.index, result.deleteCount ?? result.node.children.length, result.node);
      index = result.index + 1;

      validate(analyzer, parentStatement, result.node);

      if (index >= nodes.length || nodes.length < min) {
        break;
      }
    }
  }
}

function validate(analyzer: SyntaxAnalyzer, parentStatement: StatementNode | Nothing, node: Node): void {
  const parentDeclaration = parentStatement?.value;

  if (isTypeDeclarationNode(parentDeclaration)) {
    if (parentDeclaration.assign?.value) {
      analyzer.diagnosticManager.addPredefinedDiagnostic(node.range, (x) => x.shouldNotBeBody());

      return;
    }

    if (!is(node, $.DeclarationNode)) {
      analyzer.diagnosticManager.addPredefinedDiagnostic(node.range, (x) => x.shouldBeDeclarationStatement());

      return;
    }

    if (!parentDeclaration.attributes) {
      parentDeclaration.attributes = [];
    }

    parentDeclaration.attributes.push(node);
  }
}
