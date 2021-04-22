import { LibraryContext } from '../../grammar/xon-parser';
import { LibraryTree } from './library.tree';

export const getLibraryTree = (ctx: LibraryContext): LibraryTree => {
  if (ctx === undefined) return undefined;
  return new LibraryTree(ctx);
};

export const getLibrariesTrees = (definitions: LibraryContext[]): LibraryTree[] =>
  definitions?.map(getLibraryTree) || [];
