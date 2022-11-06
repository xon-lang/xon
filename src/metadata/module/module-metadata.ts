import { Metadata } from '~/metadata/metadata';
import { updateModuleMetadataScope } from '~/metadata/module/module-metadata-helper';
import { getSourceMetadata } from '~/metadata/source/source-metadata-helper';
import { ModuleTree } from '~/tree/module/module-tree';

export class ModuleMetadata extends Metadata {
  constructor(public tree: ModuleTree) {
    super();

    updateModuleMetadataScope(tree);
    for (const source of tree.sources) {
      getSourceMetadata(source);
    }
  }
}
