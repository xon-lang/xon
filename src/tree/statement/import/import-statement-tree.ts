// this code was generated

import { ImportStatementContext } from '../../../grammar/xon-parser'
import { None, String } from '../../../lib/core'
import { SourceRange } from '../../../util/source-range'
import { getExpressionTree, getExpressionTrees } from '../../expression/expression-tree-helper'
import { ExpressionTree } from '../../expression/expression-tree'
import { StatementTree } from '../statement-tree'

export class ImportStatementTree extends StatementTree {
  sourceRange: SourceRange
  path: ExpressionTree
  members?: (ExpressionTree[] | None)

  constructor(ctx: ImportStatementContext) {
    super()
    this.sourceRange = SourceRange.fromContext(ctx)
    this.path = getExpressionTree(ctx._path)
    this.members = getExpressionTrees(ctx._members)
  }

  toString(): String {
    let members, uniqueMembers
    members = this.members.map((x) => x.toString()).sort((a, b) => a.localeCompare(b))
    uniqueMembers = [...new Set(members)]
    return `import ${this.path}: ${uniqueMembers.join(', ')}`
  }
}

// this code was generated
