import { ParameterDeclarationContext } from '~/grammar/xon-parser';
import { SourceSpan } from '~/source/source-span';
import { DeclarationTree } from '~/tree/declaration/declaration-tree';
import { Token } from '~/tree/token';
import { TypeTree } from '~/tree/type/type-tree';
import { getTypeTree } from '~/tree/type/type-tree-helper';
import { ValueTree } from '~/tree/value/value-tree';
import { getValueTree } from '~/tree/value/value-tree-helper';

export class ParameterDeclarationTree extends DeclarationTree {
  ctx: ParameterDeclarationContext;
  name: Token;
  type: TypeTree | null;
  value: ValueTree | null;

  constructor(ctx: ParameterDeclarationContext) {
    super();

    this.ctx = ctx;
    this.sourceSpan = SourceSpan.fromContext(ctx);
    this.name = Token.from(ctx.ID());
    const type = ctx.type() ?? null;
    this.type = type && getTypeTree(type);

    const value = ctx.value() ?? null;
    this.value = value && getValueTree(value);

    this.addChildren(this.name, this.type, this.value);
  }
}
