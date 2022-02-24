import { SourceTree } from '../../../tree/source/source-tree';
import { SourceTranslator } from './source-translator';

export const getSourceTranslator = (tree: SourceTree): SourceTranslator => {
  if (tree === undefined) return undefined;

  return new SourceTranslator(tree);
};
