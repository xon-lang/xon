import { RegexLiteralContext } from '../../../grammar/xon-parser';
import { String } from '../../../lib/core';
import { SourceRange } from '../../../util/source-range';
import { LiteralTree } from '../literal-tree';

export class RegexLiteralTree implements LiteralTree {
  sourceRange: SourceRange;
  value: RegExp;
  pattern: String;

  constructor(ctx: RegexLiteralContext) {
    this.sourceRange = SourceRange.fromContext(ctx);
    this.pattern = ctx.text.slice(1, -1).replace(/\\\//g, '/');
    this.value = new RegExp(this.pattern, 'g');
  }
}
