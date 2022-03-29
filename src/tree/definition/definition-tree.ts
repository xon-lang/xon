// this code was generated

import { DefinitionContext } from '../../grammar/xon-parser'
import { none, None, String } from '../../lib/core'
import { DefinitionDeclarationMetadata } from '../../metadata/declaration/definition/definition-declaration-metadata'
import { getIdToken, IdToken } from '../../util/id-token'
import { SourceRange } from '../../util/source-range'
import { getAttributeTrees } from '../attribute/attribute-tree-helper'
import { AttributeTree } from '../attribute/attribute-tree'
import { getExpressionTree } from '../expression/expression-tree-helper'
import { ExpressionTree } from '../expression/expression-tree'
import { getParameterTrees } from '../parameter/parameter-tree-helper'
import { ParameterTree } from '../parameter/parameter-tree'
import { Tree } from '../tree'

export class DefinitionTree extends Tree {
  metadata: DefinitionDeclarationMetadata
  ctx: DefinitionContext
  sourceRange: SourceRange
  modifier: IdToken
  name: IdToken
  parameters: ParameterTree[]
  base?: (ExpressionTree | None)
  attributes: AttributeTree[]

  constructor(ctx: DefinitionContext) {
    super()
    this.ctx = ctx
    this.sourceRange = SourceRange.fromContext(ctx)
    this.modifier = getIdToken(ctx._modifier)
    this.name = getIdToken(ctx._name)
    this.parameters = getParameterTrees(ctx.parameters()?.parameter()) || none
    this.base = getExpressionTree(ctx.expression()) || none
    this.attributes = getAttributeTrees(ctx.attribute())
  }

  toString(): String {
    let modifier, base, parameters, properties, methodsWithBody, methodsWithNoBody, attributes
    modifier = this.modifier.text
    base = (this.base && ' ' + this.base) || ''
    parameters = this.ctx.parameters() && `(${this.parameters.join(', ')})` || ''
    properties = this.attributes.filter((x) => !x.isMethod).join('\n')
    methodsWithBody = this.attributes.filter((x) => x.isMethod && x.body).join('\n\n')
    methodsWithNoBody = this.attributes.filter((x) => x.isMethod && !x.body).join('\n')
    attributes = [properties, methodsWithBody, methodsWithNoBody].filter(x=>x).join('\n\n').replace(/^(.+)/gm, '  $1')
    return (modifier + this.name + parameters + base + ((attributes && '\n' + attributes) || ''))
  }
}

// this code was generated
