import { Node } from '../node';

export function nodeToPlain(node: Node): unknown {
  const entries = Object.entries(node)
    .filter(([k, v]) => typeof v !== 'function' && v !== null && v !== undefined && k !== 'ctx')
    .map(([k, v]) => {
      if (Array.isArray(v)) return [k, v.map(nodeToJson)];
      if (typeof v === 'object') return [k, nodeToJson(v)];
      return [k, v];
    });

  const nodeType = node.constructor.name.replace(/Node$/, '');
  return { nodeType, ...Object.fromEntries(entries) };
}

export function nodeToJson(node: Node): string {
  const tabWidth = 2;
  console.log(nodeToPlain(node));

  return JSON.stringify(nodeToPlain(node), null, tabWidth);
}
