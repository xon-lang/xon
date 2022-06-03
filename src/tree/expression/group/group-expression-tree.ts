// this code was generated

import { GroupExpressionContext } from '../../../grammar/xon-parser'
import { String } from '../../../lib/core'
import { ExpressionMetadata } from '../../../metadata/value/expression-metadata'
import { SourceRange } from '../../../util/source-range'
import { getExpressionTree } from '../expression-tree-helper'
import { ExpressionTree } from '../expression-tree'

export class GroupExpressionTree extends ExpressionTree {
  metadata: ExpressionMetadata
  ctx: GroupExpressionContext
  sourceRange: SourceRange
  expression: ExpressionTree

  constructor(ctx: GroupExpressionContext) {
    super()
    this.ctx = ctx
    this.sourceRange = SourceRange.fromContext(ctx)
    this.expression = getExpressionTree(ctx.expression())
  }

  toString(): String {
    return `(${this.expression})`
  }
}

// this code was generated
