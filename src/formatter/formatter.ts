import { Nothing, String2 } from '../lib/core';
import { ArrayNode } from '../syntax/node/array/array-node';
import { CloseNode } from '../syntax/node/close/close-node';
import { GroupNode } from '../syntax/node/group/group-node';
import { InfixNode } from '../syntax/node/infix/infix-node';
import { $Node, Node, TokenNode } from '../syntax/node/node';
import { ObjectNode } from '../syntax/node/object/object-node';
import { OpenNode } from '../syntax/node/open/open-node';
import { PostfixNode } from '../syntax/node/postfix/postfix-node';
import { PrefixNode } from '../syntax/node/prefix/prefix-node';
import { StatementNode } from '../syntax/node/statement/statement-node';
import { NL } from '../syntax/syntax-config';
import { SyntaxResult } from '../syntax/syntax-result';
import { is } from '../syntax/util/is';

export function syntaxFormat(syntax: SyntaxResult) {
  const nodes = syntax.statements.map((x) => statementFormat(x));
  return nodes.join(NL);
}

function statementFormat(statement: StatementNode): String2 {
  const node = statement.item;

  return nodeFormat(node);
}

function nodeFormat(node: Node) {
  if (isToken(node)) {
    return node.text;
  }

  if (is<PrefixNode>(node, $Node.PREFIX)) {
    return prefixFormat(node);
  }

  if (is<PostfixNode>(node, $Node.POSTFIX)) {
    return postfixFormat(node);
  }

  if (is<InfixNode>(node, $Node.INFIX)) {
    return infixFormat(node);
  }

  if (is<GroupNode>(node, $Node.GROUP) || is<ArrayNode>(node, $Node.ARRAY) || is<ObjectNode>(node, $Node.OBJECT)) {
    return groupFormat(node);
  }

  throw new Error(`Not implemented for ${node.$}`);
}

function prefixFormat(node: PrefixNode) {
  const operator = node.operator.text;
  const value = node.value ? nodeFormat(node.value) : '';

  if (operator.some((x) => x.isDigitOrLetter(0))) {
    return `${operator} ${value}`;
  }

  return `${operator}${value}`;
}

function postfixFormat(node: PostfixNode) {
  const operator = node.operator.text;
  const value = node.value ? nodeFormat(node.value) : '';

  if (operator.some((x) => x.isDigitOrLetter(0))) {
    return `${value} ${operator}`;
  }

  return `${value}${operator}`;
}

function infixFormat(node: InfixNode) {
  const operator = node.operator.text;
  const left = node.left ? nodeFormat(node.left) : '';
  const right = node.right ? nodeFormat(node.right) : '';

  if (operator.some((x) => x === '.')) {
    return `${left}${operator}${right}`;
  }

  return `${left} ${operator} ${right}`;
}

function groupFormat(node: { open: OpenNode; close: CloseNode | Nothing; items: (Node | Nothing)[] }): String2 {
  const open = node.open.text;
  const close = node.close?.text ?? '';

  const items = node.items.map((x) => (x ? nodeFormat(x) : '')).join(', ');
  return `${open}${items}${close}`;
}

function isToken(node: Node): node is TokenNode {
  return 'text' in node;
}
