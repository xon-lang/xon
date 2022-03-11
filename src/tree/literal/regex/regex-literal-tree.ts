// this code was generated

import { RegexLiteralContext } from '../../../grammar/xon-parser'
import { String } from '../../../lib/core'
import { SourceRange } from '../../../util/source-range'
import { LiteralTree } from '../literal-tree'

export class RegexLiteralTree extends LiteralTree {
  ctx: RegexLiteralContext
  sourceRange: SourceRange
  value: RegExp
  pattern: String

  constructor(ctx: RegexLiteralContext) {
    super()
    this.ctx = ctx
    this.sourceRange = SourceRange.fromContext(ctx)
    this.value = new RegExp(this.pattern, 'g')
    this.pattern = ctx.text.slice(1, -1).replace(/\\\//g, '/')
  }
}

// this code was generated
