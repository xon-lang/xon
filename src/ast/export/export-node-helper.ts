import { ExportContext } from '../../grammar/xon-parser';
import { ExportNode } from './export-node';

export const getExportTree = (ctx: ExportContext): ExportNode => {
  if (ctx === undefined) return undefined;
  return new ExportNode(ctx);
};

export const getExportsTrees = (contexts: ExportContext[]): ExportNode[] =>
  contexts?.map(getExportTree) || [];
