/* eslint-disable no-magic-numbers */
import { MetaTypeContext } from '../../../grammar/xon-parser';
import { ExpressionTree } from '../../expression/expression.tree';
import { getTypeTree } from '../type-helper';
import { TypeTree } from '../type.tree';

export class MetaTypeTree extends TypeTree {
  public type: TypeTree;

  public metaName: string;

  public constructor(public ctx?: MetaTypeContext) {
    super();
    if (!ctx) return;

    this.type = getTypeTree(ctx.type());
    this.metaName = ctx.id().text;
  }

  public equals(other: TypeTree): boolean {
    return (
      other instanceof MetaTypeTree &&
      this.metaName === other.metaName &&
      this.type.equals(other.type)
    );
  }

  public is(other: TypeTree): boolean {
    return (
      other instanceof MetaTypeTree &&
      (this.metaName === other.metaName || other.metaName === 'Any') &&
      this.type.is(other.type)
    );
  }

  public fitWeight(expression: ExpressionTree): number {
    const expressionType = expression.getType();
    let k = 0;
    if (this.metaName === expression.constructor.name.replace(/ExpressionTree/, '')) k = 3;
    else if (this.metaName !== 'Any') k = 2;
    else return 0;

    if (expressionType.equals(this)) return 2 + k;
    if (expressionType.is(this)) return 1 + k;
    return 0;
  }
}
