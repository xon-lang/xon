import { String } from '@lib/core';
import { SourceRange } from '../util/source-range';

export class Tree {
  sourceRange: SourceRange;

  toString(): String {
    throw new Error('Not implemented');
  }
}
