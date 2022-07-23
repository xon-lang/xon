import { moduleConfig } from '../../../module/default-module-config';
import { ImportProvider } from '../../import-provider';
import { DeclarationScope } from './declaration-scope';

export class TestDeclarationScope extends DeclarationScope {
  constructor() {
    const provider = new ImportProvider(moduleConfig.coreModulePath);
    super(provider.scope());
  }
}
