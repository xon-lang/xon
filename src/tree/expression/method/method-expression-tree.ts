// this code was generated

import { MethodExpressionContext } from '../../../grammar/xon-parser'
import { String } from '../../../lib/core'
import { MethodExpressionMetadata } from '../../../metadata/expression/method/method-expression-metadata'
import { SourceRange } from '../../../util/source-range'
import { getParameterTrees } from '../../parameter/parameter-tree-helper'
import { ParameterTree } from '../../parameter/parameter-tree'
import { getExpressionTree } from '../expression-tree-helper'
import { ExpressionTree } from '../expression-tree'

export class MethodExpressionTree extends ExpressionTree {
  metadata: MethodExpressionMetadata
  ctx: MethodExpressionContext
  sourceRange: SourceRange
  parameters: ParameterTree[]
  value: ExpressionTree

  constructor(ctx: MethodExpressionContext) {
    super()
    this.ctx = ctx
    this.sourceRange = SourceRange.fromContext(ctx)
    this.parameters = [] = getParameterTrees(ctx.parameters().parameter())
    this.value = getExpressionTree(ctx._value)
  }

  toString(): String {
    return `[${this.parameters.join(', ')}] => ${this.value}`
  }
}

// this code was generated
