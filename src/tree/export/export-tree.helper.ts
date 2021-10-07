import { ExportContext } from '../../grammar/xon-parser';
import { ExportTree } from './export.tree';

export const getExportTree = (ctx: ExportContext): ExportTree => {
  if (ctx === undefined) return undefined;
  return new ExportTree(ctx);
};

export const getLibrariesTrees = (definitions: ExportContext[]): ExportTree[] =>
  definitions?.map(getExportTree) || [];
