import { LiteralTypeContext } from '../../../grammar/xon-parser';
import { evalExpression } from '../../eval';
import { getExpressionTree } from '../../expression/expression-tree.helper';
import { ExpressionTree } from '../../expression/expression.tree';
import { TypeTree } from '../type.tree';

export class LiteralTypeTree extends TypeTree {
  public expression: ExpressionTree;
  public value: unknown;

  public constructor(public ctx?: LiteralTypeContext) {
    super();
    if (!ctx) return;

    this.expression = getExpressionTree(ctx.expression());
    this.value = evalExpression(this.expression);
  }

  public equals(other: TypeTree): boolean {
    return other instanceof LiteralTypeTree && this.value === other.value;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public useGenericsMap(genericsMap: Map<string, TypeTree> = new Map()): LiteralTypeTree {
    return this;
  }

  // eslint-disable-next-line class-methods-use-this, @typescript-eslint/no-unused-vars
  public getGenericsMap(type: TypeTree): Map<string, TypeTree> {
    return new Map<string, TypeTree>();
  }

  public toString(): string {
    if (typeof this.value === 'string') return `"${this.value}"`;
    return `${this.value}`;
  }
}
