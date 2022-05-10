// this code was generated

import { SourceContext } from '../../grammar/xon-parser'
import { String } from '../../lib/core'
import { SourceRange } from '../../util/source-range'
import { getStatementTrees } from '../statement/statement-tree-helper'
import { StatementTree } from '../statement/statement-tree'
import { Tree } from '../tree'
import { SourceMetadata } from '../../metadata/source/source-metadata'

export class SourceTree extends Tree {
  metadata: SourceMetadata
  ctx: SourceContext
  sourceRange: SourceRange
  statements: StatementTree[]

  constructor(ctx: SourceContext) {
    super()
    this.ctx = ctx
    this.sourceRange = SourceRange.fromContext(ctx)
    this.statements = getStatementTrees(ctx.statement())
  }

  toString(): String {
    let statements, result
    statements = this.statements.join('\n')
    result = [statements].filter((x) => x).join('\n\n')
    return (result && result + '\n') || ''
  }
}

// this code was generated
