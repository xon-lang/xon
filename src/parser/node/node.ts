import { Nothing } from '../../lib/core';
import { Semantic } from '../../semantic/semantic';
import { SourceRange } from '../../source/source-range';
import { CommentLineNode } from './token/comment/comment-line-node';
import { JoiningNode } from './token/joining/joining-node';
import { WhitespaceNode } from './token/whitespace/whitespace-node';

export interface Node {
  readonly $: $Node;
  range: SourceRange;
  hiddenNodes: HiddenNode[];
  semantic?: Semantic | Nothing;
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

export function is<T extends Node = Node>(node: { $?: $Node } | Nothing, nodeType: $Node): node is T {
  return node?.$ === nodeType;
}

export type HiddenNode = WhitespaceNode | JoiningNode | CommentLineNode;

const HIDDEN_NODES: $Node[] = [$Node.WHITESPACE, $Node.JOINING, $Node.COMMENT_LINE, $Node.COMMENT_BLOCK];

export function isHiddenNode(node: { $?: $Node } | Nothing): node is HiddenNode {
  if (node) {
    return HIDDEN_NODES.some((x) => is(node, x));
  }

  return false;
}
