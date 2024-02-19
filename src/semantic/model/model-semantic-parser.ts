import { Nothing, nothing } from '../../lib/core';
import { DeclarationNode } from '../../syntax/node/declaration/declaration-node';
import { IdNode } from '../../syntax/node/id/id-node';
import { $Node, Node } from '../../syntax/node/node';
import { MODEL_MODIFIER } from '../../syntax/syntax-config';
import { is } from '../../syntax/util/is';
import { genericDeclarationsHandle } from '../generic/generic-semantic-parser';
import { $Semantic, ValueSemantic, semanticIs } from '../semantic';
import { SemanticContext } from '../semantic-context';
import { ModelDeclarationSemantic, modelShallowDeclarationSemantic, modelValueSemantic } from './model-semantic';

export function modelDeclarationsHandle(
  context: SemanticContext,
  declarations: DeclarationNode[],
): (ModelDeclarationSemantic | Nothing)[] {
  const semanticDeclarations = declarations.map((x) => modelDeclarationShallowHandle(context, x));

  for (const declaration of declarations) {
    modelDeclarationDeepHandle(context, declaration);
  }

  return semanticDeclarations;
}

export function modelDeclarationShallowHandle(
  context: SemanticContext,
  node: DeclarationNode,
): ModelDeclarationSemantic | Nothing {
  if (node.modifier?.text === MODEL_MODIFIER && node.id) {
    const reference = context.createReference(node);
    const name = node.id.text;

    const declaration = modelShallowDeclarationSemantic(reference, name);
    node.semantic = declaration;
    context.addDeclaration(declaration);

    return declaration;
  }

  return nothing;
}

export function modelDeclarationDeepHandle(context: SemanticContext, node: DeclarationNode): void {
  if (semanticIs<ModelDeclarationSemantic>(node.semantic, $Semantic.MODEL_DECLARATION)) {
    const childContext = context.createChildContext();

    if (node.generics) {
      const genericDeclarations = node.generics.items.filter((x): x is DeclarationNode => !!x);
      node.semantic.generics = genericDeclarationsHandle(childContext, genericDeclarations);
    }

    if (node.type) {
      node.semantic.base = parseValueSemantic(childContext, node.type);
    }

    if (node.attributes.length > 0) {
      // todo
    }
  }
}

function parseValueSemantic(context: SemanticContext, node: Node | Nothing): ValueSemantic | Nothing {
  if (is<IdNode>(node, $Node.ID)) {
    const declarations = context.findDeclarations(node.text);

    if (declarations.length !== 1) {
      throw new Error('Not implemented');
    }

    const declaration = declarations[0];

    if (semanticIs<ModelDeclarationSemantic>(declaration, $Semantic.MODEL_DECLARATION)) {
      const reference = context.createReference(node);
      const semantic = modelValueSemantic(reference, declaration, []);
      node.semantic = semantic;

      return semantic;
    }

    return nothing;
  }

  return nothing;
}
