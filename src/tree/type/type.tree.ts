import { TypeContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';
import { DefinitionTree } from '../definition/definition.tree';
import { getLibType } from './get-lib-type.util';

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

  static create(name: string, ...generics: (TypeTree | string)[]): TypeTree {
    const type = new TypeTree();
    type.name = name;
    type.generics = generics.map((x) => (x instanceof TypeTree ? x : TypeTree.create(x)));
    return type;
  }
}
