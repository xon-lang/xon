import { Token } from 'antlr4ts';
import { IdTree } from '~/tree/id/id-tree';

export function getIdTree(token: Token): IdTree {
  return new IdTree(token);
}
