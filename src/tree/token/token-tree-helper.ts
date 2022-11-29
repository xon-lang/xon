import { Token } from 'antlr4ts';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { TokenTree } from '~/tree/token/token-tree';

export function getTokenTree(token: Token | TerminalNode): TokenTree {
  return new TokenTree(token);
}
