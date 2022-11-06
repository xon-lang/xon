import { getSourceMetadata, Metadata, updateModuleMetadataScope } from '~/metadata';
import { ModuleTree } from '~/tree';

export class ModuleMetadata extends Metadata {
  constructor(public tree: ModuleTree) {
    super();

    updateModuleMetadataScope(tree);
    for (const source of tree.sources) {
      getSourceMetadata(source);
    }
  }
}
