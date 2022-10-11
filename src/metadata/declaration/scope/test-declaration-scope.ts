import { ImportProvider } from '../../import-provider';
import { CoreDeclarationScope } from './core/core-declaration-scope';
import { DeclarationScope } from './declaration-scope';

let _core: CoreDeclarationScope | null;

function core(): CoreDeclarationScope {
  if (_core) return _core;

  const importProvider = new ImportProvider('src/lib/@xon/core');
  const coreScope = new CoreDeclarationScope(importProvider.scope());
  return (_core = coreScope);
}

export class TestDeclarationScope extends DeclarationScope {
  constructor(public parent?: DeclarationScope) {
    super(parent);
    this.core = core();
  }
}
