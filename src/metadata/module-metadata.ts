import { glob } from 'glob';
import * as path from 'path';
import { ClassDefinitionTree } from '../tree/definition/class-definition/class-definition-tree';
import { DefinitionTree } from '../tree/definition/definition-tree';
import { parseSourceFile } from '../tree/parse';
import { ClassTypeMetadata } from './definition/class-definition/class-definition-metadata';
import { TypeMetadata } from './definition/definition-metadata';

export class ModuleMetadata {
  public definitions = new Map<string, TypeMetadata>();

  constructor(modulePath: string) {
    const definitionsMatrix = glob
      .sync(path.resolve(modulePath, '**/*.xon'))
      .map((x) => path.resolve(__dirname, x))
      .map((x) => parseSourceFile(x).definitions);

    const definitions = definitionsMatrix.reduce(
      (arr, x) => (arr.push(...x), arr),
      [] as DefinitionTree[],
    );

    definitions.forEach((x) => this.handleDefinition(x));
  }

  handleDefinition(definition: DefinitionTree) {
    if (definition instanceof ClassDefinitionTree) {
      this.definitions.set(definition.name, new ClassTypeMetadata(definition));
    }
  }
}
