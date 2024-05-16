import {Anything, Array2, Nothing, String2} from '../../../../lib/types';
import {$Node, Node, is} from '../node';

export interface TokenNode extends Node {
  text: String2;
}

export function tokenNode<T extends TokenNode & Record<String2, Anything>>(params: T): T {
  return params;
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
