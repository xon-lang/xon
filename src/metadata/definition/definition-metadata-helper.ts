import { ClassDefinitionTree } from "../../tree/definition/class-definition/class-definition-tree";
import { DefinitionTree } from "../../tree/definition/definition-tree";
import { IdToken } from "../../tree/id-token";
import { ClassDefinitionMetadata } from "./class-definition/class-definition-metadata";
import { DefinitionMetadata } from "./definition-metadata";
import { GenericDefinition } from "./generic-definition/generic-definition-metadata";

export const getDefinitionMetadata = (tree: DefinitionTree): DefinitionMetadata => {
  if (tree === undefined) return undefined;

  if (tree instanceof ClassDefinitionTree) return new ClassDefinitionMetadata(tree);

  throw Error(`'${tree.constructor.name}' not found`);
};