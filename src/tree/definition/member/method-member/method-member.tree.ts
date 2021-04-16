import { MethodMemberContext } from '../../../../grammar/xon-parser';
import { ParameterTree } from '../../../parameter/parameter.tree';
import { getBody } from '../../../statement/statement-helper';
import { StatementTree } from '../../../statement/statement.tree';
import { getTypeTree } from '../../../type/type-helper';
import { TypeTree } from '../../../type/type.tree';
import { MemberTree } from '../member.tree';

export class MethodMemberTree extends MemberTree {
  public isPrivate: boolean;

  public generics: string[];

  public parameters: ParameterTree[] = [];

  public returnType?: TypeTree;

  public body?: StatementTree[];

  public constructor(public ctx?: MethodMemberContext) {
    super();
    if (!ctx) return;

    this.name = ctx.id().text;
    this.isPrivate = this.name.startsWith('_');
    this.generics =
      ctx
        .generics()
        ?.id()
        .map((x) => x.text) || [];
    this.parameters = ParameterTree.fromContext(ctx.parameters());
    this.returnType = getTypeTree(ctx.type());
    this.body = getBody(ctx.body());
  }
}
