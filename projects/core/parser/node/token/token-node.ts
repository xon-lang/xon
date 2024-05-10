import {Anything, Array2, Nothing, String2} from '../../../lib/core';
import {TextRange} from '../../../util/resource/text/text-range';
import {$Node, Node, is} from '../node';

export interface TokenNode extends Node {
  text: String2;
}

// todo simplify it
export function tokenNode<T extends Record<String2, Anything>, V extends $Node>(
  $: V,
  params: T & {range: TextRange; text: String2},
): TokenNode & {$: typeof $} & T {
  return {
    $,
    hiddenNodes: [],
    ...params,
  };
}

export function isToken(node: {$?: $Node} | Nothing): node is TokenNode {
  if (node) {
    return 'text' in node;
  }

  return false;
}

const HIDDEN_TOKENS: Array2<$Node> = [
  $Node.NL,
  $Node.WHITESPACE,
  $Node.JOINING,
  $Node.COMMENT_LINE,
  $Node.COMMENT_BLOCK,
];

export function isHiddenToken(node: {$?: $Node} | Nothing): node is TokenNode {
  if (node) {
    return HIDDEN_TOKENS.some((x) => is(node, x));
  }

  return false;
}
