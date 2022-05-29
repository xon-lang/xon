// this code was generated

import { DefinitionStatementContext } from '../../../grammar/xon-parser'
import { String } from '../../../lib/core'
import { SourceRange } from '../../../util/source-range'
import { StatementTree } from '../statement-tree'
import { DefinitionTree } from '../../definition/definition-tree'
import { getDefinitionTree } from '../../definition/definition-tree-helper'

export class DefinitionStatementTree extends StatementTree {
  ctx: DefinitionStatementContext
  sourceRange: SourceRange
  definition: DefinitionTree

  constructor(ctx: DefinitionStatementContext) {
    super()
    this.ctx = ctx
    this.sourceRange = SourceRange.fromContext(ctx)
    this.definition = getDefinitionTree(ctx.definition())
  }

  toString(): String {
    return this.definition.toString()
  }
}

// this code was generated
