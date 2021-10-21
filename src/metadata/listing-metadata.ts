import { SourceTree } from '../tree/source/source-tree';
import { MethodMetadata } from './method-metadata';
import { getExtensionMemberMetadata } from './module-member/extension-member/extension-member-helper';
import { ExtensionMemberMetadata } from './module-member/extension-member/extension-member-metadata';
import { TypeMetadata } from './module-member/type-metadata';
import { PropertyMetadata } from './property-metadata';

export class SourceMetadata {
  public types: TypeMetadata[];
  public properties: PropertyMetadata[];
  public methods: MethodMetadata[];
  public extensionMembers: ExtensionMemberMetadata[];

  public constructor(tree: SourceTree) {
    this.types = tree.definitions.map((x) => new TypeMetadata(x));
    this.properties = tree.properties.map((x) => new PropertyMetadata(x));
    this.methods = tree.methods.map((x) => new MethodMetadata(x));
    this.extensionMembers = tree.extensionMembers.map(getExtensionMemberMetadata);
  }
}
