import fs from 'fs';
import path from 'path';
import { TypeContext } from '../../grammar/xon-parser';
import { parseDefinition } from '../../parse';
import { BaseTree } from '../base.tree';
import { DefinitionTree } from '../definition/definition.tree';
import { ExpressionTree } from '../expression/expression.tree';

const libPath = 'src/xon-lib/';

export function getLibType(name: string): DefinitionTree {
  const code = fs.readFileSync(path.resolve(libPath, `${name}.xon`)).toString();
  return parseDefinition(code);
}

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
