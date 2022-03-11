// this code was generated

import { IndexExpressionContext } from '../../../grammar/xon-parser'
import { String } from '../../../lib/core'
import { ExpressionMetadata } from '../../../metadata/expression/expression-metadata'
import { SourceRange } from '../../../util/source-range'
import { getExpressionTree, getExpressionTrees } from '../expression-tree-helper'
import { ExpressionTree } from '../expression-tree'

export class IndexExpressionTree extends ExpressionTree {
  metadata: ExpressionMetadata
  ctx: IndexExpressionContext
  sourceRange: SourceRange
  instance: ExpressionTree
  arguments: ExpressionTree[]

  constructor(ctx: IndexExpressionContext) {
    super()
    this.ctx = ctx
    this.sourceRange = SourceRange.fromContext(ctx)
    this.instance = getExpressionTree(ctx._instance)
    this.arguments = getExpressionTrees(ctx._args)
  }

  toString(): String {
    return `${this.instance}[${this.arguments.join(', ')}]`
  }
}

// this code was generated
