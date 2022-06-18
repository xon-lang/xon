// this code was generated

import { ExportStatementContext } from '../../../grammar/xon-parser'
import { String } from '../../../lib/core'
import { SourceRange } from '../../../util/source-range'
import { getExpressionTree } from '../../expression/expression-tree-helper'
import { ExpressionTree } from '../../expression/expression-tree'
import { StatementTree } from '../statement-tree'

export class ExportStatementTree extends StatementTree {
  ctx: ExportStatementContext
  sourceRange: SourceRange
  path: ExpressionTree

  constructor(ctx: ExportStatementContext) {
    super()
    this.ctx = ctx
    this.sourceRange = SourceRange.fromContext(ctx)
    this.path = getExpressionTree(ctx._path)
    this.addChildren(this.path)
  }

  toString(): String {
    return `export ${this.path}`
  }
}

// this code was generated
