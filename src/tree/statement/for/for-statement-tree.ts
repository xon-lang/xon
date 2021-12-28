import { ForStatementContext } from '../../../grammar/xon-parser';
import { BodyTree } from '../../body/body-tree';
import { getBodyTree } from '../../body/body-tree-helper';
import { ExpressionTree } from '../../expression/expression-tree';
import { getExpressionTree } from '../../expression/expression-tree-helper';
import { SourceReference } from '../../../util/source-reference';
import { StatementTree } from '../statement-tree';

export class ForStatementTree implements StatementTree {
  sourceReference: SourceReference;
  valueVarName?: string;
  indexVarName?: string;
  expression: ExpressionTree;
  body: BodyTree;

  constructor(ctx: ForStatementContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.valueVarName = ctx._value?.text || null;
    this.indexVarName = ctx._index?.text || null;
    this.expression = getExpressionTree(ctx.expr());
    this.body = getBodyTree(ctx.body());
  }

  toString(): string {
    const vars = [this.valueVarName, this.indexVarName].filter((x) => x).join(',');
    return `for ${vars ? vars + ' ' : ''}${this.expression}\n${this.body}`;
  }
}
