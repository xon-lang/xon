import { MethodContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { getParametersTrees } from '../parameter/parameter-tree.helper';
import { ParameterTree } from '../parameter/parameter.tree';
import { getStatementsFromMethodContext } from '../statement/statement-tree.helper';
import { StatementTree } from '../statement/statement.tree';
import { getTypeTree } from '../type/type-tree.helper';
import { TypeTree } from '../type/type.tree';

export class MethodTree extends BaseTree {
  public name: string;
  public isPrivate: boolean;
  public genericParameters: string[];
  public parameters: ParameterTree[] = [];
  public returnType?: TypeTree;
  public body?: StatementTree[];

  public constructor(public ctx?: MethodContext) {
    super();
    if (!ctx) return;

    this.name = ctx._name.text;
    this.isPrivate = this.name.startsWith('_');
    this.genericParameters = ctx.genericParameters()?._names.map((x) => x.text) || [];
    this.parameters = getParametersTrees(ctx.parameters());
    this.returnType = getTypeTree(ctx.type());
    this.body = getStatementsFromMethodContext(ctx.methodBody());
  }
}
