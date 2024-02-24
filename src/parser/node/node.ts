import { Nothing } from '../../lib/core';
import { Semantic } from '../../semantic/semantic';
import { SourceRange } from '../../source/source-range';
import { SyntaxNode } from './syntax/syntax-node';

export interface Node {
  readonly $: $Node;
  range: SourceRange;
  semantic?: Semantic | Nothing;
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

export enum $Node {
  COMMENT_LINE = 'COMMENT_LINE',
  COMMENT_BLOCK = 'COMMENT_BLOCK',
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
