// this code was generated

import { IfStatementContext } from '../../../grammar/xon-parser'
import { None, String } from '../../../lib/core'
import { SourceRange } from '../../../util/source-range'
import { getExpressionTree } from '../../expression/expression-tree-helper'
import { ExpressionTree } from '../../expression/expression-tree'
import { StatementTree } from '../statement-tree'
import { getSourceTree } from '../../source/source-tree-helper'
import { SourceTree } from '../../source/source-tree'

export class IfStatementTree extends StatementTree {
  ctx: IfStatementContext
  sourceRange: SourceRange
  condition: ExpressionTree
  thenBody: SourceTree
  elseBody?: SourceTree | None

  constructor(ctx: IfStatementContext) {
    super()
    this.ctx = ctx
    this.sourceRange = SourceRange.fromContext(ctx)
    this.condition = getExpressionTree(ctx.expression())
    this.thenBody = getSourceTree(ctx._thenBody.source())
    this.elseBody = getSourceTree(ctx._elseBody?.source())
    this.addChildren(this.condition, this.thenBody, this.elseBody);
  }

  toString(): String {
    return `if ${this.condition}${this.thenBody}${(this.elseBody && '\nelse' + this.elseBody) || ''}`
  }
}

// this code was generated
