// this code was generated

import { OperatorStatementContext } from '../../../grammar/xon-parser';
import { None, String } from '../../../lib/core';
import { SourceRange } from '../../../util/source-range';
import { BodyTree } from '../../body/body-tree';
import { getBodyTree } from '../../body/body-tree-helper';
import { ExpressionTree } from '../../expression/expression-tree';
import { getExpressionTree } from '../../expression/expression-tree-helper';
import { getIdTree } from '../../id/id-tree-helper';
import { IdTree } from '../../id/id-tree';
import { StatementTree } from '../statement-tree';

export class OperatorStatementTree extends StatementTree {
  ctx: OperatorStatementContext;
  sourceRange: SourceRange;
  name: IdTree;
  type?: ExpressionTree | None;
  body?: BodyTree | None;

  constructor(ctx: OperatorStatementContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.name = getIdTree(ctx._name);
    this.type = getExpressionTree(ctx._type);
    this.body = getBodyTree(ctx.body());
    this.addChildren(this.name, this.type, this.body);
  }

  toString(): String {
    return `operator ${this.name} ${this.type}${this.body}`;
  }
}

// this code was generated
