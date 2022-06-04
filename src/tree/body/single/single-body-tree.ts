// this code was generated

import { SingleBodyContext } from '../../../grammar/xon-parser'
import { String } from '../../../lib/core'
import { SourceRange } from '../../../util/source-range'
import { getStatementTree } from '../../statement/statement-tree-helper'
import { StatementTree } from '../../statement/statement-tree'
import { BodyTree } from '../body-tree'

export class SingleBodyTree extends BodyTree {
  ctx: SingleBodyContext
  sourceRange: SourceRange
  statement: StatementTree

  constructor(ctx: SingleBodyContext) {
    super()
    this.ctx = ctx
    this.sourceRange = SourceRange.fromContext(ctx)
    this.statement = getStatementTree(ctx.statement())
  }

  toString() {
    return ` = ${this.statement}`
  }
}

// this code was generated
