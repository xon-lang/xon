import { DefinitionExtensionTree } from '../../../tree/definition-extension/definition-extension-tree';
import { ModuleMember } from '../module-member-metadata';
import { TypeMetadata } from '../type-metadata';

export class ExtensionMemberMetadata extends ModuleMember {
  public name: string;
  public extensionType: TypeMetadata;

  public constructor(tree: DefinitionExtensionTree) {
    super();

    this.name = tree.name;
    this.extensionType = tree.extensionType;
  }
}
