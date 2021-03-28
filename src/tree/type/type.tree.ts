import { TypeContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { GenericTypeTree } from './generic-type/generic-type.tree';
import { PlainTypeTree } from './plain-type/plain-type.tree';
import { typeAny } from './type-helper';

export abstract class TypeTree extends BaseTree {
  public ctx?: TypeContext;

  public inheritance: PlainTypeTree | GenericTypeTree = typeAny;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types
  public fitWeight(expression: any): number {
    const expressionType = expression.getType();
    // eslint-disable-next-line no-magic-numbers
    if (expressionType.equals(this)) return 2;
    if (expressionType.is(this)) return 1;
    return 0;
  }

  public abstract equals(other: TypeTree): boolean;

  public abstract is(other: TypeTree): boolean;

  // public abstract fitWeight(expression: ExpressionTree): number;
}
