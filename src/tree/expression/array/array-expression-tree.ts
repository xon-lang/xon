// this code was generated

import { ArrayExpressionContext } from '../../../grammar/xon-parser'
import { String } from '../../../lib/core'
import { ArrayExpressionMetadata } from '../../../metadata/expression/array/array-expression-metadata'
import { SourceRange } from '../../../util/source-range'
import { getParameterTrees } from '../../parameter/parameter-tree-helper'
import { ParameterTree } from '../../parameter/parameter-tree'
import { ExpressionTree } from '../expression-tree'

export class ArrayExpressionTree extends ExpressionTree {
  metadata: ArrayExpressionMetadata
  ctx: ArrayExpressionContext
  sourceRange: SourceRange
  parameters: ParameterTree[]

  constructor(ctx: ArrayExpressionContext) {
    super()
    this.ctx = ctx
    this.sourceRange = SourceRange.fromContext(ctx)
    this.parameters = getParameterTrees(ctx.parameters().parameter())
  }

  toString(): String {
    return `[${this.parameters.join(', ')}]`
  }
}

// this code was generated
