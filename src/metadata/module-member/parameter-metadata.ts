import { ParameterTree } from '../../tree/parameter/parameter.tree';
import { TypeMetadata } from './type-metadata';

export class ParameterMetadata {
  public name: string;
  public type: TypeMetadata;

  public constructor(tree: ParameterTree) {
    this.name = tree.name;
    this.type = ...TypeMetadata();
  }
}
