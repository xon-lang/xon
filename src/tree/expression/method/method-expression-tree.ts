// this code was generated

import { MethodExpressionContext } from '../../../grammar/xon-parser'
import { Boolean, String } from '../../../lib/core'
import { SourceRange } from '../../../util/source-range'
import { getParameterTrees } from '../../parameter/parameter-tree-helper'
import { ParameterTree } from '../../parameter/parameter-tree'
import { getExpressionTree } from '../expression-tree-helper'
import { ExpressionTree } from '../expression-tree'
import { ExpressionMetadata } from '../../../metadata/value/expression-metadata'

export class MethodExpressionTree extends ExpressionTree {
  metadata: ExpressionMetadata
  ctx: MethodExpressionContext
  sourceRange: SourceRange
  hasBracket: Boolean
  hasParen: Boolean
  parameters: ParameterTree[]
  value: ExpressionTree

  constructor(ctx: MethodExpressionContext) {
    super()
    this.ctx = ctx
    this.sourceRange = SourceRange.fromContext(ctx)
    this.hasBracket = !!ctx.parameters().OPEN_BRACKET()
    this.hasParen = !!ctx.parameters().OPEN_PAREN()
    this.parameters = [] = getParameterTrees(ctx.parameters().parameter())
    this.value = getExpressionTree(ctx._value)
  }

  toString(): String {
    if (this.hasBracket) {
      return `[${this.parameters.join(', ')}] => ${this.value}`
    }
    return `(${this.parameters.join(', ')}) => ${this.value}`
  }
}

// this code was generated
