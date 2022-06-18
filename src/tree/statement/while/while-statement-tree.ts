// this code was generated

import { WhileStatementContext } from '../../../grammar/xon-parser'
import { String } from '../../../lib/core'
import { SourceRange } from '../../../util/source-range'
import { getBodyTree } from '../../body/body-tree-helper'
import { BodyTree } from '../../body/body-tree'
import { getExpressionTree } from '../../expression/expression-tree-helper'
import { ExpressionTree } from '../../expression/expression-tree'
import { StatementTree } from '../statement-tree'

export class WhileStatementTree extends StatementTree {
  ctx: WhileStatementContext
  sourceRange: SourceRange
  expression: ExpressionTree
  body: BodyTree

  constructor(ctx: WhileStatementContext) {
    super()
    this.ctx = ctx
    this.sourceRange = SourceRange.fromContext(ctx)
    this.expression = getExpressionTree(ctx.expression())
    this.body = getBodyTree(ctx.body())
    this.addChildren(this.expression, this.body);
  }

  toString(): String {
    return `while ${this.expression}${this.body}`
  }
}

// this code was generated
