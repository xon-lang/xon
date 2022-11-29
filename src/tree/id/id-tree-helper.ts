import { Token } from 'antlr4ts';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { IdTree } from '~/tree/id/id-tree';

export function getIdTree(token: Token | TerminalNode): IdTree {
  return new IdTree(token);
}
