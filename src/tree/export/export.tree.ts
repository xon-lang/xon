import { ExportContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';

export class ExportTree extends BaseTree {
  path: string;

  constructor(public ctx?: ExportContext) {
    super();
    if (!ctx) return;

    this.path = ctx.libraryPath().text;
  }

  toString(): string {
    return `export ${this.path}`;
  }
}
