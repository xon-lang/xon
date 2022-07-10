// this code was generated

import { ParameterContext } from '../../grammar/xon-parser';
import { Boolean, None } from '../../lib/core';
import { ParameterMetadata } from '../../metadata/declaration/parameter/parameter-metadata';
import { SourceRange } from '../../util/source-range';
import { ExpressionTree } from '../expression/expression-tree';
import { getExpressionTree } from '../expression/expression-tree-helper';
import { IdTree } from '../id/id-tree';
import { getIdTree } from '../id/id-tree-helper';
import { SourceTree } from '../source/source-tree';
import { getSourceTree } from '../source/source-tree-helper';
import { Tree } from '../tree';
import { getParameterTrees } from './parameter-tree-helper';

export class ParameterTree extends Tree {
  ctx: ParameterContext;
  metadata: ParameterMetadata;
  sourceRange: SourceRange;
  name?: IdTree;
  destructure: ParameterTree[];
  isMethod: Boolean;
  generics: ParameterTree[];
  params: ParameterTree[];
  type?: ExpressionTree | None;
  value?: ExpressionTree | None;
  body?: SourceTree | None;

  constructor(ctx: ParameterContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.name = getIdTree(ctx._name);
    this.destructure = getParameterTrees(ctx._destructure?.parameter());
    this.isMethod = !!ctx._params;
    this.generics = getParameterTrees(ctx.genericParameters()?.parameter());
    this.params = getParameterTrees(ctx._params?.parameter());
    this.type = getExpressionTree(ctx.valueType()?.expression());
    this.value = getExpressionTree(ctx.valueBody()?.expression());
    this.body = getSourceTree(ctx.valueBody()?.body()?.source());
    this.addChildren(
      this.name,
      ...this.destructure,
      ...this.generics,
      ...this.params,
      this.type,
      this.value,
      this.body,
    );
  }
}

// this code was generated
