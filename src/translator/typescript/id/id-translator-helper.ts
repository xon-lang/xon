import { IdTree } from '../../../tree/id/id-tree';
import { IdTranslator } from './id-translator';

export const getIdTranslator = (tree: IdTree, useModifier = false): IdTranslator => {
  if (tree === undefined) return undefined;

  return new IdTranslator(tree, useModifier);
};
