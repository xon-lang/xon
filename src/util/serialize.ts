import { String2, Unknown2 } from '~/lib/core';
import { Tree } from '~/tree/tree';

export function treeToPlain(tree: Tree): Unknown2 {
  const entries = Object.entries(tree)
    .filter(([k, v]) => typeof v !== 'function' && typeof v !== 'undefined' && v !== null && k !== 'ctx')
    .map(([k, v]) => {
      if (Array.isArray(v)) return [k, v.map(treeToPlain)];
      if (typeof v === 'object') return [k, treeToPlain(v)];
      return [k, v];
    });

  const treeType = tree.constructor.name.replace(/tree$/u, '');
  return { treeType,
    ...Object.fromEntries(entries) };
}

export function treeToJson(tree: Tree): String2 {
  const tabWidth = 2;
  return JSON.stringify(treeToPlain(tree), null, tabWidth);
}
