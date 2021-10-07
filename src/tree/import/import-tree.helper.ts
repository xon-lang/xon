import { LibraryContext } from '../../grammar/xon-parser';
import { ImportTree } from './import.tree';

export const getImportTree = (ctx: LibraryContext): ImportTree => {
  if (ctx === undefined) return undefined;
  return new ImportTree(ctx);
};

export const getLibrariesTrees = (definitions: LibraryContext[]): ImportTree[] =>
  definitions?.map(getImportTree) || [];
