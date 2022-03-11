import { Any, Unknown, String, Number } from '../../lib/core'
import { SourceContext } from '../../grammar/xon-parser'
import { SourceRange } from '../../util/source-range'
import { getDefinitionTrees } from '../definition/definition-tree-helper'
import { DefinitionTree } from '../definition/definition-tree'
import { getStatementTrees } from '../statement/statement-tree-helper'
import { StatementTree } from '../statement/statement-tree'
import { Tree } from '../tree'

export class SourceTree extends Tree {
  ctx: SourceContext
  sourceRange: SourceRange
  statements: StatementTree[]
  definitions: DefinitionTree[]

  constructor(ctx: SourceContext) {
    super()
    this.ctx = ctx
    this.sourceRange = SourceRange.fromContext(ctx)
    this.statements = getStatementTrees(ctx.statement())
    this.definitions = getDefinitionTrees(ctx.definition())
  }

  toString(): String {
    let statements, definitions, result
    statements = this.statements.join('\n')
    definitions = this.definitions.join('\n\n')
    result = [statements, definitions].filter(Boolean).join('\n\n')
    return (result && result + '\n') || ''
  }
}
