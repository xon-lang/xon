import * as glob from 'glob';
import * as path from 'path';
import { ClassDefinitionTree } from '../../../tree/definition/class-definition/class-definition-tree';
import { parseSourceFile } from '../../../tree/parse';
import { AttributeDeclarationMetadata } from '../declaration/attribute/attribute-declaration-metadata';
import { ClassDeclarationMetadata } from '../declaration/class/class-declaration-metadata';
import { DeclarationMetadata } from '../declaration/declaration-metadata';

export class ModuleMetadata {
  declarations: DeclarationMetadata[] = [];

  constructor(moduleDir: string, defaultModules: ModuleMetadata[] = []) {
    for (const declaration of defaultModules.flatMap((x) => x.declarations)) {
      this.declarations.push(declaration);
    }

    const globPath = path.resolve(moduleDir, '**/*.xon');
    const sources = glob.sync(globPath).map((x) => parseSourceFile(x));

    for (const definition of sources.flatMap((x) =>
      x.definitions.map((x) => x as ClassDefinitionTree),
    )) {
      const declaration = new ClassDeclarationMetadata(definition);
      this.declarations.push(declaration);
    }

    for (const attribute of sources.flatMap((x) => x.attributes)) {
      const declaration = new AttributeDeclarationMetadata(attribute);
      this.declarations.push(declaration);
    }
  }
}
