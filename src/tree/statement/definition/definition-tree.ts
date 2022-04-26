// this code was generated

import { none, None, String } from '../../../lib/core'
import { DefinitionDeclarationMetadata } from '../../../metadata/declaration/definition/definition-declaration-metadata'
import { getIdToken, IdToken } from '../../../util/id-token'
import { SourceRange } from '../../../util/source-range'
import { getExpressionTree } from '../../expression/expression-tree-helper'
import { ExpressionTree } from '../../expression/expression-tree'
import { getParameterTrees } from '../../parameter/parameter-tree-helper'
import { ParameterTree } from '../../parameter/parameter-tree'
import { Tree } from '../../tree'
import { BodyTree } from '../../body/body-tree'
import { getBodyTree } from '../../body/body-tree-helper'
import { SingleBodyTree } from '../../body/single/single-body-tree'
import { ParameterStatementTree } from '../parameter/parameter-statement-tree'
import { MultipleBodyTree } from '../../body/multiple/multiple-body-tree'
import { MethodExpressionTree } from '../../expression/method/method-expression-tree'
import { StatementTree } from '../statement-tree'
import { DefinitionStatementContext } from '../../../grammar/xon-parser'

export class DefinitionStatementTree extends StatementTree {
  metadata: DefinitionDeclarationMetadata
  ctx: DefinitionStatementContext
  sourceRange: SourceRange
  modifier: IdToken
  name: IdToken
  parameters: ParameterTree[]
  base?: ExpressionTree | None
  attributes: ParameterTree[]

  constructor(ctx: DefinitionStatementContext) {
    super()
    this.ctx = ctx
    this.sourceRange = SourceRange.fromContext(ctx)
    this.modifier = getIdToken(ctx._modifier)
    this.name = getIdToken(ctx._name)
    this.parameters = getParameterTrees(ctx.parameters()?.parameter()) || none
    this.base = getExpressionTree(ctx.expression()) || none
    this.attributes = getParameterTrees(ctx.parameter())
  }

  toString(): String {
    let modifier, base, parameters, properties, methodsWithBody, methodsWithNoBody, attributes
    modifier = this.modifier.text + ' '
    base = (this.base && ' ' + this.base) || ''
    parameters = this.ctx.parameters() && `(${this.parameters.join(', ')})` || ''
    properties = this.attributes.filter((x) => !(x.type instanceof MethodExpressionTree)).join('\n')
    methodsWithBody = this.attributes.filter((x) => x.type instanceof MethodExpressionTree && x.body).join('\n\n')
    methodsWithNoBody = this.attributes.filter((x) => x.type instanceof MethodExpressionTree && !x.body).join('\n')
    attributes = [properties, methodsWithBody, methodsWithNoBody].filter((x) => x).join('\n\n').replace(/^(.+)/gm, '  $1')
    return (modifier + this.name + parameters + base + ((attributes && '\n' + attributes) || ''))
  }
}

// this code was generated
