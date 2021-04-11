import { OperatorMemberContext } from '../../../../grammar/xon-parser';
import { ParameterTree } from '../../../parameter/parameter.tree';
import { getStatementsTrees } from '../../../statement/statement-helper';
import { StatementTree } from '../../../statement/statement.tree';
import { getTypeTree } from '../../../type/type-helper';
import { TypeTree } from '../../../type/type.tree';
import { MemberTree } from '../member.tree';

export class OperatorMemberTree extends MemberTree {
  public name: string;

  public parameters: ParameterTree[];

  public generics: string[];

  public returnType?: TypeTree;

  public statements?: StatementTree[];

  public constructor(public ctx?: OperatorMemberContext) {
    super();
    if (!ctx) return;

    this.name = ctx.operator().text;
    this.generics = ctx
      .generics()
      ?.id()
      .map((x) => x.text);
    this.parameters = ParameterTree.fromContext(ctx.parameters());
    this.returnType = getTypeTree(ctx.type());
    this.statements = getStatementsTrees(ctx.body());
  }
}
