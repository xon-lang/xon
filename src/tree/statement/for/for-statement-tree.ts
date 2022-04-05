// this code was generated

import { ForStatementContext } from '../../../grammar/xon-parser'
import { none, None, String } from '../../../lib/core'
import { SourceRange } from '../../../util/source-range'
import { getBodyTree } from '../../body/body-tree-helper'
import { BodyTree } from '../../body/body-tree'
import { getExpressionTree } from '../../expression/expression-tree-helper'
import { ExpressionTree } from '../../expression/expression-tree'
import { StatementTree } from '../statement-tree'

export class ForStatementTree extends StatementTree {
  ctx: ForStatementContext
  sourceRange: SourceRange
  valueVarName?: String | None
  indexVarName?: String | None
  expression: ExpressionTree
  body: BodyTree

  constructor(ctx: ForStatementContext) {
    super()
    this.ctx = ctx
    this.sourceRange = SourceRange.fromContext(ctx)
    this.valueVarName = ctx._value?.text || none
    this.indexVarName = ctx._index?.text || none
    this.expression = getExpressionTree(ctx.expression())
    this.body = getBodyTree(ctx.body())
  }

  toString(): String {
    let vars
    vars = [this.valueVarName, this.indexVarName].filter((x) => x).join(', ')
    return `for ${(vars && vars + ' in ') || ''}${this.expression}\n${this.body}`
  }
}

// this code was generated
