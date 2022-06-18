import { None, String } from '../lib/core';
import { SourceRange } from '../util/source-range';

export class Tree {
  sourceRange: SourceRange;
  children: Tree[] = [];

  addChildren(...children: (Tree | None)[]) {
    children.filter((x) => x?.sourceRange).forEach((x) => this.children.push(x));
  }

  toString(): String {
    throw new Error('Not implemented');
  }
}
