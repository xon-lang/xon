import { Nothing, String2 } from '../../../lib/core';
import { SourceRange } from '../../../source/source-range';
import { $Node, Node, is } from '../node';
import { CommentLineNode } from './comment/comment-line-node';
import { JoiningNode } from './joining/joining-node';
import { WhitespaceNode } from './whitespace/whitespace-node';

export type HiddenNode = WhitespaceNode | JoiningNode | CommentLineNode;

export interface TokenNode extends Node {
  text: String2;
  hiddenNodes: HiddenNode[];
}

export function tokenNode<T extends $Node>($: T, range: SourceRange, text: String2): TokenNode & { $: T } {
  return {
    $,
    range,
    text,
    hiddenNodes: [],
  };
}

export function isToken(node: { $?: $Node } | Nothing): node is TokenNode {
  if (node) {
    return 'text' in node;
  }

  return false;
}

const HIDDEN_NODES: $Node[] = [$Node.WHITESPACE, $Node.JOINING, $Node.COMMENT_LINE, $Node.COMMENT_BLOCK];

export function isHiddenNode(node: { $?: $Node } | Nothing): node is HiddenNode {
  if (node) {
    return HIDDEN_NODES.some((x) => is(node, x));
  }

  return false;
}
