// this code was generated

import { PrefixExpressionContext } from '../../../grammar/xon-parser'
import { String } from '../../../lib/core'
import { ExpressionMetadata } from '../../../metadata/expression/expression-metadata'
import { getIdToken, IdToken } from '../../../util/id-token'
import { SourceRange } from '../../../util/source-range'
import { getExpressionTree } from '../expression-tree-helper'
import { ExpressionTree } from '../expression-tree'

export class PrefixExpressionTree extends ExpressionTree {
  metadata: ExpressionMetadata
  sourceRange: SourceRange
  operator: IdToken
  value: ExpressionTree

  constructor(ctx: PrefixExpressionContext) {
    super()
    this.sourceRange = SourceRange.fromContext(ctx)
    this.operator = getIdToken(ctx._op)
    this.value = getExpressionTree(ctx.expr())
  }

  toString(): String {
    return `${this.operator}${this.value}`
  }
}

// this code was generated
