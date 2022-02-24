import { IdTree } from '../../../tree/id/id-tree';
import { IdTranslator } from './id-translator';

export const getIdTranslator = (tree: IdTree): IdTranslator => {
  if (tree === undefined) return undefined;

  return new IdTranslator(tree);
};
