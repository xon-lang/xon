import { TypeContext } from '../../grammar/xon-parser';
import { DefinitionMetadata } from '../../metadata/definition/definition-metadata';
import { BaseTree } from '../base.tree';

export abstract class TypeTree extends BaseTree {
  public name = this.constructor.name.replace(/TypeTree/, '');
  public genericArguments: TypeTree[] = [];
  public abstract ctx?: TypeContext;
  public metadata: DefinitionMetadata;

  public markGenerics(generics: string[]): void {
    this.genericArguments.forEach((x) => x.markGenerics(generics));
  }

  public abstract equals(other: TypeTree): boolean;

  public abstract useGenericsMap(genericsMap: Map<string, TypeTree>): TypeTree;

  public abstract getGenericsMap(type: TypeTree): Map<string, TypeTree>;
}
