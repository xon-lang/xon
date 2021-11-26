import { IdTypeTree } from "../../../tree/type/id-type/id-type.tree";
import { DeclarationScope } from "../declaration-scope";
import { IdTypeMetadata } from "./id/id-type-metadata";
import { TypeMetadata } from "./type-metadata";

export function getTypeMetadata(
  tree: TypeMetadata,
  scope: DeclarationScope,
): TypeMetadata {
  if (tree instanceof IdTypeTree)
    return (tree.metadata = new IdTypeMetadata(tree, scope));
}
