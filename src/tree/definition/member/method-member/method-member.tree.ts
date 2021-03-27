import { MethodMemberContext } from '../../../../grammar/xon-parser';
import { getStatementsTrees } from '../../../statement/statement-helper';
import { StatementTree } from '../../../statement/statement.tree';
import { TypeTree } from '../../../type/type.tree';
import { MemberTree } from '../member.tree';

export class MethodMemberTree extends MemberTree {
  public name: string;

  public isPrivate: boolean;

  public isAbstract: boolean;

  public parameters: {
    name: string;
    type: TypeTree;
  }[];

  public returnType?: TypeTree;

  public statements?: StatementTree[];

  public constructor(public ctx: MethodMemberContext) {
    super();

    this.identifierStorage.pushScope()

    this.name = ctx.ID().text;
    this.isPrivate = this.name.startsWith('_');
    this.isAbstract = !ctx.body();
    this.parameters = ctx.parameter().map((x) => ({
      name: x.ID().text,
      type: new TypeTree(x.type()),
    }));
    this.parameters.forEach((x) => this.identifierStorage.add({ name: x.name, type: x.type }));

    this.returnType = ctx.type() && new TypeTree(ctx.type());

    this.statements = ctx.body() && getStatementsTrees(ctx.body());
    this.identifierStorage.popScope()
  }
}
