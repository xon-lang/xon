import { ExportContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';

export class ExportTree extends BaseTree {
  public path: string;

  public constructor(public ctx?: ExportContext) {
    super();
    if (!ctx) return;

    this.path = ctx.libraryPath().text;
  }

  public toString(): string {
    return `export ${this.path}`;
  }
}
