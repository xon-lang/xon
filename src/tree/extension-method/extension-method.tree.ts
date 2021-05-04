import { ExtensionMethodContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { getParametersTrees } from '../parameter/parameter-tree.helper';
import { ParameterTree } from '../parameter/parameter.tree';
import { getStatementsTrees } from '../statement/statement-tree.helper';
import { StatementTree } from '../statement/statement.tree';
import { getTypeTree } from '../type/type-tree.helper';
import { TypeTree } from '../type/type.tree';

export class ExtensionMethodTree extends BaseTree {
  public name: string;

  public extensionType: TypeTree;

  public declaredGenerics: string[];

  public parameters: ParameterTree[] = [];

  public returnType: TypeTree;

  public body?: StatementTree[];

  public constructor(public ctx?: ExtensionMethodContext) {
    super();
    if (!ctx) return;

    this.name = ctx.id().text;
    this.extensionType = getTypeTree(ctx.type(0));
    this.declaredGenerics =
      ctx
        .declaredGenerics()
        ?.DEFINITION_ID()
        .map((x) => x.text) || [];
    this.parameters = getParametersTrees(ctx.parameters());
    this.returnType = getTypeTree(ctx.type(1));
    this.body = getStatementsTrees(ctx.body());
  }

  public toString(): string {
    throw new Error(`${this}is not implemented.`);
  }
}
