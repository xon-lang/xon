import { StringLiteralContext } from '../../../grammar/xon-parser';
import { String } from '../../../lib/core';
import { SourceRange } from '../../../util/source-range';
import { LiteralTree } from '../literal-tree';

export class StringLiteralTree implements LiteralTree {
  sourceRange: SourceRange;
  value: String;

  constructor(ctx: StringLiteralContext) {
    this.sourceRange = SourceRange.fromContext(ctx);
    this.value = ctx.text.slice(1, -1).replace(/\\'/g, "'");
  }
}
