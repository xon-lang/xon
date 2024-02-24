import { Nothing, nothing } from '../../../../lib/core';
import { $Node, Node } from '../../../../parser/node/node';
import { IdNode } from '../../../../parser/node/token/id/id-node';
import { is } from '../../../../parser/util/is';
import { SemanticContext } from '../../../semantic-context';
import { DeclarationTypeSemantic, declarationTypeSemantic } from './declaration-type-semantic';

export function declarationTypeSemanticParse(context: SemanticContext, node: Node): DeclarationTypeSemantic | Nothing {
  if (is<IdNode>(node, $Node.ID)) {
    const declaration = context.findSingleDeclaration(node, nothing, nothing);

    if (!declaration) {
      return nothing;
    }

    const reference = context.createReference(node);
    const semantic = declarationTypeSemantic(reference, declaration, nothing);
    node.semantic = semantic;

    return semantic;
  }

  // A
  // A[]
  // A[][]
  // A{T}
  // if (is<InvokeNode>(node, $Node.INVOKE)) {
  //   const declaration = context.findSingleDeclaration(node, nothing, nothing);

  //   if (!declaration) {
  //     return nothing;
  //   }

  //   const reference = context.createReference(node);
  //   const semantic = declarationTypeSemantic(reference, declaration, nothing);
  //   node.semantic = semantic;

  //   return semantic;
  // }

  return nothing;
}

// function parseInvokeNode(node: InvokeNode): {
//   id: IdNode;
//   generics: ObjectNode | Nothing;
// } {}
