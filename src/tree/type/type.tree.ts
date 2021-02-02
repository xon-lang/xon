import fs from 'fs';
import path from 'path';
import { TypeContext } from '../../grammar/xon-parser';
import { parseDefinition } from '../../parse';
import { BaseTree } from '../base.tree';
import { DefinitionTree } from '../definition/definition.tree';
import { ExpressionTree } from '../expression/expression.tree';

const libPath = 'src/xon-lib/';
const cache = new Map<string, DefinitionTree>();

export function getLibType(name: string): DefinitionTree {
  const code = fs.readFileSync(path.resolve(libPath, `${name}.xon`)).toString();
  if (cache.has(name)) return cache.get(name);

  const definition = parseDefinition(code);
  cache.set(name, definition);
  return definition;
}

export class TypeTree extends BaseTree {
  name: string;

  generics: TypeTree[];

  constructor(public ctx?: TypeContext) {
    super();
    if (!ctx) return;

    if (ctx.OpenBracket()) {
      this.name = 'Array';
      this.generics = [TypeTree.create(ctx.ID().text)];
    } else {
      this.name = ctx.ID().text;
    }
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

  static create(name: string, ...generics:( TypeTree | string)[]): TypeTree {
    const type = new TypeTree();
    type.name = name;
    type.generics = generics.map((x) =>x instanceof TypeTree? x: TypeTree.create(x));
    return type;
  }
}
