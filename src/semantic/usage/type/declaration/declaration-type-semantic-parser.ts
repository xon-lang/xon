import {Nothing, nothing} from '../../../../lib/core';
import {$Node, Node, is} from '../../../../parser/node/node';
import {InvokeNode} from '../../../../parser/node/syntax/invoke/invoke-node';
import {IdNode} from '../../../../parser/node/token/id/id-node';
import {OBJECT_NODE_OPEN_CODE} from '../../../../parser/syntax-config';
import {SemanticContext} from '../../../semantic-context';
import {typeSemanticParse} from '../type-semantic-parser';
import {DeclarationTypeSemantic, declarationTypeSemantic} from './declaration-type-semantic';

export function declarationTypeSemanticParse(context: SemanticContext, node: Node): DeclarationTypeSemantic | Nothing {
  if (is<IdNode>(node, $Node.ID)) {
    const declaration = context.findSingleDeclaration(node, 0, nothing);

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
  if (is<InvokeNode>(node, $Node.INVOKE) && is<IdNode>(node.instance, $Node.ID)) {
    if (node.group.open.text.charCodeAt(0) !== OBJECT_NODE_OPEN_CODE) {
      throw new Error('Not implemented');
    }

    const generics = node.group.items.map((x) => typeSemanticParse(context, x));
    const declaration = context.findSingleDeclaration(node.instance, generics.length, nothing);

    if (!declaration) {
      return nothing;
    }

    const reference = context.createReference(node);
    const semantic = declarationTypeSemantic(reference, declaration, nothing);
    // todo recheck, we always need set id semantic for all cases ???
    node.instance.semantic = semantic;
    node.semantic = semantic;

    return semantic;
  }

  return nothing;
}

// function parseInvokeNode(node: InvokeNode): {
//   id: IdNode;
//   generics: ObjectNode | Nothing;
// } {}
