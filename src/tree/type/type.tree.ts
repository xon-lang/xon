import { TypeContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';

export abstract class TypeTree extends BaseTree {
  public name = this.constructor.name.replace(/TypeTree/, '');

  public generics: TypeTree[] = [];

  abstract ctx?: TypeContext;

  public markGenerics(generics: string[]): void {
    this.generics.forEach((x) => x.markGenerics(generics));
  }

  abstract equals(other: TypeTree): boolean;

  abstract useGenericsMap(genericsMap: Map<string, TypeTree>): TypeTree;

  abstract getGenericsMap(type: TypeTree): Map<string, TypeTree>;

  abstract toString(): string;
}
