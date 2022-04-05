// this code was generated

import { MemberExpressionContext } from '../../../grammar/xon-parser'
import { String } from '../../../lib/core'
import { MemberExpressionMetadata } from '../../../metadata/expression/member/member-expression-metadata'
import { getIdToken, IdToken } from '../../../util/id-token'
import { SourceRange } from '../../../util/source-range'
import { getExpressionTree } from '../expression-tree-helper'
import { ExpressionTree } from '../expression-tree'

export class MemberExpressionTree extends ExpressionTree {
  metadata: MemberExpressionMetadata
  ctx: MemberExpressionContext
  sourceRange: SourceRange
  instance: ExpressionTree
  name: IdToken

  constructor(ctx: MemberExpressionContext) {
    super()
    this.ctx = ctx
    this.sourceRange = SourceRange.fromContext(ctx)
    this.instance = getExpressionTree(ctx.expression())
    this.name = getIdToken(ctx._name)
  }

  toString(): String {
    return `${this.instance}.${this.name}`
  }
}

// this code was generated
