import { OperatorMemberContext } from '../../../../grammar/xon-parser';
import { getStatementsTrees } from '../../../statement/statement-helper';
import { StatementTree } from '../../../statement/statement.tree';
import { TypeTree } from '../../../type/type.tree';
import { DefinitionTree } from '../../definition.tree';
import { MemberTree } from '../member.tree';

export class OperatorMemberTree extends MemberTree {
  public name: string;

  public parameters: {
    name: string;
    type: TypeTree;
  }[];

  public returnType: TypeTree;

  public statements: StatementTree[];

  public constructor(public ctx: OperatorMemberContext, definition?: DefinitionTree) {
    super();

    this.name = ctx.operator().text;
    this.parameters = ctx.parameter().map((x) => ({
      name: x.ID().text,
      type: new TypeTree(x.type()),
    }));

    if (definition && this.parameters[0].type.name !== definition.name) {
      throw new Error(
        `The first parameter type must be "${definition.name}" but "${this.parameters[0].type.name}"`,
      );
    }

    this.returnType = ctx.type() && new TypeTree(ctx.type());
    this.statements = ctx.body() && getStatementsTrees(ctx.body());
  }
}
