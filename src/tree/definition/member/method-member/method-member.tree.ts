import { MethodMemberContext } from '../../../../grammar/xon-parser';
import { IdService } from '../../../../id-service/id-service';
import { ParameterTree } from '../../../parameter/parameter.tree';
import { getStatementsTrees } from '../../../statement/statement-helper';
import { StatementTree } from '../../../statement/statement.tree';
import { getTypeTree } from '../../../type/type-helper';
import { TypeTree } from '../../../type/type.tree';
import { MemberTree } from '../member.tree';

export class MethodMemberTree extends MemberTree {
  public name: string;

  public isPrivate: boolean;

  public isAbstract: boolean;

  public parameters: ParameterTree[];

  public returnType?: TypeTree;

  public statements?: StatementTree[];

  public constructor(public ctx: MethodMemberContext) {
    super();

    IdService.instance.popScope();
    IdService.instance.pushScope();
    this.name = ctx.ID().text;
    this.isPrivate = this.name.startsWith('_');
    this.isAbstract = !ctx.body();

    this.parameters = ctx.parameter().map((x) => new ParameterTree(x));
    this.parameters.forEach((x) => IdService.instance.addParameter(x));
    this.returnType = ctx.type() && getTypeTree(ctx.type());
    this.statements = ctx.body() && getStatementsTrees(ctx.body());
    IdService.instance.popScope();
  }
}
