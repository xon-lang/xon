import { MethodAttributeContext } from '../../../grammar/xon-parser';
import { ExpressionNode } from '../../expression/expression-node';
import { getExpressionNode, getExpressionNodes } from '../../expression/expression-node-helper';
import { IdToken } from '../../id-token';
import { ParameterNode } from '../../parameter/parameter-node';
import { getParameterNodes } from '../../parameter/parameter-node-helper';
import { StatementNode } from '../../statement/statement-node';
import { getStatementsFromBody } from '../../statement/statement-node-helper';
import { AttributeTree } from '../attribute-node';

export class MethodAttributeNode extends AttributeTree {
  id: IdToken;
  isOperator: boolean;
  generics: ExpressionNode[] = [];
  parameters: ParameterNode[] = [];
  resultType: ExpressionNode;
  body: StatementNode[] = [];

  constructor(public ctx: MethodAttributeContext) {
    super();

    this.id = IdToken.fromContext(ctx.attrId());
    this.isOperator = !!ctx.attrId().operator();
    this.generics = getExpressionNodes(ctx.methodHeader().generics());
    this.parameters = getParameterNodes(ctx.methodHeader().parameter());
    this.resultType = getExpressionNode(ctx._result);
    this.body = getStatementsFromBody(ctx.body());
  }

  toString(): string {
    throw new Error('Not implemented');

    // const body = this.body.join('\n').replace(/^/gm, '  ');
    // return `${this.id}${this.type}\n${body}`;
  }
}
