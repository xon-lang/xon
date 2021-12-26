import { CharLiteralContext } from '../../../grammar/xon-parser';
import { SourceReference } from '../../util/source-reference';
import { LiteralTree } from '../literal-tree';

export class CharLiteralTree implements LiteralTree {
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
