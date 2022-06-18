import { Token } from 'antlr4ts';
import { none, None } from '../../lib/core';
import { IdTree } from './id-tree';

export function getIdTree(token: Token | None): IdTree {
  if (!token) return none;
  return new IdTree(token);
}
