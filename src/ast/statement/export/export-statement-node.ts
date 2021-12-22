import { ExportStatementContext } from '../../../grammar/xon-parser';
import { Node } from '../../node';

export class ExportStatementNode extends Node {
  path: string;

  constructor(public ctx: ExportStatementContext) {
    super();

    // todo check if it is member expr
    this.path = ctx._path.text;
  }

  toString(): string {
    return `export ${this.path}`;
  }
}
