import { SourceTree } from '../tree/source/source-tree';
import { ModuleMetadata } from './module-metadata';
import { TypeMetadata } from './definition/definition-metadata';

export class SourceMetadata {
  public importMembers = new Map<string, TypeMetadata>();
  public importModules = new Map<string, ModuleMetadata>();

  public constructor(public tree: SourceTree) {}
}
