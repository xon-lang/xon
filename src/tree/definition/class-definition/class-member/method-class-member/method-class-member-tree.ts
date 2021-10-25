import { MethodClassMemberContext } from '../../../../../grammar/xon-parser';
import { IdToken } from '../../../../id-token';
import { getParametersTrees } from '../../../../parameter/parameter-tree.helper';
import { ParameterTree } from '../../../../parameter/parameter.tree';
import { getStatementsFromMethodContext } from '../../../../statement/statement-tree.helper';
import { StatementTree } from '../../../../statement/statement.tree';
import { getTypeTree } from '../../../../type/type-tree.helper';
import { TypeTree } from '../../../../type/type.tree';
import { ClassMemberTree } from '../class-member.tree';

export class MethodClassMemberTree extends ClassMemberTree {
  public isPrivate: boolean;
  public genericParameters: string[];
  public parameters: ParameterTree[] = [];
  public returnType?: TypeTree;
  public body?: StatementTree[];

  public constructor(public ctx?: MethodClassMemberContext) {
    super();
    if (!ctx) return;

    this.id = new IdToken(ctx._name);
    this.isPrivate = this.id.text.startsWith('_');
    this.genericParameters = ctx.genericParameters()?._names.map((x) => x.text) || [];
    this.parameters = getParametersTrees(ctx.parameters());
    this.returnType = getTypeTree(ctx.type());
    this.body = getStatementsFromMethodContext(ctx.methodBody());
  }
}
