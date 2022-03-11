// this code was generated

import { GenericsExpressionContext } from '../../../grammar/xon-parser'
import { String } from '../../../lib/core'
import { ExpressionMetadata } from '../../../metadata/expression/expression-metadata'
import { SourceRange } from '../../../util/source-range'
import { getParameterTrees } from '../../parameter/parameter-tree-helper'
import { ParameterTree } from '../../parameter/parameter-tree'
import { getExpressionTree } from '../expression-tree-helper'
import { ExpressionTree } from '../expression-tree'

export class GenericsExpressionTree extends ExpressionTree {
  sourceRange: SourceRange
  metadata: ExpressionMetadata
  instance: ExpressionTree
  generics: ParameterTree[]

  constructor(ctx: GenericsExpressionContext) {
    super()
    this.sourceRange = SourceRange.fromContext(ctx)
    this.instance = getExpressionTree(ctx.expr())
    this.generics = getParameterTrees(ctx.generics().parameter())
  }

  toString(): String {
    let generics
    generics = (this.generics.length && `<|${this.generics.join(', ')}|>`) || ''
    return this.instance + generics
  }
}

// this code was generated
