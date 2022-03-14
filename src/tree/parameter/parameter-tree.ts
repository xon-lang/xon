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
  name: ExpressionTree
  type?: (ExpressionTree | None)
  value?: (ExpressionTree | None)

  constructor(ctx: ParameterContext) {
    super()
    this.ctx = ctx
    this.sourceRange = SourceRange.fromContext(ctx)
    this.name = getExpressionTree(ctx._name)
    this.type = getExpressionTree(ctx._type)
    this.value = getExpressionTree(ctx._value)
  }

  toString(): String {
    let type, value
    type = this.type?.toString() || ''
    if (type && !(this.type instanceof MethodExpressionTree)) {
      type = ' ' + type
    }
    value = this.value && ' = ' + this.value || ''
    return this.name + type + value
  }
}

// this code was generated
