import { Nothing, String2 } from '../../lib/core';
import { Semantic } from '../../semantic/semantic';
import { SourceRange } from '../../source/source-range';

export interface Node {
  readonly $: $Node;
  range: SourceRange;
  semantic?: Semantic | Nothing;
}

export interface TokenNode extends Node {
  // todo remove it and get from range field to optimize memory
  text: String2;
}

export interface SyntaxNode extends Node {
  readonly children: Node[];
}

// todo merge with rangeFromNodes ???
export function addNodeParent(parent: SyntaxNode, ...children: (Node | Nothing)[]): void {
  for (const node of children) {
    if (!node) {
      continue;
    }

    parent.children.push(node);
  }
}

export function isSyntaxNode(node: Node): node is SyntaxNode {
  return 'children' in node;
}

export enum $Node {
  COMMENT = 'COMMENT',
  WHITESPACE = 'WHITESPACE',
  JOINING = 'JOINING',
  NL = 'NL',

  INTEGER = 'INTEGER',
  FLOAT = 'FLOAT',
  CHAR = 'CHAR',
  STRING = 'STRING',

  OPERATOR = 'OPERATOR',
  OPEN = 'OPEN',
  CLOSE = 'CLOSE',
  COMMA = 'COMMA',

  ID = 'ID',
  OBJECT = 'OBJECT',
  ARRAY = 'ARRAY',
  GROUP = 'GROUP',

  INVOKE = 'INVOKE',
  INFIX = 'INFIX',
  POSTFIX = 'POSTFIX',
  PREFIX = 'PREFIX',

  DECLARATION = 'DECLARATION',
  DECLARATION_LIST = 'DECLARATION_LIST',
  STATEMENT = 'STATEMENT',
  UNKNOWN = 'UNKNOWN',
}
