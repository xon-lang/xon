import { TypeContext } from '../../grammar/xon-parser';
import { getLibType } from '../../xon-lib/lib-type';
import { BaseTree } from '../base.tree';
import { DefinitionTree } from '../definition/definition.tree';
import { ExpressionTree } from '../expression/expression.tree';

export class TypeTree extends BaseTree {
  name: string;

  isArray: boolean;

  constructor(public ctx?: TypeContext) {
    super();
    if (!ctx) return;
    
    this.name = ctx.ID().text;
    this.isArray = !!ctx.OpenBracket();
  }

  definition(): DefinitionTree {
    return getLibType(this.name);
  }

  equals(other: TypeTree): boolean {
    return this.name === other.name;
  }

  static getInfixType(operator: string, left: ExpressionTree, right: ExpressionTree): TypeTree {
    const { returnType } = left
      .getType()
      .definition()
      .infixOperators.find((x) => x.name === operator && x.arg.type.equals(right.getType()));
    return returnType;
  }
}
