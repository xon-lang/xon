// this code was generated

import { AssignmentStatementContext } from '../../../grammar/xon-parser'
import { String } from '../../../lib/core'
import { SourceRange } from '../../../util/source-range'
import { getBodyTree } from '../../body/body-tree-helper'
import { BodyTree } from '../../body/body-tree'
import { getExpressionTree } from '../../expression/expression-tree-helper'
import { ExpressionTree } from '../../expression/expression-tree'
import { getParameterTree } from '../../parameter/parameter-tree-helper'
import { ParameterTree } from '../../parameter/parameter-tree'
import { StatementTree } from '../statement-tree'

export class AssignmentStatementTree extends StatementTree {
  ctx: AssignmentStatementContext
  sourceRange: SourceRange
  parameter: ParameterTree

  constructor(ctx: AssignmentStatementContext) {
    super()
    this.ctx = ctx
    this.sourceRange = SourceRange.fromContext(ctx)
    this.parameter = getParameterTree(ctx.parameter())
  }

  toString(): String {
    return this.parameter.toString()
  }
}

// this code was generated
