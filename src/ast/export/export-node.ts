import { ExportContext } from '../../grammar/xon-parser';
import { Node } from '../node';

export class ExportNode extends Node {
  path: string;

  constructor(public ctx: ExportContext) {
    super();

    // todo check if it is member expr
    this.path = ctx._path.text;
  }

  toString(): string {
    return `export ${this.path}`;
  }
}
