import { ClassDefinitionTree } from '../tree/definition/class-definition/class-definition-tree';
import { DefinitionTree } from '../tree/definition/definition-tree';
import { ImportTree } from '../tree/import/import.tree';
import { SourceTree } from '../tree/source/source-tree';
import { ModuleMetadata } from './handler/module/module-metadata';
import { TypeMetadata } from './type/type-metadata';

export class SourceMetadata {
  sourceTree: SourceTree;
  baseDir: string;
  defaultDefinitions: Map<string, TypeMetadata>;
  definitions = new Map<string, TypeMetadata>();

  constructor(
    sourceTree: SourceTree,
    baseDir: string,
    defaultDefinitions: Map<string, TypeMetadata>,
  ) {
    this.sourceTree = sourceTree;
    this.baseDir = baseDir;
    this.defaultDefinitions = defaultDefinitions;

    this.addDefaultDefinitions();
    this.addImportsDefinitions();
    this.addSourceDefinitions();

    for (const definitionTree of sourceTree.definitions) {
      this.setDefinitionMetadata(definitionTree);
    }
  }

  addDefaultDefinitions() {
    for (const definition of this.defaultDefinitions.values()) {
      this.definitions.set(definition.name, definition);
    }
  }

  addImportsDefinitions() {
    for (const importTree of this.sourceTree.imports.filter((x) => !x.members)) {
      for (const definition of this.findModuleImport(importTree).definitions.values()) {
        this.definitions.set(definition.name, definition);
      }
    }
    for (const importTree of this.sourceTree.imports.filter((x) => x.members)) {
      const moduleDefinitions = this.findModuleImport(importTree).definitions;
      for (const member of importTree.members) {
        if (!moduleDefinitions.has(member.id))
          throw new Error(`Not found '${member.id}' in '${importTree.path}'`);

        this.definitions.set(member.alias || member.id, moduleDefinitions.get(member.id));
      }
    }
  }

  addSourceDefinitions() {
    for (const definitionTree of this.sourceTree.definitions) {
      if (!this.defaultDefinitions.has(definitionTree.id))
        throw new Error(`Not found '${definitionTree.id}'`);
      this.definitions.set(definitionTree.id, this.defaultDefinitions.get(definitionTree.id));
    }
  }

  findModuleImport(importTree: ImportTree) {
    return ModuleMetadata.modules.get(importTree.path.replace('.', '/'));
  }

  setDefinitionMetadata(tree: DefinitionTree) {
    tree.metadata = this.findDefinition(tree.id);
    if (tree instanceof ClassDefinitionTree) {
      this.setClassPropertiesMetadata(tree);
      this.setClassMethodsMetadata(tree);
    }
  }
}
