// this code was generated

import { ParameterContext } from '../../grammar/xon-parser'
import { none, None, String } from '../../lib/core'
import { ParameterMetadata } from '../../metadata/declaration/parameter/parameter-metadata'
import { getIdToken, IdToken } from '../../util/id-token'
import { SourceRange } from '../../util/source-range'
import { BodyTree } from '../body/body-tree'
import { getBodyTree } from '../body/body-tree-helper'
import { ExpressionTree } from '../expression/expression-tree'
import { getExpressionTree } from '../expression/expression-tree-helper'
import { Tree } from '../tree'
import { getParameterTrees } from './parameter-tree-helper'

export class ParameterTree extends Tree {
  ctx: ParameterContext
  metadata: ParameterMetadata
  sourceRange: SourceRange
  name?: IdToken
  parameters: ParameterTree[]
  type?: ExpressionTree | None
  body?: BodyTree | None

  constructor(ctx: ParameterContext) {
    super()
    this.ctx = ctx
    this.sourceRange = SourceRange.fromContext(ctx)
    this.name = getIdToken(ctx._name)
    this.parameters = getParameterTrees(ctx.parameters()?.parameter())
    this.type = getExpressionTree(ctx.expression()) || none
    this.body = getBodyTree(ctx.body()) || none
  }

  toString(): String {
    let parameters, type, body
    parameters = this.parameters.length
      && this.ctx.parameters()._open.text 
      + this.parameters.join(', ') 
      + this.ctx.parameters()._close.text
    type = this.type && ': ' + this.type || ''
    body = this.body && this.body || ''
    return (this.name || parameters) + type + body
  }
}

// this code was generated
