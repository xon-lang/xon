import { SourceTree } from '../tree/source/source-tree';
import { ModuleMetadata } from './module-metadata';
import { TypeMetadata } from './type-metadata';

export class SourceMetadata {
  public importMembers = new Map<string, TypeMetadata>();
  public importModules = new Map<string, ModuleMetadata>();

  public constructor(public tree: SourceTree) {}
}
