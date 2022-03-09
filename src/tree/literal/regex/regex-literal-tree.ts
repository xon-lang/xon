import { RegexLiteralContext } from '../../../grammar/xon-parser';
import { SourceRange } from '../../../util/source-range';
import { LiteralTree } from '../literal-tree';

export class RegexLiteralTree implements LiteralTree {
  sourceReference: SourceRange;
  value: RegExp;
  pattern: string;

  constructor(ctx: RegexLiteralContext) {
    this.sourceReference = SourceRange.fromContext(ctx);
    this.pattern = ctx.text.slice(1, -1).replace(/\\\//g, '/');
    this.value = new RegExp(this.pattern, 'g');
  }
}
