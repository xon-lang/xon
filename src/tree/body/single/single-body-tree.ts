// this code was generated

import { SingleBodyContext } from '../../../grammar/xon-parser'
import { SourceRange } from '../../../util/source-range'
import { BodyTree } from '../body-tree'
import { ExpressionTree } from '../../expression/expression-tree'
import { getExpressionTree } from '../../expression/expression-tree-helper'

export class SingleBodyTree extends BodyTree {
  ctx: SingleBodyContext
  sourceRange: SourceRange
  expression: ExpressionTree

  constructor(ctx: SingleBodyContext) {
    super()
    this.ctx = ctx
    this.sourceRange = SourceRange.fromContext(ctx)
    this.expression = getExpressionTree(ctx.expression())
  }

  toString() {
    return ` = ${this.expression}`
  }
}

// this code was generated
