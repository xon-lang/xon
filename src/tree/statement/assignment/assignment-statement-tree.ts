// this code was generated

import { AssignmentStatementContext } from '../../../grammar/xon-parser'
import { String } from '../../../lib/core'
import { IdToken } from '../../../util/id-token'
import { SourceRange } from '../../../util/source-range'
import { getBodyTree } from '../../body/body-tree-helper'
import { BodyTree } from '../../body/body-tree'
import { getExpressionTree } from '../../expression/expression-tree-helper'
import { ExpressionTree } from '../../expression/expression-tree'
import { StatementTree } from '../statement-tree'

export class AssignmentStatementTree extends StatementTree {
  ctx: AssignmentStatementContext
  sourceRange: SourceRange
  modifier: IdToken
  variable: ExpressionTree
  body: BodyTree

  constructor(ctx: AssignmentStatementContext) {
    super()
    this.ctx = ctx
    this.sourceRange = SourceRange.fromContext(ctx)
    this.modifier = new IdToken(ctx._modifier)
    this.variable = getExpressionTree(ctx.expr())
    this.body = getBodyTree(ctx.body())
  }

  toString(): String {
    let modifier
    modifier = this.modifier && this.modifier + ' ' || ''
    return `${modifier}${this.variable}${this.body}`
  }
}

// this code was generated
