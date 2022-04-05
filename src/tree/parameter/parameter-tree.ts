// this code was generated

import { ParameterContext } from '../../grammar/xon-parser'
import { None, String } from '../../lib/core'
import { ParameterDeclarationMetadata } from '../../metadata/declaration/parameter/parameter-declaration-metadata'
import { getIdToken, IdToken } from '../../util/id-token'
import { SourceRange } from '../../util/source-range'
import { getBodyTree } from '../body/body-tree-helper'
import { BodyTree } from '../body/body-tree'
import { getExpressionTree } from '../expression/expression-tree-helper'
import { ExpressionTree } from '../expression/expression-tree'
import { MethodExpressionTree } from '../expression/method/method-expression-tree'
import { Tree } from '../tree'

export class ParameterTree extends Tree {
  ctx: ParameterContext
  sourceRange: SourceRange
  metadata: ParameterDeclarationMetadata
  variable: ExpressionTree
  type?: ExpressionTree | None
  body?: BodyTree | None

  constructor(ctx: ParameterContext) {
    super()
    this.ctx = ctx
    this.sourceRange = SourceRange.fromContext(ctx)
    this.variable = getExpressionTree(ctx._variable)
    this.type = getExpressionTree(ctx._type)
    this.body = getBodyTree(ctx.body())
  }

  toString(): String {
    let type, body
    type = this.type?.toString() || ''
    if (type && !(this.type instanceof MethodExpressionTree)) {
      type = ' ' + type
    }
    body = this.body?.toString() || ''
    return this.variable + type + body
  }
}

// this code was generated
