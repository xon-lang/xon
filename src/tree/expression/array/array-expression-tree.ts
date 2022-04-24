// this code was generated

import { ArrayExpressionContext } from '../../../grammar/xon-parser'
import { String } from '../../../lib/core'
import { ArrayExpressionMetadata } from '../../../metadata/expression/array/array-expression-metadata'
import { SourceRange } from '../../../util/source-range'
import { getParameterTrees } from '../../parameter/parameter-tree-helper'
import { ParameterTree } from '../../parameter/parameter-tree'
import { ExpressionTree } from '../expression-tree'
import { ArgumentTree } from '../../argument/argument-tree'
import { getArgumentTrees } from '../../argument/argument-tree-helper'

export class ArrayExpressionTree extends ExpressionTree {
  metadata: ArrayExpressionMetadata
  ctx: ArrayExpressionContext
  sourceRange: SourceRange
  arguments: ArgumentTree[]

  constructor(ctx: ArrayExpressionContext) {
    super()
    this.ctx = ctx
    this.sourceRange = SourceRange.fromContext(ctx)
    this.arguments = getArgumentTrees(ctx.arguments().argument())
  }

  toString(): String {
    return `[${this.arguments.join(', ')}]`
  }
}

// this code was generated
