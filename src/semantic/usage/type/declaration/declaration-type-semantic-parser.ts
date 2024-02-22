import { Nothing, nothing } from '../../../../lib/core';
import { IdNode } from '../../../../syntax/node/id/id-node';
import { $Node, Node } from '../../../../syntax/node/node';
import { is } from '../../../../syntax/util/is';
import { SemanticContext } from '../../../semantic-context';
import { TypeSemantic } from '../type-semantic';
import { declarationTypeSemantic } from './declaration-type-semantic';

export function declarationTypeSemanticParse(context: SemanticContext, node: Node): TypeSemantic | Nothing {
  if (is<IdNode>(node, $Node.ID)) {
    const declaration = context.findSingleDeclaration(node, nothing, nothing);

    if (!declaration) {
      return nothing;
    }

    const reference = context.createReference(node);
    const semantic = declarationTypeSemantic(reference, declaration);
    node.semantic = semantic;

    return semantic;
  }

  return nothing;
}
