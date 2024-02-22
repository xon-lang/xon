import { Nothing, nothing } from '../../../../lib/core';
import { IdNode } from '../../../../syntax/node/id/id-node';
import { SemanticContext } from '../../../semantic-context';
import { TypeSemantic } from '../type-semantic';
import { idTypeSemantic } from './id-type-semantic';

export function idTypeSemanticParse(context: SemanticContext, node: IdNode): TypeSemantic | Nothing {
  const declaration = context.findSingleDeclaration(node, nothing, nothing);

  if (!declaration) {
    return nothing;
  }

  const reference = context.createReference(node);
  const semantic = idTypeSemantic(reference, declaration);
  node.semantic = semantic;

  return semantic;
}
