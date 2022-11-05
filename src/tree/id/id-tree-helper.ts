import { IdTree } from '@/tree/id/id-tree';
import { Token } from 'antlr4ts';

export function getIdTree(token?: Token | null): IdTree {
  if (!token) return null;

  return new IdTree(token);
}
