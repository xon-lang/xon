// this code was generated

import { StringLiteralContext } from '../../../grammar/xon-parser'
import { String } from '../../../lib/core'
import { SourceRange } from '../../../util/source-range'
import { LiteralTree } from '../literal-tree'

export class StringLiteralTree extends LiteralTree {
  ctx: StringLiteralContext
  sourceRange: SourceRange
  value: String

  constructor(ctx: StringLiteralContext) {
    super()
    this.ctx = ctx
    this.sourceRange = SourceRange.fromContext(ctx)
    this.value = ctx.text.slice(1, -1).replace(/\\'/g, "'")
  }
}

// this code was generated
