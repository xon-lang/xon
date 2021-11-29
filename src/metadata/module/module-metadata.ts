import * as glob from 'glob';
import * as path from 'path';
import { ClassDefinitionTree } from '../../tree/definition/class-definition/class-definition-tree';
import { parseSourceFile } from '../../tree/parse';
import { DeclarationScope } from '../declaration-scope';
import { AttributeDeclarationMetadata } from '../declaration/attribute/attribute-declaration-metadata';
import { ClassDefinitionDeclarationMetadata } from '../declaration/definition/class-definition-declaration-metadata';
import { DeclarationMetadata } from '../declaration/declaration-metadata';

export class ModuleMetadata {
  declarations: DeclarationMetadata[] = [];

  constructor(moduleDir: string, defaultModules: ModuleMetadata[] = []) {
    const scope = new DeclarationScope();

    for (const declaration of defaultModules.flatMap((x) => x.declarations)) {
      scope.set(declaration);
    }

    const globPath = path.resolve(moduleDir, '**/*.xon');
    const sources = glob.sync(globPath).map((x) => parseSourceFile(x));

    for (const definition of sources.flatMap((x) =>
      x.definitions.map((x) => x as ClassDefinitionTree),
    )) {
      const declaration = new ClassDefinitionDeclarationMetadata(definition, scope);
      scope.set(declaration);
    }

    for (const attribute of sources.flatMap((x) => x.attributes)) {
      const declaration = new AttributeDeclarationMetadata(attribute, scope);
      scope.set(declaration);
    }
    this.declarations = [...scope.declarations.values()];
  }
}
