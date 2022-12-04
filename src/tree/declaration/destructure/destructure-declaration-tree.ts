import { DestructureDeclarationContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { DeclarationTree } from '~/tree/declaration/declaration-tree';
import { getDeclarationTree } from '~/tree/declaration/declaration-tree-helper';
import { TypeTree } from '~/tree/type/type-tree';
import { getTypeTree } from '~/tree/type/type-tree-helper';
import { ValueTree } from '~/tree/value/value-tree';
import { getValueTree } from '~/tree/value/value-tree-helper';

export class DestructureDeclarationTree extends DeclarationTree {
  ctx: DestructureDeclarationContext;
  parameters: DeclarationTree[];
  type: TypeTree | null;
  value: ValueTree | null;

  constructor(ctx: DestructureDeclarationContext) {
    super();

    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    this.parameters = ctx.declarations().declaration().map(getDeclarationTree);

    const type = ctx.type() ?? null;
    this.type = type && getTypeTree(type);

    const value = ctx.value() ?? null;
    this.value = value && getValueTree(value);

    this.addChildren(...this.parameters, this.type, this.value);
  }
}
