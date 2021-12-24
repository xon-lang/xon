import { StringLiteralContext } from '../../../grammar/xon-parser';
import { SourceReference } from '../../util/source-reference';
import { LiteralNode } from '../literal-node';

export class StringLiteralNode implements LiteralNode {
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
