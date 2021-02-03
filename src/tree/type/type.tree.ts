import fs from 'fs';
import { glob } from 'glob';
import path from 'path';
import { TypeContext } from '../../grammar/xon-parser';
import { parseDefinition } from '../../parse';
import { BaseTree } from '../base.tree';
import { DefinitionTree } from '../definition/definition.tree';
import { ExpressionTree } from '../expression/expression.tree';

const libTypePaths = {};
glob.sync('src/xon-lib/**/*.xon').forEach((x) => {
  const key = path
    .basename(x, '.xon')
    .replace(/^./, (z) => z.toUpperCase())
    .replace(/-(.)/g, (z) => z.toUpperCase())
    .replace(/-/g, '');
  libTypePaths[key] = x;
});
const definitionCache = new Map<string, DefinitionTree>();

export function getLibType(name: string): DefinitionTree {
  const code = fs.readFileSync(libTypePaths[name]).toString();
  if (definitionCache.has(name)) return definitionCache.get(name);

  const definition = parseDefinition(code);
  definitionCache.set(name, definition);
  return definition;
}

export class TypeTree extends BaseTree {
  name: string;

  generics: TypeTree[];

  constructor(public ctx?: TypeContext) {
    super();
    if (!ctx) return;

    this.name = ctx.ID().text;
    this.generics = ctx.type().map((x) => new TypeTree(x));
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
      .infixOperators.find((x) => x.operator === operator && x.arg.type.equals(right.getType()));
    return returnType;
  }

  static create(name: string, ...generics: (TypeTree | string)[]): TypeTree {
    const type = new TypeTree();
    type.name = name;
    type.generics = generics.map((x) => (x instanceof TypeTree ? x : TypeTree.create(x)));
    return type;
  }
}
