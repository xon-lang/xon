// this code was generated

import { IfStatementContext } from '../../../grammar/xon-parser'
import { String, None } from '../../../lib/core'
import { SourceRange } from '../../../util/source-range'
import { getBodyTree } from '../../body/body-tree-helper'
import { BodyTree } from '../../body/body-tree'
import { getExpressionTree } from '../../expression/expression-tree-helper'
import { ExpressionTree } from '../../expression/expression-tree'
import { StatementTree } from '../statement-tree'

export class IfStatementTree extends StatementTree {
  ctx: IfStatementContext
  sourceRange: SourceRange
  condition: ExpressionTree
  thenBody: BodyTree
  elseBody?: (BodyTree | None)

  constructor(ctx: IfStatementContext) {
    super()
    this.ctx = ctx
    this.sourceRange = SourceRange.fromContext(ctx)
    this.condition = getExpressionTree(ctx.expr())
    this.thenBody = getBodyTree(ctx._thenBody)
    this.elseBody = getBodyTree(ctx._elseBody)
  }

  toString(): String {
    return `if ${this.condition}${this.thenBody}${(this.elseBody && '\nelse' + this.elseBody) || ''}`
  }
}

// this code was generated
