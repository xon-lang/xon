import { none } from '../../../lib/core';
import { SourceTree } from '../../../tree/source/source-tree';
import { SourceTranslator } from './source-translator';

export const getSourceTranslator = (tree: SourceTree): SourceTranslator => {
  if (!tree) return none;

  return new SourceTranslator(tree);
};
