import { TypeMetadata } from './type/type-metadata';

export class ModuleMetadata {
  constructor(public declarations: Map<string, TypeMetadata>) {}
}
