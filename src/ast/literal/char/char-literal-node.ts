import { CharLiteralContext } from '../../../grammar/xon-parser';
import { SourceReference } from '../../util/source-reference';
import { LiteralNode } from '../literal-node';

export class CharLiteralNode implements LiteralNode {
  sourceReference: SourceReference;
  value: string;

  constructor(ctx: CharLiteralContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    const STRING_START = 1;
    const STRING_END = -1;
    this.value = ctx.text.slice(STRING_START, STRING_END).replace(/\\'/g, "'");
  }

  toString(): string {
    return `'${this.value}'`;
  }
}
