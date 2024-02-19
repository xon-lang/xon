import { Nothing, nothing } from '../../lib/core';
import { DeclarationNode } from '../../syntax/node/declaration/declaration-node';
import { MODEL_MODIFIER } from '../../syntax/syntax-config';
import { genericDeclarationsHandle } from '../generic/generic-semantic-parser';
import { $Semantic, semanticIs } from '../semantic';
import { SemanticContext } from '../semantic-context';
import { parseValueSemantic } from '../value/value-semantic-parser';
import { ModelDeclarationSemantic, modelShallowDeclarationSemantic } from './model-semantic';

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
  if (semanticIs<ModelDeclarationSemantic>(node.semantic, $Semantic.MODEL)) {
    const childContext = context.createChildContext();

    if (node.generics) {
      const genericDeclarations = node.generics.items.filter((x): x is DeclarationNode => !!x);
      node.semantic.generics = genericDeclarationsHandle(childContext, genericDeclarations);
    }

    if (node.type?.value) {
      node.semantic.base = parseValueSemantic(childContext, node.type.value);
    }

    if (node.attributes.length > 0) {
      // todo
    }
  }
}
