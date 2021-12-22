import { ParameterStatementContext } from '../../../grammar/xon-parser';
import { ParameterNode } from '../../parameter/parameter-node';
import { getParameterNode } from '../../parameter/parameter-node-helper';
import { StatementNode } from '../statement-node';

export class ParameterStatementNode extends StatementNode {
  parameter: ParameterNode;

  constructor(public ctx: ParameterStatementContext) {
    super();

    this.parameter = getParameterNode(ctx.parameter());
  }

  toString(): string {
    return this.parameter.toString();
  }
}
