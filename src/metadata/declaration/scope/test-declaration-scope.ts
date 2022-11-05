import { CoreDeclarationScope } from '@/metadata/declaration/scope/core/core-declaration-scope';
import { DeclarationScope } from '@/metadata/declaration/scope/declaration-scope';
import { ImportProvider } from '@/metadata/import-provider';

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
