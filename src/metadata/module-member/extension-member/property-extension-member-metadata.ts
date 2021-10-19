import { PropertyDefinitionExtensionTree } from '../../../tree/definition-extension/property-definition-extension/property-definition-extension-tree';
import { ExtensionMemberMetadata } from './extension-member-metadata';

export class PropertyExtensionMemberMetadata extends ExtensionMemberMetadata {
...
  public constructor(tree: PropertyDefinitionExtensionTree) {
    super(tree);
  }
}
