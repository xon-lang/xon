// this code was generated

import { AssignmentStatementContext } from '../../../grammar/xon-parser'
import { String } from '../../../lib/core'
import { SourceRange } from '../../../util/source-range'
import { getExpressionTree } from '../../expression/expression-tree-helper'
import { ExpressionTree } from '../../expression/expression-tree'
import { StatementTree } from '../statement-tree'

export class AssignmentStatementTree extends StatementTree {
  ctx: AssignmentStatementContext
  sourceRange: SourceRange
  variable: ExpressionTree
  value: ExpressionTree

  constructor(ctx: AssignmentStatementContext) {
    super()
    this.ctx = ctx
    this.sourceRange = SourceRange.fromContext(ctx)
    this.variable = getExpressionTree(ctx.expr(0))
    this.value = getExpressionTree(ctx.expr(1))
  }

  toString(): String {
    return `${this.variable} = ${this.value}`
  }
}

// this code was generated
