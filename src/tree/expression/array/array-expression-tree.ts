// this code was generated

import { ArrayExpressionContext } from '../../../grammar/xon-parser'
import { String } from '../../../lib/core'
import { ArrayExpressionMetadata } from '../../../metadata/expression/array/array-expression-metadata'
import { SourceRange } from '../../../util/source-range'
import { getExpressionTrees } from '../expression-tree-helper'
import { ExpressionTree } from '../expression-tree'

export class ArrayExpressionTree extends ExpressionTree {
  metadata: ArrayExpressionMetadata
  ctx: ArrayExpressionContext
  sourceRange: SourceRange
  items: ExpressionTree[]

  constructor(ctx: ArrayExpressionContext) {
    super()
    this.ctx = ctx
    this.sourceRange = SourceRange.fromContext(ctx)
    this.items = getExpressionTrees(ctx.parameters().parameter().map((x) => x._name))
  }

  toString(): String {
    return `[${this.items.join(', ')}]`
  }
}

// this code was generated
