import { MethodTree } from '../../tree/method/method.tree';
import { ModuleMember } from './module-member-metadata';
import { ParameterMetadata } from './parameter-metadata';

export class MethodMetadata extends ModuleMember {
  public name: string;
  public parameters: ParameterMetadata[];

  public constructor(tree: MethodTree) {
    super();

    this.name = tree.name;
    this.parameters =
  }
}
