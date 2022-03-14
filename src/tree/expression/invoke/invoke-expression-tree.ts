// this code was generated

import { InvokeExpressionContext } from '../../../grammar/xon-parser'
import { String } from '../../../lib/core'
import { ExpressionMetadata } from '../../../metadata/expression/expression-metadata'
import { SourceRange } from '../../../util/source-range'
import { getExpressionTree, getExpressionTrees } from '../expression-tree-helper'
import { ExpressionTree } from '../expression-tree'

export class InvokeExpressionTree extends ExpressionTree {
  metadata: ExpressionMetadata
  ctx: InvokeExpressionContext
  sourceRange: SourceRange
  instance: ExpressionTree
  arguments: ExpressionTree[]

  constructor(ctx: InvokeExpressionContext) {
    super()
    this.ctx = ctx
    this.sourceRange = SourceRange.fromContext(ctx)
    this.instance = getExpressionTree(ctx.expr())
    this.arguments = getExpressionTrees(ctx.parameters().parameter().map((x) => x._name))
  }

  toString(): String {
    return `${this.instance}[${this.arguments.join(', ')}]`
  }
}

// this code was generated
