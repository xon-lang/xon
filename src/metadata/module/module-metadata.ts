import * as glob from 'glob';
import * as path from 'path';
import { AliasDefinitionTree } from '../../tree/definition/alias/alias-definition-tree';
import { AttributeDefinitionTree } from '../../tree/definition/attribute/attribute-definition-tree';
import { ClassDefinitionTree } from '../../tree/definition/class/class-definition-tree';
import { parseSourceFile } from '../../tree/parse';
import { DeclarationScope } from '../declaration-scope';
import { AttributeDeclarationMetadata } from '../declaration/attribute/attribute-declaration-metadata';
import { DeclarationMetadata } from '../declaration/declaration-metadata';
import { AliasDefinitionDeclarationMetadata } from '../declaration/definition/alias-definition-declaration-metadata';
import { AttributeDefinitionDeclarationMetadata } from '../declaration/definition/attribute-definition-declaration-metadata';
import { ClassDefinitionDeclarationMetadata } from '../declaration/definition/class-definition-declaration-metadata';

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
      if (definition instanceof AliasDefinitionTree)
        scope.set(new AliasDefinitionDeclarationMetadata(definition, scope));
      else if (definition instanceof AttributeDefinitionTree)
        scope.set(new AttributeDefinitionDeclarationMetadata(definition, scope));
      else if (definition instanceof ClassDefinitionTree)
        scope.set(new ClassDefinitionDeclarationMetadata(definition, scope));
    }

    for (const attribute of sources.flatMap((x) => x.attributes)) {
      scope.set(new AttributeDeclarationMetadata(attribute, scope));
    }
    this.declarations = [...scope.declarations.values()];
  }
}
