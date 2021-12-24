import { ForStatementContext } from '../../../grammar/xon-parser';
import { BodyNode } from '../../body/body-node';
import { getBodyNode } from '../../body/body-node-helper';
import { ExpressionNode } from '../../expression/expression-node';
import { getExpressionNode } from '../../expression/expression-node-helper';
import { SourceReference } from '../../util/source-reference';
import { StatementNode } from '../statement-node';

export class ForStatementNode implements StatementNode {
  sourceReference: SourceReference;
  valueVarName?: string;
  indexVarName?: string;
  expression: ExpressionNode;
  body: BodyNode;

  constructor(ctx: ForStatementContext) {
    this.sourceReference = SourceReference.fromContext(ctx);
    this.valueVarName = ctx._value?.text || null;
    this.indexVarName = ctx._index?.text || null;
    this.expression = getExpressionNode(ctx.expr());
    this.body = getBodyNode(ctx.body());
  }

  toString(): string {
    const vars = [this.valueVarName, this.indexVarName].filter((x) => x).join(',');
    return `for ${vars ? vars + ' ' : ''}${this.expression}\n${this.body}`;
  }
}
