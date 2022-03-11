// this code was generated

import { AttributeContext } from '../../grammar/xon-parser'
import { String, none, None } from '../../lib/core'
import { AttributeDeclarationMetadata } from '../../metadata/declaration/attribute/attribute-declaration-metadata'
import { getIdToken, IdToken } from '../../util/id-token'
import { SourceRange } from '../../util/source-range'
import { BodyTree } from '../body/body-tree'
import { getBodyTree } from '../body/body-tree-helper'
import { ExpressionTree } from '../expression/expression-tree'
import { getExpressionTree } from '../expression/expression-tree-helper'
import { ParameterTree } from '../parameter/parameter-tree'
import { getParameterTrees } from '../parameter/parameter-tree-helper'
import { Tree } from '../tree'

export class AttributeTree extends Tree {
  metadata: AttributeDeclarationMetadata
  sourceRange: SourceRange
  modifier?: (IdToken | None)
  isMethod: boolean
  isOperator: boolean
  name: IdToken
  generics: ParameterTree[]
  parameters: ParameterTree[]
  type?: (ExpressionTree | None)
  body?: (BodyTree | None)

  constructor(ctx: AttributeContext) {
    super()
    this.sourceRange = SourceRange.fromContext(ctx)
    this.modifier = (ctx._modifier && getIdToken(ctx._modifier)) || none
    this.isMethod = !!ctx.methodParameters()
    this.isOperator = this.modifier?.text === 'operator'
    this.name = getIdToken(ctx._name)
    this.generics = getParameterTrees(ctx.generics()?.parameter())
    this.parameters = getParameterTrees(ctx.methodParameters()?.parameter())
    this.type = getExpressionTree(ctx.expr()) || none
    this.body = getBodyTree(ctx.body()) || none
  }

  toString(): String {
    let modifier, parameters, generics, type, body
    modifier = (this.modifier && this.modifier + ' ') || ''
    parameters = (this.isMethod && `(${this.parameters.join(', ')})`) || ''
    generics = (this.generics.length && `<|${this.generics.join(', ')}|>`) || ''
    if ((this.isOperator)) {
      parameters = ' ' + parameters
    }
    type = (this.type && ' ' + this.type) || ''
    body = (this.body && this.body) || ''
    return modifier + this.name + generics + parameters + type + body
  }
}

// this code was generated
