import { OperatorClassMemberContext } from '../../../../../grammar/xon-parser';
import { getParametersTrees } from '../../../../parameter/parameter-tree.helper';
import { ParameterTree } from '../../../../parameter/parameter.tree';
import { getStatementsFromMethodContext } from '../../../../statement/statement-tree.helper';
import { StatementTree } from '../../../../statement/statement.tree';
import { getTypeTree } from '../../../../type/type-tree.helper';
import { TypeTree } from '../../../../type/type.tree';
import { ClassMemberTree } from '../class-member.tree';

export class OperatorClassMemberTree extends ClassMemberTree {
  public name: string;
  public parameters: ParameterTree[];
  public returnType: TypeTree;
  public body?: StatementTree[];

  public constructor(public ctx?: OperatorClassMemberContext) {
    super();
    if (!ctx) return;

    this.name = ctx.operator().text;
    this.parameters = getParametersTrees(ctx.parameters());
    this.returnType = getTypeTree(ctx.type());
    this.body = getStatementsFromMethodContext(ctx.methodBody());
  }
}
