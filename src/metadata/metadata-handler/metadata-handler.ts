import { IdAssignmentTree } from '../../tree/assignment/id-assignment/id-assignment-statement.tree';
import { DefinitionMetadata } from '../definition/definition-metadata';

export abstract class MetadataHandler {
  public constructor(public scope: Scope) {}
}

export class Scope {
  map = new Map<string, IdAssignmentTree | DefinitionMetadata>();

  constructor(public parent?: Scope) {}

  find(name: string) {
    if (this.map.has(name)) return this.map.get(name);
    if (this.parent) return this.parent.find(name);
    throw new Error(`'${name}' not found`);
  }

  add(name: string, value: IdAssignmentTree | DefinitionMetadata) {
    this.map.set(name, value);
  }
}
