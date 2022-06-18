// this code was generated

import { ForStatementContext } from '../../../grammar/xon-parser';
import { none, String } from '../../../lib/core';
import { SourceRange } from '../../../util/source-range';
import { BodyTree } from '../../body/body-tree';
import { getBodyTree } from '../../body/body-tree-helper';
import { ExpressionTree } from '../../expression/expression-tree';
import { getExpressionTree } from '../../expression/expression-tree-helper';
import { ParameterTree } from '../../parameter/parameter-tree';
import { getParameterTree } from '../../parameter/parameter-tree-helper';
import { StatementTree } from '../statement-tree';

export class ForStatementTree extends StatementTree {
  ctx: ForStatementContext;
  sourceRange: SourceRange;
  valueVar?: ParameterTree;
  indexVar?: ParameterTree;
  expression: ExpressionTree;
  body: BodyTree;

  constructor(ctx: ForStatementContext) {
    super();
    this.ctx = ctx;
    this.sourceRange = SourceRange.fromContext(ctx);
    this.valueVar = getParameterTree(ctx._value) || none;
    this.indexVar = getParameterTree(ctx._index) || none;
    this.expression = getExpressionTree(ctx.expression());
    this.body = getBodyTree(ctx.body());
    this.addChildren(this.valueVar, this.indexVar, this.expression, this.body);
  }

  toString(): String {
    let vars;
    vars = [this.valueVar, this.indexVar].filter((x) => x).join(', ');
    return `for ${(vars && vars + ' in ') || ''}${this.expression}\n${this.body}`;
  }
}

// this code was generated
