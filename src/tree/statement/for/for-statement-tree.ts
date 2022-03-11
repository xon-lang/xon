import { ForStatementContext } from '../../../grammar/xon-parser';
import { String } from '../../../lib/core';
import { SourceRange } from '../../../util/source-range';
import { BodyTree } from '../../body/body-tree';
import { getBodyTree } from '../../body/body-tree-helper';
import { ExpressionTree } from '../../expression/expression-tree';
import { getExpressionTree } from '../../expression/expression-tree-helper';
import { StatementTree } from '../statement-tree';

export class ForStatementTree implements StatementTree {
  sourceRange: SourceRange;
  valueVarName?: String;
  indexVarName?: String;
  expression: ExpressionTree;
  body: BodyTree;

  constructor(ctx: ForStatementContext) {
    this.sourceRange = SourceRange.fromContext(ctx);
    this.valueVarName = ctx._value?.text || null;
    this.indexVarName = ctx._index?.text || null;
    this.expression = getExpressionTree(ctx.expr());
    this.body = getBodyTree(ctx.body());
  }

  toString(): String {
    const vars = [this.valueVarName, this.indexVarName].filter((x) => x).join(',');
    return `for ${(vars && vars + ' in ') || ''}${this.expression}\n${this.body}`;
  }
}
