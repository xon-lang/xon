import {Anything, Array2, Nothing, String2} from '../../../../lib/types';
import {$Node, Node, is} from '../node';

export type TokenNode<T extends $Node = $Node> = Node<T> & {
  text: String2;
};

export function tokenNode<T extends TokenNode & Record<String2, Anything>>(params: T): T {
  return params;
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
