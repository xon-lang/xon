// this code was generated

import { AttributeContext } from '../../grammar/xon-parser';
import { Boolean, none, None, String } from '../../lib/core';
import { AttributeDeclarationMetadata } from '../../metadata/declaration/attribute/attribute-declaration-metadata';
import { getIdToken, IdToken } from '../../util/id-token';
import { SourceRange } from '../../util/source-range';
import { BodyTree } from '../body/body-tree';
import { getBodyTree } from '../body/body-tree-helper';
import { ExpressionTree } from '../expression/expression-tree';
import { getExpressionTree } from '../expression/expression-tree-helper';
import { ParameterTree } from '../parameter/parameter-tree';
import { getParameterTrees } from '../parameter/parameter-tree-helper';
import { Tree } from '../tree';

export class AttributeTree extends Tree {
  metadata: AttributeDeclarationMetadata;
  sourceRange: SourceRange;
  isMethod: Boolean;
  name: IdToken;
  hasBracket: Boolean;
  hasParen: Boolean;
  parameters: ParameterTree[];
  type?: ExpressionTree | None;
  body?: BodyTree | None;

  constructor(ctx: AttributeContext) {
    super();
    this.sourceRange = SourceRange.fromContext(ctx);
    this.isMethod = !!ctx.parameters();
    this.name = getIdToken(ctx._name);
    this.hasBracket = !!ctx.parameters()?.OPEN_BRACKET();
    this.hasParen = !!ctx.parameters()?.OPEN_PAREN();
    this.parameters = getParameterTrees(ctx.parameters()?.parameter());
    this.type = getExpressionTree(ctx.expression()) || none;
    this.body = getBodyTree(ctx.body()) || none;
  }

  toString(): String {
    let parameters, type, body;
    if (this.hasBracket) {
      parameters = (this.isMethod && `[${this.parameters.join(', ')}]`) || '';
    } else {
      parameters = (this.isMethod && `(${this.parameters.join(', ')})`) || '';
    }
    type = (this.type && ' ' + this.type) || '';
    body = (this.body && this.body) || '';
    return this.name + parameters + type + body;
  }
}

// this code was generated
