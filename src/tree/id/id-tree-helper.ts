import { Token } from 'antlr4ts';
import { IdTree } from '~/tree';

export function getIdTree(token?: Token | null): IdTree {
  if (!token) return null;

  return new IdTree(token);
}
