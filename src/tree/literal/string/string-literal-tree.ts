import { StringLiteralContext } from '../../../grammar/xon-parser';
import { SourceReference } from '../../../util/source-reference';
import { LiteralTree } from '../literal-tree';

export class StringLiteralTree implements LiteralTree {
  sourceReference: SourceReference;
  value: string;

  constructor(ctx: StringLiteralContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.value = ctx.text.slice(1, -1).replace(/\\'/g, "'");
  }
}
