import { String2 } from '~/lib/core';
import { DeclarationMetadata } from '~/metadata/declaration/declaration-metadata';
import { ModelDeclarationMetadata } from '~/metadata/declaration/model/model-declaration-metadata';
import { ObjectDeclarationMetadata } from '~/metadata/declaration/object/object-declaration-metadata';
import { ImportProvider } from '~/metadata/import-provider';

export class CoreDeclarationScope {
  static instance = new CoreDeclarationScope();

  get any(): ModelDeclarationMetadata {
    return this.find<ModelDeclarationMetadata>('Any');
  }

  get boolean(): ModelDeclarationMetadata {
    return this.find<ModelDeclarationMetadata>('Boolean');
  }

  get true(): ObjectDeclarationMetadata {
    return this.find<ObjectDeclarationMetadata>('true');
  }

  get false(): ObjectDeclarationMetadata {
    return this.find<ObjectDeclarationMetadata>('false');
  }

  get integer(): ModelDeclarationMetadata {
    return this.find<ModelDeclarationMetadata>('Integer');
  }

  get float(): ModelDeclarationMetadata {
    return this.find<ModelDeclarationMetadata>('Float');
  }

  get number(): ModelDeclarationMetadata {
    return this.find<ModelDeclarationMetadata>('Number');
  }

  get none(): ModelDeclarationMetadata {
    return this.find<ModelDeclarationMetadata>('null');
  }

  get char(): ModelDeclarationMetadata {
    return this.find<ModelDeclarationMetadata>('Char');
  }

  get string(): ModelDeclarationMetadata {
    return this.find<ModelDeclarationMetadata>('String');
  }

  get array(): ModelDeclarationMetadata {
    return this.find<ModelDeclarationMetadata>('Array');
  }

  get unknown(): ModelDeclarationMetadata {
    return this.find<ModelDeclarationMetadata>('Unknown');
  }

  declarations = new Map<String2, DeclarationMetadata>();

  constructor() {
    const declarations = ImportProvider.instance.declarations('src/lib/@xon/core');
    for (const declaration of declarations) {
      this.declarations.set(declaration.name, declaration);
    }
  }

  find<T extends DeclarationMetadata>(name: String2): T {
    const declaration = this.declarations.get(name);
    if (!declaration) {
      throw new Error(`Declaration '${name}' not fount`);
    }

    return declaration as T;
  }
}
