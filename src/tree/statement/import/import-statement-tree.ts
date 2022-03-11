// this code was generated

import { ImportStatementContext } from '../../../grammar/xon-parser'
import { String, None } from '../../../lib/core'
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
    let members
    members = this.members.sort((a, b) => a.sourceRange.rangeText.localeCompare(b.sourceRange.rangeText))
    return `import ${this.path}: ${members.join(', ')}`
  }
}

// this code was generated
