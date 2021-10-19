import { MethodDefinitionExtensionTree } from '../../../tree/definition-extension/method-definition-extension/method-definition-extension-tree';
import { ExtensionMemberMetadata } from './extension-member-metadata';

export class MethodExtensionMemberMetadata extends ExtensionMemberMetadata {
...
  public constructor(tree: MethodDefinitionExtensionTree) {
    super(tree);

  }
}
