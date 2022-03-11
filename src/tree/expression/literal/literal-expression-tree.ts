// this code was generated

import { LiteralExpressionContext } from '../../../grammar/xon-parser'
import { String } from '../../../lib/core'
import { LiteralExpressionMetadata } from '../../../metadata/expression/literal/literal-expression-metadata'
import { SourceRange } from '../../../util/source-range'
import { getLiteralTree } from '../../literal/literal-tree-helper'
import { LiteralTree } from '../../literal/literal-tree'
import { ExpressionTree } from '../expression-tree'

export class LiteralExpressionTree extends ExpressionTree {
  metadata: LiteralExpressionMetadata
  ctx: LiteralExpressionContext
  sourceRange: SourceRange
  literal: LiteralTree

  constructor(ctx: LiteralExpressionContext) {
    super()
    this.ctx = ctx
    this.sourceRange = SourceRange.fromContext(ctx)
    this.literal = ctx && getLiteralTree(ctx.literal())
  }

  toString(): String {
    return this.literal.sourceRange.rangeText
  }
}

// this code was generated
