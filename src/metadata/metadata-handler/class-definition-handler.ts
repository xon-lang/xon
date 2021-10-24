import { ClassDefinitionTree } from '../../tree/definition/class-definition/class-definition-tree';
import { DefinitionMetadata } from '../definition/definition-metadata';
import { MetadataHandler } from './metadata-handler';

export class ClassDefinitionHandler extends MetadataHandler {
  constructor(public definitions: Map<string, DefinitionMetadata>) {
    super();
  }

  handle(tree: ClassDefinitionTree) {

  }


  setClassPropertiesMetadata(tree: ClassDefinitionTree) {
    tree.members;
  }

  setClassMethodsMetadata(tree: ClassDefinitionTree) {}

}

