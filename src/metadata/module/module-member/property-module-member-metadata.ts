import { PropertyTree } from '../../../tree/property/property-tree';
import { TypeMetadata } from '../../type/type-metadata';
import { ModuleMemberMetadata } from '../module-member-metadata';

export class PropertyModuleMemberMetadata extends ModuleMemberMetadata {
  public name: string;
  public type: TypeMetadata;

  public constructor(public sourcePath: string, public tree: PropertyTree) {
    super();
  }
}
