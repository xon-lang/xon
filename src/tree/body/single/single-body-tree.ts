// this code was generated

import { SingleBodyContext } from '../../../grammar/xon-parser'
import { String } from '../../../lib/core'
import { SourceRange } from '../../../util/source-range'
import { StatementTree } from '../../statement/statement-tree'
import { getStatementTree } from '../../statement/statement-tree-helper'
import { BodyTree } from '../body-tree'

export class SingleBodyTree extends BodyTree {
  sourceRange: SourceRange
  statement: StatementTree

  constructor(ctx: SingleBodyContext) {
    super()
    this.sourceRange = SourceRange.fromContext(ctx)
    this.statement = getStatementTree(ctx.statement())
  }

  toString(): String {
    return ` = ${this.statement}`
  }
}

// this code was generated
