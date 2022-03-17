// this code was generated

import { MultipleBodyContext } from '../../../grammar/xon-parser'
import { String } from '../../../lib/core'
import { SourceRange } from '../../../util/source-range'
import { PreprocessorExpressionTree } from '../../expression/preprocessor/preprocessor-expression-tree'
import { ExpressionStatementTree } from '../../statement/expression/expression-statement-tree'
import { getStatementTrees } from '../../statement/statement-tree-helper'
import { StatementTree } from '../../statement/statement-tree'
import { BodyTree } from '../body-tree'

export class MultipleBodyTree extends BodyTree {
  ctx: MultipleBodyContext
  sourceRange: SourceRange
  statements: StatementTree[]

  constructor(ctx: MultipleBodyContext) {
    super()
    this.ctx = ctx
    this.sourceRange = SourceRange.fromContext(ctx)
    this.statements = getStatementTrees(ctx.statement())
  }

  toString(): String {
    return '\n' + this.statements.map((x) => x instanceof ExpressionStatementTree && x.expression instanceof PreprocessorExpressionTree && '  ' + x || x.toString().replace(/^(.+)/gm, '  $1')).join('\n')
  }
}

// this code was generated
