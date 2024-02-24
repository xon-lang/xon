import { TokenNode } from 'src/parser/node/token/token-node';
import { Nothing, String2 } from '../lib/core';
import { $Node, Node } from '../parser/node/node';
import { ArrayNode } from '../parser/node/syntax/array/array-node';
import { GroupNode } from '../parser/node/syntax/group/group-node';
import { InfixNode } from '../parser/node/syntax/infix/infix-node';
import { ObjectNode } from '../parser/node/syntax/object/object-node';
import { PostfixNode } from '../parser/node/syntax/postfix/postfix-node';
import { PrefixNode } from '../parser/node/syntax/prefix/prefix-node';
import { StatementNode } from '../parser/node/syntax/statement/statement-node';
import { CloseNode } from '../parser/node/token/close/close-node';
import { OpenNode } from '../parser/node/token/open/open-node';
import { NL } from '../parser/syntax-config';
import { SyntaxResult } from '../parser/syntax-result';
import { is } from '../parser/util/is';

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
