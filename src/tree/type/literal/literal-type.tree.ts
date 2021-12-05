import { LiteralTypeContext } from '../../../grammar/xon-parser';
import { LiteralTypeMetadata } from '../../../metadata/type/literal/literal-type-metadata';
import { getLiteralTree } from '../../literal/literal-tree.helper';
import { LiteralTree } from '../../literal/literal.tree';
import { TypeTree } from '../type.tree';

export class LiteralTypeTree extends TypeTree {
  metadata: LiteralTypeMetadata;
  literal: LiteralTree;

  constructor(public ctx: LiteralTypeContext) {
    super();

    this.literal = getLiteralTree(ctx.literal());
  }

  toString(): string {
    return this.literal.toString();
  }
}
