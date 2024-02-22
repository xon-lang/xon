import { Nothing, nothing } from '../../../../lib/core';
import { GroupNode } from '../../../../syntax/node/group/group-node';
import { IdNode } from '../../../../syntax/node/id/id-node';
import { InvokeNode } from '../../../../syntax/node/invoke/invoke-node';
import { $Node, Node } from '../../../../syntax/node/node';
import { ObjectNode } from '../../../../syntax/node/object/object-node';
import { is } from '../../../../syntax/util/is';
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
