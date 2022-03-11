// this code was generated

import { MethodExpressionContext } from '../../../grammar/xon-parser'
import { String } from '../../../lib/core'
import { MethodExpressionMetadata } from '../../../metadata/expression/method/method-expression-metadata'
import { SourceRange } from '../../../util/source-range'
import { getBodyTree } from '../../body/body-tree-helper'
import { BodyTree } from '../../body/body-tree'
import { getParameterTrees } from '../../parameter/parameter-tree-helper'
import { ParameterTree } from '../../parameter/parameter-tree'
import { ExpressionTree } from '../expression-tree'

export class MethodExpressionTree extends ExpressionTree {
  metadata: MethodExpressionMetadata
  ctx: MethodExpressionContext
  sourceRange: SourceRange
  generics: ParameterTree[]
  parameters: ParameterTree[]
  body: BodyTree

  constructor(ctx: MethodExpressionContext) {
    super()
    this.ctx = ctx
    this.sourceRange = SourceRange.fromContext(ctx)
    this.generics = getParameterTrees(ctx.generics()?.parameter())
    this.parameters = [] = getParameterTrees(ctx.methodParameters().parameter())
    this.body = getBodyTree(ctx.body())
  }

  toString(): String {
    let generics
    generics = (this.generics.length && `<|${this.generics.join(', ')}|>`) || ''
    return `${generics}(${this.parameters.join(', ')})${this.body}`
  }
}

// this code was generated
