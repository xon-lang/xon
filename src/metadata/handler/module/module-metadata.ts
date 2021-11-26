import { DeclarationMetadata } from '../../declaration-metadata';

export class ModuleMetadata {
  constructor(public declarations: Map<string, DeclarationMetadata>) {}
}
