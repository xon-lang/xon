import { ExtensionPropertyContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { getStatementsTrees } from '../statement/statement-tree.helper';
import { StatementTree } from '../statement/statement.tree';
import { getTypeTree } from '../type/type-tree.helper';
import { TypeTree } from '../type/type.tree';

export class ExtensionPropertyTree extends BaseTree {
  public name: string;

  public extensionType: TypeTree;

  public returnType: TypeTree;

  public body?: StatementTree[];

  public constructor(public ctx?: ExtensionPropertyContext) {
    super();
    if (!ctx) return;

    this.name = ctx.id().text;
    this.extensionType = getTypeTree(ctx.type(0));
    this.returnType = getTypeTree(ctx.type(1));
    this.body = getStatementsTrees(ctx.body());
  }

  public toString(): string {
    throw new Error(`${this}is not implemented.`);
  }
}
