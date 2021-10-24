import { DefinitionMetadata } from '../../definition-metadata';
import { ClassMemberMetadata } from './class-member-metadata';

export class PropertyClassMemberMetadata extends ClassMemberMetadata {
  public name: string;
  public type: DefinitionMetadata;

  public constructor(public sourcePath: string, public tree: PropertyTree) {
    super();
  }
}
