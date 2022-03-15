// this code was generated

import { SourceContext } from '../../grammar/xon-parser'
import { String } from '../../lib/core'
import { SourceRange } from '../../util/source-range'
import { getAttributeTrees } from '../attribute/attribute-tree-helper'
import { AttributeTree } from '../attribute/attribute-tree'
import { getDefinitionTrees } from '../definition/definition-tree-helper'
import { DefinitionTree } from '../definition/definition-tree'
import { ImportStatementTree } from '../statement/import/import-statement-tree'
import { getStatementTrees } from '../statement/statement-tree-helper'
import { StatementTree } from '../statement/statement-tree'
import { Tree } from '../tree'

export class SourceTree extends Tree {
  ctx: SourceContext
  sourceRange: SourceRange
  statements: StatementTree[]
  attributes: AttributeTree[]
  definitions: DefinitionTree[]

  constructor(ctx: SourceContext) {
    super()
    this.ctx = ctx
    this.sourceRange = SourceRange.fromContext(ctx)
    this.statements = getStatementTrees(ctx.statement())
    this.attributes = getAttributeTrees(ctx.attribute())
    this.definitions = getDefinitionTrees(ctx.definition())
  }

  toString(): String {
    let importStatements, otherStatements, attributes, definitions, result
    importStatements = this.statements.filter((x) => x instanceof ImportStatementTree).map((x) => x as ImportStatementTree).sort((a, b) => a.path.toString().localeCompare(b.path.toString())).join('\n')
    otherStatements = this.statements.filter((x) => !(x instanceof ImportStatementTree)).join('\n')
    attributes = this.attributes.join('\n\n')
    definitions = this.definitions.join('\n\n')
    result = [importStatements, otherStatements, attributes, definitions].filter(Boolean).join('\n\n')
    return (result && result + '\n') || ''
  }
}

// this code was generated
