import { IndexMemberContext } from '../../../../grammar/xon-parser';
import { ParameterTree } from '../../../parameter/parameter.tree';
import { getStatementsTrees } from '../../../statement/statement-helper';
import { StatementTree } from '../../../statement/statement.tree';
import { getTypeTree } from '../../../type/type-helper';
import { TypeTree } from '../../../type/type.tree';
import { MemberTree } from '../member.tree';

export class IndexMemberTree extends MemberTree {
  public name: string;

  public generics: string[];

  public parameter: ParameterTree;

  public returnType?: TypeTree;

  public statements?: StatementTree[];

  public constructor(public ctx?: IndexMemberContext) {
    super();
    if (!ctx) return;

    this.name = ctx.AD().text;
    this.generics = ctx
      .generics()
      ?.id()
      .map((x) => x.text);
    this.parameter = new ParameterTree(ctx.parameter());
    this.returnType = getTypeTree(ctx.type());
    this.statements = getStatementsTrees(ctx.body());
  }
}
