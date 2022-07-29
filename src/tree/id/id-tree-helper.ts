import { Token } from 'antlr4ts';
import { IdTree } from './id-tree';

export function getIdTree(token?: Token | null): IdTree {
  if (!token) return null;

  return new IdTree(token);
}
