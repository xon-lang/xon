import {Nothing, String2} from '../../../lib/core';
import {SourceRange} from '../../../source/source-range';
import {$Node, Node, is} from '../node';

export interface TokenNode extends Node {
  text: String2;
}

export function tokenNode<T extends $Node>($: T, range: SourceRange, text: String2): TokenNode & {$: T} {
  return {
    $,
    range,
    text,
    // todo move hiddenNodes to node initializer
    hiddenNodes: [],
  };
}

export function isToken(node: {$?: $Node} | Nothing): node is TokenNode {
  if (node) {
    return 'text' in node;
  }

  return false;
}

const HIDDEN_TOKENS: $Node[] = [$Node.WHITESPACE, $Node.JOINING, $Node.COMMENT_LINE, $Node.COMMENT_BLOCK];

export function isHiddenToken(node: {$?: $Node} | Nothing): node is TokenNode {
  if (node) {
    return HIDDEN_TOKENS.some((x) => is(node, x));
  }

  return false;
}
