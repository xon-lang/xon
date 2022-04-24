// this code was generated

import { ParameterContext } from '../../grammar/xon-parser'
import { none, None, String } from '../../lib/core'
import { getIdToken, IdToken } from '../../util/id-token'
import { SourceRange } from '../../util/source-range'
import { BodyTree } from '../body/body-tree'
import { getBodyTree } from '../body/body-tree-helper'
import { ExpressionTree } from '../expression/expression-tree'
import { getExpressionTree } from '../expression/expression-tree-helper'
import { Tree } from '../tree'

export class ParameterTree extends Tree {
  ctx: ParameterContext
  sourceRange: SourceRange
  name: IdToken
  type?: ExpressionTree | None
  body?: BodyTree | None

  constructor(ctx: ParameterContext) {
    super()
    this.ctx = ctx
    this.sourceRange = SourceRange.fromContext(ctx)
    this.name = getIdToken(ctx._name)
    this.type = getExpressionTree(ctx.expression()) || none
    this.body = getBodyTree(ctx.body()) || none
  }

  toString(): String {
    let type, body
    type = this.type && ' ' + this.type || ''
    body = this.body && this.body || ''
    return this.name + type + body
  }
}

// this code was generated
