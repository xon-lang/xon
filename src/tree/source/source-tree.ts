// this code was generated

import { String } from '../../lib/core'
import { SourceContext } from '../../grammar/xon-parser'
import { SourceRange } from '../../util/source-range'
import { getDefinitionTrees } from '../definition/definition-tree-helper'
import { DefinitionTree } from '../definition/definition-tree'
import { getStatementTrees } from '../statement/statement-tree-helper'
import { StatementTree } from '../statement/statement-tree'
import { Tree } from '../tree'
import { ImportStatementTree } from '../statement/import/import-statement-tree'

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
    let importStatements, otherStatements, definitions, result
    importStatements = this.statements.filter((x) => x instanceof ImportStatementTree).map((x) => x as ImportStatementTree).sort((a, b) => a.path.toString().localeCompare(b.path.toString())).join('\n')
    otherStatements = this.statements.filter((x) => !(x instanceof ImportStatementTree)).join('\n')
    definitions = this.definitions.join('\n\n')
    result = [importStatements, otherStatements, definitions].filter(Boolean).join('\n\n')
    return (result && result + '\n') || ''
  }
}

// this code was generated
