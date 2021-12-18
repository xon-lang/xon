import { LibraryContext } from '../../grammar/xon-parser';
import { ImportNode } from './import-node';

export const getImportTree = (ctx: LibraryContext): ImportNode => {
  if (ctx === undefined) return undefined;
  return new ImportNode(ctx);
};

export const getImportsTrees = (contexts: LibraryContext[]): ImportNode[] =>
  contexts?.map(getImportTree) || [];
