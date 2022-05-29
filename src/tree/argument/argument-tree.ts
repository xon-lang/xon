// this code was generated

import { ArgumentContext } from '../../grammar/xon-parser'
import { None, String } from '../../lib/core'
import { getIdToken, IdToken } from '../../util/id-token'
import { SourceRange } from '../../util/source-range'
import { getExpressionTree } from '../expression/expression-tree-helper'
import { ExpressionTree } from '../expression/expression-tree'
import { Tree } from '../tree'

export class ArgumentTree extends Tree {
  ctx: ArgumentContext
  sourceRange: SourceRange
  name?: IdToken
  value: ExpressionTree | None

  constructor(ctx: ArgumentContext) {
    super()
    this.ctx = ctx
    this.sourceRange = SourceRange.fromContext(ctx)
    this.name = getIdToken(ctx._name)
    this.value = getExpressionTree(ctx.expression())
  }

  toString(): String {
    const name = this.name && this.name + ': ' || ''
    return name + this.value
  }
}

// this code was generated
