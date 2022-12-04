import { BodyValueContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { BodyTree } from '~/tree/body/body-tree';
import { ValueTree } from '~/tree/value/value-tree';

export class BodyValueTree extends ValueTree {
  ctx: BodyValueContext;
  body: BodyTree;

  constructor(ctx: BodyValueContext) {
    super();
    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    this.body = BodyTree.fromContext(ctx.body());

    this.addChildren(this.body);
  }
}
