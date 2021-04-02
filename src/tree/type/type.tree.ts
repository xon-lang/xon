/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-magic-numbers */
import { TypeContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { ExpressionTree } from '../expression/expression.tree';
import { GenericTypeTree } from './generic-type/generic-type.tree';
import { PlainTypeTree } from './plain-type/plain-type.tree';
import { typeAny } from './type-helper';

export abstract class TypeTree extends BaseTree {
  public ctx?: TypeContext;

  public metaType: string;

  public inheritance: PlainTypeTree | GenericTypeTree = typeAny;

  public setMetaType(expression: ExpressionTree): TypeTree {
    this.metaType = expression.constructor.name.replace(/ExpressionTree/, '');
    return this;
  }

  public fitWeight(expression: ExpressionTree): number {
    let metaWeight = 0;
    if (this.metaType) {
      if (this.metaType === expression.metaType) metaWeight = 3;
      else if (this.metaType === 'Any') metaWeight = 2;
      else return 0;
    }

    if (this.equals(expression.getType())) return 2 + metaWeight;
    if (expression.getType().is(this)) return 1 + metaWeight;
    return 0;
  }

  public abstract equals(other: TypeTree): boolean;

  public abstract is(other: TypeTree): boolean;

  public abstract toString(): string;
}
