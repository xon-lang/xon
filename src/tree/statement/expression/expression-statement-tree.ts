// this code was generated

import { ExpressionStatementContext } from '../../../grammar/xon-parser'
import { String } from '../../../lib/core'
import { SourceRange } from '../../../util/source-range'
import { getExpressionTree } from '../../expression/expression-tree-helper'
import { ExpressionTree } from '../../expression/expression-tree'
import { StatementTree } from '../statement-tree'

export class ExpressionStatementTree extends StatementTree {
  sourceRange: SourceRange
  expression: ExpressionTree

  constructor(ctx: ExpressionStatementContext) {
    super()
    this.sourceRange = SourceRange.fromContext(ctx)
    this.expression = getExpressionTree(ctx.expression())
    this.addChildren(this.expression)
  }

  toString(): String {
    return this.expression.toString()
  }
}

// this code was generated
