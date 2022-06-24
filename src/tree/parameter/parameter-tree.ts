// this code was generated

import { ParameterContext } from '../../grammar/xon-parser';
import { none, None, String } from '../../lib/core';
import { ParameterMetadata } from '../../metadata/declaration/parameter/parameter-metadata';
import { SourceRange } from '../../util/source-range';
import { ExpressionTree } from '../expression/expression-tree';
import { getExpressionTree } from '../expression/expression-tree-helper';
import { getIdTree } from '../id/id-tree-helper';
import { IdTree } from '../id/id-tree';
import { Tree } from '../tree';
import { getParameterTrees } from './parameter-tree-helper';
import { SourceTree } from '../source/source-tree';
import { getSourceTree } from '../source/source-tree-helper';

export class ParameterTree extends Tree {
  ctx: ParameterContext;
  metadata: ParameterMetadata;
  sourceRange: SourceRange;
  name?: IdTree;
  parameters: ParameterTree[];
  type?: ExpressionTree | None;
  body?: SourceTree | ExpressionTree | None;

  constructor(ctx: ParameterContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.name = getIdTree(ctx._name);
    this.parameters = getParameterTrees(ctx.parameters()?.parameter());
    this.type = getExpressionTree(ctx._type) || none;
    this.body = getExpressionTree(ctx._value) || getSourceTree(ctx.body()?.source());
    this.addChildren(this.name, ...this.parameters, this.type, this.body)
  }
}

// this code was generated
