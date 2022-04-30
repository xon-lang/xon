// this code was generated

import { SourceContext } from '../../grammar/xon-parser'
import { String } from '../../lib/core'
import { SourceRange } from '../../util/source-range'
import { ImportStatementTree } from '../statement/import/import-statement-tree'
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
    let importStatements, importStatementsMap, uniqueImportStatements, otherStatements, result
    importStatements = this.statements.filter((x) => x instanceof ImportStatementTree).map((x) => x as ImportStatementTree)
    importStatementsMap = {}
    for (let importStatement of importStatements) {
          importStatementsMap[importStatement.path.toString()] = importStatementsMap[importStatement.path.toString()] || []
          const members = importStatement.members.map(x => x.toString())
          importStatementsMap[importStatement.path.toString()].push(...members)
        }
    uniqueImportStatements = Object.keys(importStatementsMap).sort((a, b) => a.localeCompare(b)).map((x) => `import ${x}: ${[...new Set(importStatementsMap[x].sort((a, b) => a.localeCompare(b)))].join(', ')}`).join('\n')
    otherStatements = this.statements.filter((x) => !(x instanceof ImportStatementTree)).join('\n')
    result = [uniqueImportStatements, otherStatements].filter((x) => x).join('\n\n')
    return (result && result + '\n') || ''
  }
}

// this code was generated
