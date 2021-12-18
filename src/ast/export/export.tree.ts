import { ExportContext } from '../../grammar/xon-parser';
import { Node } from '../node';

export class ExportTree extends Node {
  path: string;

  constructor(public ctx: ExportContext) {
    super();

    this.path = ctx.libraryPath().text;
  }

  toString(): string {
    return `export ${this.path}`;
  }
}
