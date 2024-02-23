import { String2 } from '../lib/core';
import { ArrayNode } from '../syntax/node/array/array-node';
import { $Node, TokenNode } from '../syntax/node/node';
import { StatementNode } from '../syntax/node/statement/statement-node';
import { NL } from '../syntax/syntax-config';
import { SyntaxResult } from '../syntax/syntax-result';
import { is } from '../syntax/util/is';

function syntaxFormat(syntax: SyntaxResult) {
  const nodes = syntax.statements.map((x) => statementFormat(x));
  return nodes.join(NL);
}

function statementFormat(statement: StatementNode): String2 {
  const node = statement.item;
  const tokens = [$Node.CHAR, $Node.COMMA, $Node.ID, $Node.INTEGER, $Node.OPERATOR, $Node.STRING];

  if (tokens.some((x) => is(node, x))) {
    return tokenFormat(node as TokenNode);
  }

  if (is<ArrayNode>(node, $Node.ARRAY)) {
    return arrayFormat(node);
  }

  throw new Error(`Not implemented for ${node.$}`);
}

function tokenFormat(node: TokenNode) {
  return node.text;
}

function arrayFormat(node: ArrayNode) {
  return node.text;
}
