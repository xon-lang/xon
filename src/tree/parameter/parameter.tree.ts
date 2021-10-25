import { ParameterContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { getTypeTree } from '../type/type-tree.helper';
import { TypeTree } from '../type/type.tree';

export class ParameterTree extends BaseTree {
  public name: string;
  public isPrivate: boolean;
  public type: TypeTree;
  public metaType?: string;

  public constructor(public ctx?: ParameterContext) {
    super();
    if (!ctx) return;

    this.name = ctx._name.text;
    this.isPrivate = this.name.startsWith('_');
    this.type = getTypeTree(ctx.type());
    this.metaType = ctx._meta?.text || null;
  }

  public toString(): string {
    return `${this.name} ${this.type}`;
  }
}
