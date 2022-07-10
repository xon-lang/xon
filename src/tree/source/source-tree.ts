// this code was generated

import { SourceContext } from '../../grammar/xon-parser';
import { None } from '../../lib/core';
import { SourceMetadata } from '../../metadata/source/source-metadata';
import { SourceRange } from '../../util/source-range';
import { StatementTree } from '../statement/statement-tree';
import { getStatementTree, getStatementTrees } from '../statement/statement-tree-helper';
import { Tree } from '../tree';

export class SourceTree extends Tree {
  metadata: SourceMetadata;
  ctx: SourceContext | None;
  sourceRange: SourceRange;
  statements: StatementTree[] = [];

  constructor(ctx?: SourceContext) {
    super();
    if (!ctx) {
      return;
    }
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.statements = [
      ...getStatementTrees(ctx.sourceItem().map((x) => x.statement())),
      getStatementTree(ctx.statement()),
    ];
    this.addChildren(...this.statements);
  }
}

// this code was generated
