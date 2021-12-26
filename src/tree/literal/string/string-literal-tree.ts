import { StringLiteralContext } from '../../../grammar/xon-parser';
import { SourceReference } from '../../util/source-reference';
import { LiteralTree } from '../literal-tree';

export class StringLiteralTree implements LiteralTree {
  sourceReference: SourceReference;
  value: string;

  constructor(ctx: StringLiteralContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    const QUOTE_START = 1;
    const QUOTE_END = -1;
    this.value = ctx.text.slice(QUOTE_START, QUOTE_END).replace(/\\"/g, '"');
  }

  toString(): string {
    return `"${this.value}"`;
  }
}
