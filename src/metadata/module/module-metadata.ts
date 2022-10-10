import { ModuleTree } from '../../tree/module/module-tree';
import { Metadata } from '../metadata';
import { getSourceMetadata } from '../source/source-metadata-helper';
import { updateModuleMetadataScope } from './module-metadata-helper';

export class ModuleMetadata extends Metadata {
  constructor(public tree: ModuleTree) {
    super();

    updateModuleMetadataScope(tree);
    for (const source of tree.sources) {
      getSourceMetadata(source);
    }
  }
}
