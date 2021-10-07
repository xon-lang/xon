import { ExtensionMemberContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { getParametersTrees } from '../parameter/parameter-tree.helper';
import { ParameterTree } from '../parameter/parameter.tree';
import { getStatementsTrees } from '../statement/statement-tree.helper';
import { StatementTree } from '../statement/statement.tree';
import { getTypeTree } from '../type/type-tree.helper';
import { TypeTree } from '../type/type.tree';

export class ExtensionMemberTree extends BaseTree {
  public receiver: TypeTree;
  public name: string;
  public isPrivate: boolean;
  public genericParameters: string[];
  public parameters?: ParameterTree[] = [];
  public returnType?: TypeTree;
  public body?: StatementTree[];

  public constructor(public ctx?: ExtensionMemberContext) {
    super();
    if (!ctx) return;

    this.receiver = getTypeTree(ctx._receiver);
    this.name = ctx.id().text;
    this.isPrivate = this.name.startsWith('_');
    this.genericParameters =
      ctx
        .genericParameters()
        ?.id()
        .map((x) => x.text) || [];
    this.parameters = ctx.parameters() && getParametersTrees(ctx.parameters());
    this.returnType = getTypeTree(ctx._result);
    this.body = getStatementsTrees(ctx.functionBody());
  }
}
