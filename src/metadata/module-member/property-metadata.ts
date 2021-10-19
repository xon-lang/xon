import { PropertyTree } from '../../tree/property/property.tree';
import { ModuleMember } from './module-member-metadata';
import { TypeMetadata } from './type-metadata';

export class PropertyMetadata extends ModuleMember {
  public name: string;
  public type: TypeMetadata;

  public constructor(tree: PropertyTree) {
    super();
    this.name = tree.name;
    this.type = TypeMetadata();
  }
}
