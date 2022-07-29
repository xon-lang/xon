import { String } from '../lib/core';
import { Tree } from '../tree/tree';

export function treeToPlain(tree: Tree): unknown {
  const entries = Object.entries(tree)
    .filter(([k, v]) => typeof v !== 'function' && v !== null && v !== undefined && k !== 'ctx')
    .map(([k, v]) => {
      if (Array.isArray(v)) return [k, v.map(treeToJson)];
      if (typeof v === 'object') return [k, treeToJson(v)];
      return [k, v];
    });

  const treeType = tree.constructor.name.replace(/tree$/, '');
  return { treeType, ...Object.fromEntries(entries) };
}

export function treeToJson(tree: Tree): String {
  const tabWidth = 2;
  return JSON.stringify(treeToPlain(tree), null, tabWidth);
}
