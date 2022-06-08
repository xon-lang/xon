// this code was generated

import { OperatorStatementContext } from '../../../grammar/xon-parser'
import { None, String } from '../../../lib/core'
import { SourceRange } from '../../../util/source-range'
import { getExpressionTree } from '../../expression/expression-tree-helper'
import { ExpressionTree } from '../../expression/expression-tree'
import { StatementTree } from '../statement-tree'
import { getIdToken, IdToken } from '../../../util/id-token'
import { ParameterTree } from '../../parameter/parameter-tree'
import { BodyTree } from '../../body/body-tree'
import { getBodyTree } from '../../body/body-tree-helper'

export class OperatorStatementTree extends StatementTree {
  ctx: OperatorStatementContext
  sourceRange: SourceRange
  name: IdToken
  type?: ExpressionTree | None
  body?: BodyTree | None

  constructor(ctx: OperatorStatementContext) {
    super()
    this.ctx = ctx
    this.sourceRange = SourceRange.fromContext(ctx)
    this.name = getIdToken(ctx._name)
    this.type = getExpressionTree(ctx._type)
    this.body = getBodyTree(ctx.body())
  }

  toString(): String {
    return `operator ${this.name} ${this.type}${this.body}`
  }
}

// this code was generated
